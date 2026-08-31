import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/AboutUs.css";

function About() {
    return (
        <div className="about-page">

            {/* ================= HEADER ================= */}
            <Header />


            {/* ================= ABOUT HERO ================= */}
            <section className="about-hero">

                <div className="about-hero-content">

                    <span className="about-badge">
                        🏠 Our Story
                    </span>

                    <h1>
                        Food That Feels
                        <br />
                        <span>Like Home</span>
                    </h1>

                    <p>
                        At Brahmapurna Home Kitchen, we believe that
                        good food is more than just a meal. It is a
                        feeling of home, family, tradition and love.
                    </p>

                </div>

                <div className="about-hero-image">

                    <div className="about-circle"></div>

                    <img
                        src="/images/AboutUs.jpg"
                        alt="Traditional homemade food"
                    />

                </div>

            </section>


            {/* ================= OUR STORY ================= */}
            <section className="story-section">

                <div className="story-image">

                    <img
                        src="/images/our-story.png"
                        alt="Homemade food"
                    />

                </div>

                <div className="story-content">

                    <span className="section-badge">
                        Our Story
                    </span>

                    <h2>
                        From Our Kitchen
                        <br />
                        <span>To Your Heart</span>
                    </h2>

                    <p>
                        Brahmapurna Home Kitchen was created with a
                        simple idea — to bring the warmth and taste of
                        homemade food to your table.
                    </p>

                    <p>
                        Every dish is prepared using traditional
                        recipes, fresh ingredients and the same care
                        we put into food made for our own family.
                    </p>

                    <p>
                        From delicious Maharashtrian meals to
                        traditional sweets and snacks, every bite
                        carries a little piece of home.
                    </p>

                </div>

            </section>


            {/* ================= WHY CHOOSE US ================= */}
            <section className="about-features">

                <div className="about-section-heading">

                    <span className="section-badge">
                        Why Choose Us
                    </span>

                    <h2>
                        Made With Love,
                        <span> Served With Care</span>
                    </h2>

                    <p>
                        We keep things simple — fresh ingredients,
                        traditional recipes and lots of love.
                    </p>

                </div>


                <div className="about-feature-grid">

                    <div className="about-feature-card">

                        <div className="feature-icon">
                            🌿
                        </div>

                        <h3>Fresh Ingredients</h3>

                        <p>
                            We use fresh and quality ingredients
                            to prepare every meal.
                        </p>

                    </div>


                    <div className="about-feature-card">

                        <div className="feature-icon">
                            👩‍🍳
                        </div>

                        <h3>Homemade Taste</h3>

                        <p>
                            Traditional recipes prepared with
                            authentic homemade flavours.
                        </p>

                    </div>


                    <div className="about-feature-card">

                        <div className="feature-icon">
                            ❤️
                        </div>

                        <h3>Made With Love</h3>

                        <p>
                            Every dish is prepared with care,
                            warmth and love.
                        </p>

                    </div>


                    <div className="about-feature-card">

                        <div className="feature-icon">
                            ✨
                        </div>

                        <h3>Quality & Hygiene</h3>

                        <p>
                            Clean preparation and careful handling
                            are our priorities.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= OUR PROMISE ================= */}
            <section className="promise-section">

                <div className="promise-content">

                    <span className="section-badge">
                        Our Promise
                    </span>

                    <h2>
                        A Little Taste of
                        <span> Home in Every Bite</span>
                    </h2>

                    <p>
                        Whether you are enjoying a comforting thali,
                        a crispy snack or a traditional sweet,
                        our promise is to always serve food that
                        feels homemade, fresh and delicious.
                    </p>

                    <strong>
                        "Because the best food is made with love."
                    </strong>

                </div>

            </section>


            {/* ================= FOOTER ================= */}
            <Footer />

        </div>
    );
}

export default About;