import { useCart } from "../context/CartContext";
import Header from "../components/Header";

import "../css/Cart.css";


function Cart() {

    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalPrice
    } = useCart();


    return (

        <div className="cart-page">

            <Header />


            <main className="cart-container">

                <h1>
                    Your Cart
                </h1>


                {cart.length === 0 ? (

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

                    <>

                        {/* CART ITEMS */}

                        <div className="cart-items">

                            {cart.map((item) => (

                                <div
                                    className="cart-item"
                                    key={item._id}
                                >

                                    <div className="cart-item-image">

                                        {item.image ? (

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />

                                        ) : (

                                            <span>
                                                🍽️
                                            </span>

                                        )}

                                    </div>


                                    <div className="cart-item-details">

                                        <h3>
                                            {item.name}
                                        </h3>

                                        <p>
                                            ₹{item.price}
                                        </p>

                                    </div>


                                    {/* QUANTITY */}

                                    <div className="quantity-control">

                                        <button
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


                        {/* BILL */}

                        <div className="cart-summary">

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


                            <button
                                className="checkout-button"
                            >
                                Proceed to Checkout
                            </button>

                        </div>

                    </>

                )}

            </main>

        </div>
    );
}

export default Cart;