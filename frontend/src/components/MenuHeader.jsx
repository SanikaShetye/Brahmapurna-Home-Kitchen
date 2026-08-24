import { useEffect, useState } from "react";

import { getCategories, getFoods } from "../services/api";

import Header from "./Header";
import Footer from "./Footer";
import CategoryMenu from "./CategoryMenu";
import FoodSection from "./FoodSection";

import "../css/MenuHeader.css";

function MenuHeader() {

    const [categories, setCategories] = useState([]);
    const [foods, setFoods] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("all");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    /* =========================================
       FETCH MENU DATA
    ========================================= */

    useEffect(() => {

        const fetchData = async () => {

            try {

                const [
                    categoryResponse,
                    foodResponse
                ] = await Promise.all([
                    getCategories(),
                    getFoods()
                ]);

                setCategories(categoryResponse.data);
                setFoods(foodResponse.data);

            } catch (error) {

                console.error("Menu Error:", error);

                setError("Unable to load menu.");

            } finally {

                setLoading(false);

            }

        };

        fetchData();

    }, []);


    /* =========================================
       FILTER FOOD
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
            <div className="menu-loading">

                <h2>
                    Loading our delicious menu...
                </h2>

            </div>
        );

    }


    /* =========================================
       ERROR
    ========================================= */

    if (error) {

        return (
            <div className="menu-error">

                <h2>
                    {error}
                </h2>

            </div>
        );

    }


    /* =========================================
       MENU PAGE
    ========================================= */

    return (

        <div className="menu-page">

            {/* =====================================
                HEADER
            ===================================== */}

            <Header />


            {/* =====================================
                MENU HERO
            ===================================== */}

            <section className="menu-hero">

                <div className="menu-hero-content">

                    <span className="menu-badge">
                        🍲 Made Fresh With Love
                    </span>

                    <h1>
                        Explore Our
                        <span> Delicious Menu</span>
                    </h1>

                    <p>
                        Discover authentic homemade dishes prepared
                        with traditional recipes, fresh ingredients,
                        and lots of love.
                    </p>

                </div>

            </section>


            {/* =====================================
                MENU CONTENT
            ===================================== */}

            <main className="menu-main">

                {/* =================================
                    TITLE
                ================================= */}

                <div className="menu-heading">

                    <span>
                        Our Homemade Collection
                    </span>

                    <h2>
                        Choose Your Favourite
                        <span> Dish</span>
                    </h2>

                    <p>
                        From traditional Maharashtrian favourites
                        to delicious homemade snacks and sweets.
                    </p>

                </div>


                {/* =================================
                    CATEGORY FILTER
                ================================= */}

                <section className="menu-categories">

                    <CategoryMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />

                </section>


                {/* =================================
                    FOOD
                ================================= */}

                <section className="menu-food-section">

                    <FoodSection
                        foods={filteredFoods}
                        title={
                            selectedCategory === "all"
                                ? "All Dishes"
                                : "Our Dishes"
                        }
                    />

                </section>

            </main>


            {/* =====================================
                FOOTER
            ===================================== */}

            <Footer />

        </div>

    );

}

export default MenuHeader;