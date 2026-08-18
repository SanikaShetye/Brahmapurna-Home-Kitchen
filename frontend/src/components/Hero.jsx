import "../css/Hero.css";

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <p className="hero-tagline">
                    🍲 Homemade with Love
                </p>

                <h1>
                    Brahmapurna
                    <span>Home Kitchen</span>
                </h1>

                <p className="hero-description">
                    Authentic homemade food, prepared fresh
                    with traditional recipes and lots of love.
                </p>

                <div className="hero-buttons">

                    <a
                        href="#menu"
                        className="hero-primary-button"
                    >
                        Explore Menu
                    </a>

                    <a
                        href="#about"
                        className="hero-secondary-button"
                    >
                        Our Story
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;