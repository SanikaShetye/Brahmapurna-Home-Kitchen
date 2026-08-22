import { useState } from "react";
import FoodCard from "./FoodCard";
import "../css/FoodSection.css";

function FoodSection({ foods, title }) {
    const [showAll, setShowAll] = useState(false);

    // Show only first 6 foods initially
    const visibleFoods = showAll
        ? foods
        : foods.slice(0, 6);

    return (
        <section className="food-section">

            {/* =========================================
                SECTION TITLE
            ========================================= */}

            <div className="food-section-title">
                <h2>{title}</h2>
            </div>


            {/* =========================================
                FOOD GRID
            ========================================= */}

            <div className="food-grid">

                {visibleFoods.length > 0 ? (

                    visibleFoods.map((food) => (
                        <FoodCard
                            key={food._id}
                            food={food}
                        />
                    ))

                ) : (

                    <div className="no-foods">
                        <p>
                            No dishes available in this category.
                        </p>
                    </div>

                )}

            </div>


            {/* =========================================
                VIEW MORE BUTTON
            ========================================= */}

            {foods.length > 6 && (
                <div className="view-more-container">

                    <button
                        type="button"
                        className="view-more-btn"
                        onClick={() =>
                            setShowAll(!showAll)
                        }
                    >
                        <span>
                            {showAll
                                ? "Show Less"
                                : "View More"}
                        </span>

                        <span className="view-more-arrow">
                            {showAll ? "↑" : "→"}
                        </span>
                    </button>

                </div>
            )}

        </section>
    );
}

export default FoodSection;