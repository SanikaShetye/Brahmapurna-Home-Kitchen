import { useEffect, useState } from "react";

import { getCategories, getFoods } from "../services/api";

import Header from "../components/Header";
import Hero from "../components/Hero";
import CategoryMenu from "../components/CategoryMenu";
import FoodSection from "../components/FoodSection";
import Footer from "../components/Footer";

import "../css/Home.css";

function Home() {
    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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
            } catch (error) {
                console.error(error);
                setError("Unable to load menu data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredFoods =
        selectedCategory === "all"
            ? foods
            : foods.filter(
                (food) =>
                    food.category?._id === selectedCategory
            );

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading menu...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    }

    return (
        <div className="home">

            <Header />

            <Hero />

            {/* =========================================
                EXPLORE OUR MENU
            ========================================= */}

            <main className="menu-container">

                <section
                    className="categories-section"
                    id="menu"
                >
                    <div className="menu-heading">
                        <span className="menu-label">
                            🍲 Fresh & Homemade
                        </span>

                        <h2 className="section-title">
                            Explore Our Menu
                        </h2>

                        <p className="section-description">
                            Discover delicious homemade dishes
                            prepared with traditional recipes,
                            fresh ingredients, and lots of love.
                        </p>
                    </div>

                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </section>

                {/* =========================================
                    FOOD SECTION
                ========================================= */}

                <FoodSection
                    foods={filteredFoods}
                    title="Our Menu"
                />

            </main>

            <Footer />

        </div>
    );
}

export default Home;

