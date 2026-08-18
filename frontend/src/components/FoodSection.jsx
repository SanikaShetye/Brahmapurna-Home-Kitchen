import FoodCard from "./FoodCard";
import "../css/FoodSection.css";

function FoodSection({ foods, title = "Our Menu" }) {
    return (
        <section className="food-section" id="menu">

            <h2 className="section-title">
                {title}
            </h2>

            {foods.length === 0 ? (
                <p className="no-food">
                    No food items available in this category.
                </p>
            ) : (
                <div className="food-grid">
                    {foods.map((food) => (
                        <FoodCard
                            key={food._id}
                            food={food}
                        />
                    ))}
                </div>
            )}

        </section>
    );
}

export default FoodSection;