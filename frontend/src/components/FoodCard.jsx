import "../css/FoodCard.css";

import { useCart } from "../context/CartContext";


function FoodCard({ food }) {

    const { addToCart } = useCart();


    const handleAddToCart = () => {

        const user = localStorage.getItem("user");

        // User not logged in
        if (!user) {
            window.location.href = "/login";
            return;
        }

        // Add food to cart
        addToCart(food);
    };


    return (

        <div className="food-card">

            {/* FOOD IMAGE */}

            <div className="food-image">

                {food.image ? (

                    <img
                        src={food.image}
                        alt={food.name}
                    />

                ) : (

                    <div className="no-image">
                        No Image
                    </div>

                )}

            </div>


            {/* FOOD DETAILS */}

            <div className="food-info">

                <h3>
                    {food.name}
                </h3>

                <p>
                    {food.description}
                </p>


                {/* PRICE + CART */}

                <div className="food-bottom">

                    <span className="food-price">
                        ₹{food.price}
                    </span>


                    <button
                        type="button"
                        className="add-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default FoodCard;