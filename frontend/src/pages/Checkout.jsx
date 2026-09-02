import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import "../css/Checkout.css";

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
    // PLACE ORDER
    // =========================
    const handlePlaceOrder = (e) => {
        e.preventDefault();

        if (cartItems.length === 0) {
            alert("Your cart is empty.");
            navigate("/cart");
            return;
        }

        // Generate temporary order ID
        const newOrderId =
            "BK" + Math.floor(100000 + Math.random() * 900000);

        setOrderId(newOrderId);

        // Show confirmation
        setOrderPlaced(true);

        // Clear cart after placing order
        clearCart();
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
                            <strong> Brahmapurna Home Kitchen</strong>.
                        </p>

                        <div className="order-id-box">
                            <span>Order ID</span>
                            <strong>#{orderId}</strong>
                        </div>

                        <p className="success-info">
                            Your order has been successfully placed.
                            We will prepare your delicious homemade food
                            and get it ready for delivery.
                        </p>

                        <div className="success-actions">

                            <button
                                type="button"
                                onClick={() => navigate("/menu")}
                                className="continue-shopping-btn"
                            >
                                Continue Shopping
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/")}
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


                            {/* PLACE ORDER */}
                            <button
                                type="submit"
                                className="place-order-button"
                            >
                                Place Order
                            </button>

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