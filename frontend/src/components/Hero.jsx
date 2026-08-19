import "../css/Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">

            {/* Left Content */}
            <div className="hero-content">

                <div className="hero-badge">
                    <span>🍲</span>
                    <span>Homemade with Love</span>
                </div>

                <h1>
                    Authentic Food,
                    <br />
                    <span>Made With Love</span>
                </h1>

                <p className="hero-description">
                    Enjoy delicious homemade meals prepared with
                    traditional recipes, fresh ingredients, and lots
                    of love.
                </p>

                <div className="hero-buttons">

                    <a
                        href="#menu"
                        className="hero-button hero-button-primary"
                    >
                        Explore Menu
                    </a>

                    <a
                        href="#about"
                        className="hero-button hero-button-secondary"
                    >
                        Our Story
                    </a>

                </div>

            </div>


            {/* Right Food Image */}
            <div className="hero-image-container">

                <div className="hero-image-circle"></div>

                <img
                    src="../images/TraditionalIndianThali.png"
                    alt="Traditional homemade Indian thali"
                    className="hero-food-image"
                />

            </div>

        </section>
    );
}

export default Hero;