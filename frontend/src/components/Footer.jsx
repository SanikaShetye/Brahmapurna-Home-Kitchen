import "../css/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-section footer-brand">
                    <h2>🍲 Brahmapurna</h2>

                    <p>
                        Home Kitchen
                    </p>

                    <p>
                        Authentic homemade food,
                        prepared with love and served fresh.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h3>Contact Us</h3>

                    <p>📍 Ratnagiri, Maharashtra</p>
                    <p>📞 +91 XXXXX XXXXX</p>
                    <p>✉️ brahmapurnahomekitchen@gmail.com</p>
                </div>

                {/* Social */}
                <div className="footer-section">
                    <h3>Follow Us</h3>

                    <div className="social-links">
                        <a href="#" aria-label="Instagram">
                            Instagram
                        </a>

                        <a href="#" aria-label="Facebook">
                            Facebook
                        </a>

                        <a href="#" aria-label="WhatsApp">
                            WhatsApp
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Brahmapurna Home Kitchen.
                    All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;