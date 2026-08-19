import "../css/CategoryMenu.css";

function CategoryMenu({
    categories,
    selectedCategory,
    setSelectedCategory
}) {
    return (
        <div className="category-menu-wrapper">

            <div className="category-menu">

                {/* ALL */}
                <button
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