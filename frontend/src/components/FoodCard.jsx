import "../css/FoodCard.css";

function FoodCard({ food }) {

    const handleAddToCart = () => {

        const user = localStorage.getItem("user");

        // If user is not logged in
        if (!user) {
            window.location.href = "/login";
            return;
        }

        // If user is logged in
        console.log("Adding to cart:", food);
    };

    return (
        <div className="food-card">

            {/* Food Image */}
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


            {/* Food Details */}
            <div className="food-info">

                <h3>{food.name}</h3>

                <p>
                    {food.description}
                </p>


                {/* Price + Add to Cart */}
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