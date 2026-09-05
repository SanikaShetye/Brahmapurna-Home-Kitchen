import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import "../css/Checkout.css";
import { FaWhatsapp } from "react-icons/fa";
function Checkout() {
    const navigate = useNavigate();

    const {
        cartItems,
        totalPrice,
        clearCart
    } = useCart();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        city: "",
        pincode: "",
        paymentMethod: "Cash on Delivery"
    });

    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);


    // =========================
    // HANDLE INPUT CHANGE
    // =========================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };


    // =========================
    // LOAD RAZORPAY SCRIPT
    // =========================

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {

            if (window.Razorpay) {
                resolve(true);
                return;
            }

            const script = document.createElement("script");

            script.src = "https://checkout.razorpay.com/v1/checkout.js";

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };


    // =========================
    // CREATE OUR ORDER
    // =========================

    const createOurOrder = async () => {

        const userData = localStorage.getItem("user");

        const user = userData
            ? JSON.parse(userData)
            : null;

        const orderData = {
            user: user?._id || undefined,

            customerName: formData.name,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            pincode: formData.pincode,

            items: cartItems.map((item) => ({
                food: item._id,
                name: item.name,
                price: Number(item.price),
                quantity: item.quantity
            })),

            subtotal: Number(totalPrice),

            deliveryCharge: 0,

            totalAmount: Number(totalPrice),

            paymentMethod: formData.paymentMethod
        };

        console.log("Order Data:", orderData);

        const response = await fetch(
            "http://localhost:5000/api/orders",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(orderData)
            }
        );

        const data = await response.json();

        console.log("Order Response:", data);

        if (!response.ok) {
            throw new Error(
                data.message || "Failed to place order."
            );
        }

        return data.order;
    };


    // =========================
    // CREATE RAZORPAY ORDER
    // =========================

    const createRazorpayOrder = async () => {

        const response = await fetch(
            "http://localhost:5000/api/payment/create-order",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    amount: Number(totalPrice)
                })
            }
        );

        const data = await response.json();

        console.log("Razorpay Order Response:", data);

        if (!response.ok) {
            throw new Error(
                data.message ||
                "Failed to create Razorpay order."
            );
        }

        return data;
    };


    // =========================
    // VERIFY PAYMENT
    // =========================

    const verifyPayment = async (
        paymentResponse,
        ourOrderId
    ) => {

        const response = await fetch(
            "http://localhost:5000/api/payment/verify",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    razorpay_order_id:
                        paymentResponse.razorpay_order_id,

                    razorpay_payment_id:
                        paymentResponse.razorpay_payment_id,

                    razorpay_signature:
                        paymentResponse.razorpay_signature,

                    orderId: ourOrderId
                })
            }
        );

        const data = await response.json();

        console.log("Payment Verification Response:", data);

        if (!response.ok) {
            throw new Error(
                data.message ||
                "Payment verification failed."
            );
        }

        return data;
    };


    // =========================
    // HANDLE PLACE ORDER
    // =========================

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        // Check cart
        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            navigate("/cart");
            return;
        }

        try {

            setLoading(true);


            // ==========================================
            // CASH ON DELIVERY
            // ==========================================

            if (
                formData.paymentMethod ===
                "Cash on Delivery"
            ) {

                const order = await createOurOrder();

                setOrderId(order.orderId);

                setOrderPlaced(true);

                clearCart();

                return;
            }


            // ==========================================
            // ONLINE PAYMENT
            // ==========================================

            const razorpayLoaded =
                await loadRazorpayScript();

            if (!razorpayLoaded) {
                throw new Error(
                    "Razorpay failed to load. Please check your internet connection."
                );
            }


            // ==========================================
            // FIRST CREATE OUR MONGODB ORDER
            // ==========================================

            const order = await createOurOrder();

            console.log(
                "Our MongoDB Order:",
                order
            );


            // ==========================================
            // CREATE RAZORPAY ORDER
            // ==========================================

            const razorpayData =
                await createRazorpayOrder();

            console.log(
                "Razorpay Order:",
                razorpayData.order
            );


            // ==========================================
            // RAZORPAY CHECKOUT OPTIONS
            // ==========================================

            const options = {

                key: razorpayData.key,

                amount:
                    razorpayData.order.amount,

                currency:
                    razorpayData.order.currency,

                name:
                    "Brahmapurna Home Kitchen",

                description:
                    "Food Order Payment",

                order_id:
                    razorpayData.order.id,


                // ======================================
                // PREFILL CUSTOMER DETAILS
                // ======================================

                prefill: {
                    name: formData.name,
                    contact: formData.phone
                },


                // ======================================
                // NOTES
                // ======================================

                notes: {
                    orderId: order.orderId,
                    customerName: formData.name
                },


                // ======================================
                // PAYMENT SUCCESS
                // ======================================

                handler: async function (
                    paymentResponse
                ) {

                    try {

                        console.log(
                            "Razorpay Payment Response:",
                            paymentResponse
                        );

                        setLoading(true);


                        // Verify payment on backend
                        await verifyPayment(
                            paymentResponse,
                            order.orderId
                        );


                        // Show order confirmation
                        setOrderId(
                            order.orderId
                        );

                        setOrderPlaced(true);

                        // Clear cart
                        clearCart();

                    } catch (error) {

                        console.error(
                            "Payment Verification Error:",
                            error
                        );

                        alert(
                            error.message ||
                            "Payment verification failed."
                        );

                    } finally {

                        setLoading(false);

                    }
                },


                // ======================================
                // PAYMENT MODAL CLOSED
                // ======================================

                modal: {
                    ondismiss: function () {

                        console.log(
                            "Razorpay payment window closed."
                        );

                        setLoading(false);

                    }
                },


                // ======================================
                // THEME
                // ======================================

                theme: {
                    color: "#3b2015"
                }
            };


            // ==========================================
            // OPEN RAZORPAY
            // ==========================================

            const razorpay =
                new window.Razorpay(options);


            razorpay.on(
                "payment.failed",
                function (response) {

                    console.error(
                        "Payment Failed:",
                        response.error
                    );

                    alert(
                        response.error.description ||
                        "Payment failed. Please try again."
                    );

                    setLoading(false);
                }
            );


            razorpay.open();

        } catch (error) {

            console.error(
                "Order Error:",
                error
            );

            alert(
                error.message ||
                "Something went wrong while placing your order."
            );

        } finally {

            setLoading(false);

        }
    };


    // =========================
    // ORDER CONFIRMED SCREEN
    // =========================

    if (orderPlaced) {
        return (
            <div className="checkout-page">

                <Header />

                <main className="order-success-container">

                    <div className="order-success-card">

                        <div className="success-icon">
                            ✓
                        </div>

                        <h1>
                            Order Confirmed!
                        </h1>

                        <p className="success-message">
                            Thank you for ordering from
                            <strong>
                                {" "}Brahmapurna Home Kitchen
                            </strong>.
                        </p>

                        <div className="order-id-box">

                            <span>
                                Order ID
                            </span>

                            <strong>
                                #{orderId}
                            </strong>

                        </div>

                        <p className="success-info">
                            Your order has been successfully placed.
                            We will prepare your delicious homemade food
                            and get it ready for delivery.
                        </p>

                        <div className="success-actions">

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/menu")
                                }
                                className="continue-shopping-btn"
                            >
                                Continue Shopping
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/")
                                }
                                className="home-btn"
                            >
                                Back to Home
                            </button>

                        </div>

                    </div>

                </main>

            </div>
        );
    }
    // =========================
    // HANDLE WHATSAPP ORDER
    // =========================
        const handleWhatsAppOrder = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        const itemsMessage = cartItems
            .map(
                (item, index) =>
                    `${index + 1}. ${item.name} x ${item.quantity} - ₹${Number(item.price) * item.quantity}`
            )
            .join("\n");

        const message = `Hello Brahmapurna Home Kitchen,

            I would like to place an order.

            ORDER ITEMS:
            ${itemsMessage}

            Subtotal: ₹${totalPrice}
            Delivery: ₹0
            TOTAL: ₹${totalPrice}

            CUSTOMER DETAILS:
            Name: ${formData.name}
            Phone: ${formData.phone}
            Address: ${formData.address}
            City: ${formData.city}
            Pincode: ${formData.pincode}

            Please confirm my order.

            Thank you!`;

                const whatsappUrl = `https://wa.me/917666441794?text=${encodeURIComponent(
                    message
                )}`;

                window.open(whatsappUrl, "_blank");
            };
    // =========================
    // CHECKOUT PAGE
    // =========================

    return (
        <div className="checkout-page">

            <Header />

            <main className="checkout-container">

                <h1 className="checkout-title">
                    Checkout
                </h1>


                <div className="checkout-layout">


                    {/* =========================
                        CUSTOMER DETAILS
                    ========================= */}

                    <section className="checkout-form-section">

                        <h2>
                            Delivery Details
                        </h2>


                        <form onSubmit={handlePlaceOrder}>


                            {/* NAME */}

                            <div className="form-group">

                                <label htmlFor="name">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                />

                            </div>


                            {/* PHONE */}

                            <div className="form-group">

                                <label htmlFor="phone">
                                    Mobile Number
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile number"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    required
                                />

                            </div>


                            {/* ADDRESS */}

                            <div className="form-group">

                                <label htmlFor="address">
                                    Delivery Address
                                </label>

                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your complete delivery address"
                                    rows="4"
                                    required
                                />

                            </div>


                            {/* CITY + PINCODE */}

                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="city">
                                        City
                                    </label>

                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        placeholder="Enter city"
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="pincode">
                                        Pincode
                                    </label>

                                    <input
                                        type="text"
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        placeholder="6-digit pincode"
                                        pattern="[0-9]{6}"
                                        maxLength="6"
                                        required
                                    />

                                </div>

                            </div>


                            {/* =========================
                                PAYMENT METHOD
                            ========================= */}

                            <div className="payment-section">

                                <h2>
                                    Payment Method
                                </h2>


                                <label className="payment-option">

                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Cash on Delivery"
                                        checked={
                                            formData.paymentMethod ===
                                            "Cash on Delivery"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        💵 Cash on Delivery
                                    </span>

                                </label>


                                <label className="payment-option">

                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="Online Payment"
                                        checked={
                                            formData.paymentMethod ===
                                            "Online Payment"
                                        }
                                        onChange={handleChange}
                                    />

                                    <span>
                                        💳 Online Payment
                                    </span>

                                </label>

                            </div>


                            {/* =========================
                                PLACE ORDER BUTTON
                            ========================= */}
                            <div className="checkout-buttons">
                                <button
                                    type="submit"
                                    className="checkout-button"
                                    disabled={loading}
                                >
                                    {loading ? "Processing..." : "Place Order"}
                                </button>

                                <button
                                    type="button"
                                    className="whatsapp-order-button"
                                    onClick={handleWhatsAppOrder}
                                >
                                    <FaWhatsapp className="whatsapp-icon" />
                                    Order via WhatsApp
                                </button>

                            </div>
                        </form>

                    </section>


                    {/* =========================
                        ORDER SUMMARY
                    ========================= */}

                    <aside className="checkout-summary">

                        <h2>
                            Order Summary
                        </h2>


                        <div className="checkout-items">

                            {cartItems.map((item) => (

                                <div
                                    className="checkout-item"
                                    key={item._id}
                                >

                                    <div className="checkout-item-info">

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <span>
                                            Qty: {item.quantity}
                                        </span>

                                    </div>


                                    <strong>
                                        ₹
                                        {Number(item.price) *
                                            item.quantity}
                                    </strong>

                                </div>

                            ))}

                        </div>


                        <div className="summary-divider"></div>


                        <div className="checkout-summary-row">

                            <span>
                                Subtotal
                            </span>

                            <span>
                                ₹{totalPrice}
                            </span>

                        </div>


                        <div className="checkout-summary-row">

                            <span>
                                Delivery
                            </span>

                            <span>
                                ₹0
                            </span>

                        </div>


                        <div className="summary-divider"></div>


                        <div className="checkout-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                ₹{totalPrice}
                            </strong>

                        </div>

                    </aside>

                </div>

            </main>

        </div>
    );
}

export default Checkout;