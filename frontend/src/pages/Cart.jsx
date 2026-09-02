import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import "../css/Cart.css";

function Cart() {
    const navigate = useNavigate();

    const {
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalPrice
    } = useCart();

    return (
        <div className="cart-page">

            <Header />

            <main className="cart-container">

                <h1 className="cart-title">
                    Your Cart
                </h1>

                {cartItems.length === 0 ? (

                    <div className="empty-cart">

                        <div className="empty-cart-icon">
                            🛒
                        </div>

                        <h2>
                            Your cart is empty
                        </h2>

                        <p>
                            Add some delicious homemade food!
                        </p>

                    </div>

                ) : (

                    <div className="cart-layout">

                        {/* =========================
                            CART ITEMS
                        ========================= */}

                        <section className="cart-items-section">

                            <div className="cart-items">

                                {cartItems.map((item) => (

                                    <div
                                        className="cart-item"
                                        key={item._id}
                                    >

                                        {/* IMAGE */}

                                        <div className="cart-item-image">

                                            {item.image ? (
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                />
                                            ) : (
                                                <span>🍽️</span>
                                            )}

                                        </div>


                                        {/* DETAILS */}

                                        <div className="cart-item-details">

                                            <h3>
                                                {item.name}
                                            </h3>

                                            <p>
                                                ₹{Number(item.price)}
                                            </p>

                                        </div>


                                        {/* QUANTITY */}

                                        <div className="quantity-control">

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    decreaseQuantity(item._id)
                                                }
                                            >
                                                −
                                            </button>

                                            <span>
                                                {item.quantity}
                                            </span>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    increaseQuantity(item._id)
                                                }
                                            >
                                                +
                                            </button>

                                        </div>


                                        {/* ITEM TOTAL */}

                                        <div className="cart-item-total">

                                            ₹
                                            {Number(item.price) *
                                                item.quantity}

                                        </div>


                                        {/* REMOVE */}

                                        <button
                                            type="button"
                                            className="remove-cart-item"
                                            onClick={() =>
                                                removeFromCart(item._id)
                                            }
                                        >
                                            ✕
                                        </button>

                                    </div>

                                ))}

                            </div>

                        </section>


                        {/* =========================
                            BILL SUMMARY
                        ========================= */}

                        <aside className="cart-summary">

                            <h2>
                                Bill Summary
                            </h2>


                            <div className="summary-row">

                                <span>
                                    Subtotal
                                </span>

                                <span>
                                    ₹{totalPrice}
                                </span>

                            </div>


                            <div className="summary-row">

                                <span>
                                    Delivery
                                </span>

                                <span>
                                    ₹0
                                </span>

                            </div>


                            <div className="summary-divider"></div>


                            <div className="summary-total">

                                <span>
                                    Total
                                </span>

                                <span>
                                    ₹{totalPrice}
                                </span>

                            </div>


                            {/* =========================
                                CONFIRM ORDER BUTTON
                            ========================= */}

                            <button
                                type="button"
                                className="checkout-button"
                                onClick={() => navigate("/checkout")}
                            >
                                Confirm Order
                            </button>

                        </aside>

                    </div>
                )}

            </main>

        </div>
    );
}

export default Cart;