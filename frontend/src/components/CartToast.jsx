import { useCart } from "../context/CartContext";
import "../css/CartToast.css";

function CartToast() {

    const { cartMessage } = useCart();

    if (!cartMessage) {
        return null;
    }

    return (
        <div className="cart-toast">
            <span className="toast-icon">✓</span>

            <span className="toast-message">
                {cartMessage}
            </span>
        </div>
    );
}

export default CartToast;