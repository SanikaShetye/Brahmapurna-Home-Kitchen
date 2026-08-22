import "../css/FoodCard.css";

function FoodCard({ food }) {
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
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default FoodCard;