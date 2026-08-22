import { useState } from "react";
import FoodCard from "../components/FoodCard";
import "../css/Menu.css";

function Menu({ foods }) {
    const [showAll, setShowAll] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        "Purampoli",
        "Snacks",
        "Thali",
        "Sabzi",
        "Extras",
        "Sweets",
        "Drinks",
    ];

    /* Filter according to category */
    const filteredFoods =
        selectedCategory === "All"
            ? foods
            : foods.filter(
                  (food) =>
                      food.category === selectedCategory
              );

    /* Show only first 6 initially */
    const visibleFoods = showAll
        ? filteredFoods
        : filteredFoods.slice(0, 6);

    return (
        <section className="menu-section">

            {/* =====================================
                CATEGORY BUTTONS
            ===================================== */}

            <div className="menu-categories">

                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={`category-btn ${
                            selectedCategory === category
                                ? "active"
                                : ""
                        }`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setShowAll(false);
                        }}
                    >
                        {category}
                    </button>
                ))}

            </div>


            {/* =====================================
                TITLE
            ===================================== */}

            <div className="menu-title">
                <h2>Our Menu</h2>
            </div>


            {/* =====================================
                FOOD GRID
            ===================================== */}

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
                        No dishes available.
                    </div>
                )}

            </div>


            {/* =====================================
                VIEW MORE BUTTON
            ===================================== */}

            {filteredFoods.length > 6 && (
                <div className="view-more-container">

                    <button
                        type="button"
                        className="view-more-btn"
                        onClick={() =>
                            setShowAll(!showAll)
                        }
                    >
                        {showAll
                            ? "Show Less ↑"
                            : "View More →"}
                    </button>

                </div>
            )}

        </section>
    );
}

export default Menu;