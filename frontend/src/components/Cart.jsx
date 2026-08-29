import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/Cart.css";

function Cart() {
    return (
        <div className="cart-page">

            <Header />

            <main className="cart-container">

                <h1>Your Cart</h1>

                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>

                    <h2>Your cart is empty</h2>

                    <p>
                        Add some delicious homemade food to your cart.
                    </p>

                    <button className="browse-menu-btn">
                        Browse Menu
                    </button>
                </div>

            </main>

            <Footer />

        </div>
    );
}

export default Cart;