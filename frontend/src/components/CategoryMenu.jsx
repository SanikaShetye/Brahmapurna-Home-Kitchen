import { useRef } from "react";
import "../css/CategoryMenu.css";

function CategoryMenu({
    categories,
    selectedCategory,
    setSelectedCategory
}) {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({
            left: -400,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({
            left: 400,
            behavior: "smooth"
        });
    };

    return (
        <div className="category-menu-wrapper">

            {/* LEFT ARROW */}
            <button
                type="button"
                className="category-arrow category-arrow-left"
                onClick={scrollLeft}
            >
                ‹
            </button>

            {/* CATEGORY SLIDER */}
            <div
                className="category-menu"
                ref={sliderRef}
            >

                {/* ALL */}
                <button
                    type="button"
                    className={`category-item ${
                        selectedCategory === "all"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => setSelectedCategory("all")}
                >
                    <span className="category-icon">✦</span>
                    <span>All</span>
                </button>

                {/* DATABASE CATEGORIES */}
                {categories.map((category) => (
                    <button
                        type="button"
                        key={category._id}
                        className={`category-item ${
                            selectedCategory === category._id
                                ? "active"
                                : ""
                        }`}
                        onClick={() =>
                            setSelectedCategory(category._id)
                        }
                    >
                        <span className="category-icon">
                            {getCategoryIcon(category.name)}
                        </span>

                        <span>{category.name}</span>
                    </button>
                ))}

            </div>

            {/* RIGHT ARROW */}
            <button
                type="button"
                className="category-arrow category-arrow-right"
                onClick={scrollRight}
            >
                ›
            </button>

        </div>
    );
}


/* =========================================
   CATEGORY ICON
========================================= */

function getCategoryIcon(categoryName) {

    const name = categoryName.toLowerCase();

    if (name.includes("puranpoli")) {
        return "🥮";
    }

    if (name.includes("snack")) {
        return "🥟";
    }

    if (name.includes("thali")) {
        return "🍱";
    }

    if (name.includes("sabzi")) {
        return "🍛";
    }

    if (name.includes("extra")) {
        return "🥣";
    }

    if (name.includes("sweet")) {
        return "🍮";
    }

    if (name.includes("drink")) {
        return "🥤";
    }

    if (name.includes("maharashtrian")) {
        return "🍲";
    }

    return "🍽️";
}

export default CategoryMenu;