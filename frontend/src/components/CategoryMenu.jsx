import "../css/CategoryMenu.css";

function CategoryMenu({
    categories,
    selectedCategory,
    setSelectedCategory
}) {
    return (
        <div className="category-list">

            {/* All button */}
            <button
                className={`category-button ${
                    selectedCategory === "all" ? "active" : ""
                }`}
                onClick={() => setSelectedCategory("all")}
            >
                All
            </button>

            {/* Category buttons */}
            {categories.map((category) => (
                <button
                    key={category._id}
                    className={`category-button ${
                        selectedCategory === category._id
                            ? "active"
                            : ""
                    }`}
                    onClick={() =>
                        setSelectedCategory(category._id)
                    }
                >
                    {category.name}
                </button>
            ))}

        </div>
    );
}

export default CategoryMenu;