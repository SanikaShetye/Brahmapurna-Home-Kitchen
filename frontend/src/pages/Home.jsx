import { useEffect, useState } from "react";

import { getCategories, getFoods } from "../services/api";

import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryMenu from "../components/CategoryMenu";
import FoodSection from "../components/FoodSection";
import Footer from "../components/Footer";
import Features from "../components/Features";

import "../css/Home.css";

function Home() {
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoryResponse, foodResponse] =
                    await Promise.all([
                        getCategories(),
                        getFoods()
                    ]);

                setCategories(categoryResponse.data);
                setFoods(foodResponse.data);

                console.log("CATEGORIES:", categoryResponse.data);
                console.log("FIRST FOOD:", foodResponse.data[0]);
                console.log("FIRST FOOD CATEGORY:", foodResponse.data[0]?.category);
            } catch (error) {
                console.error(error);
                setError("Unable to load menu data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // =========================================
    // FILTER FOODS BY CATEGORY
    // =========================================
    const filteredFoods = foods.filter((food) => {

    const matchesCategory =
        selectedCategory === "all" ||
        food.categoryId === selectedCategory ||
        food.categoryId?._id === selectedCategory;

    const matchesSearch =
        food.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
});
        
    // =========================================
    // LOADING
    // =========================================

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading menu...</h2>
            </div>
        );
    }

    // =========================================
    // ERROR
    // =========================================

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    }

    // =========================================
    // PAGE
    // =========================================

    return (
        <div className="home">

            <Header />

            <Hero />

            {/* =========================================
                EXPLORE OUR MENU
            ========================================= */}

            <main className="menu-container">

                <section className="categories-section">

                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                </section>
                <div className="menu-search">
                    <span className="search-icon">🔍</span>

                    <input
                        type="text"
                        placeholder="Search for dosa, thali, vada..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* =========================================
                    FOOD SECTION
                ========================================= */}

                <FoodSection
                    foods={filteredFoods}
                    title="Our Menu"
                />

            </main>

            {/* =========================================
                FEATURES
            ========================================= */}

            <Features />

            {/* =========================================
                FOOTER
            ========================================= */}

            <Footer />

        </div>
    );
}

export default Home;