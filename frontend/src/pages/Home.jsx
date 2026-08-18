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

    /* =========================================
       FILTER FOODS BY CATEGORY
    ========================================= */

    const filteredFoods =
        selectedCategory === "all"
            ? foods
            : foods.filter(
                (food) =>
                    food.category?._id === selectedCategory
            );

    /* =========================================
       LOADING
    ========================================= */

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading menu...</h2>
            </div>
        );
    }

    /* =========================================
       ERROR
    ========================================= */

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        );
    }

    /* =========================================
       PAGE
    ========================================= */

    return (
        <div className="home">

            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* Menu */}
            <main className="menu-container">

                {/* Categories */}
                <section className="categories-section">

                    <h2 className="section-title">
                        Explore Our Menu
                    </h2>

                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                </section>

                {/* Food */}
                <FoodSection
                    foods={filteredFoods}
                    title="Our Menu"
                />

            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
}

export default Home;