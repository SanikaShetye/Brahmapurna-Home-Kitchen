import React from "react";
import "../css/Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">

            {/* =========================
                MAIN FOOTER
            ========================= */}
            <div className="footer-main">

                {/* BRAND */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">🍲</div>

                        <div>
                            <h2>Brahmapurna</h2>
                            <span>Home Kitchen</span>
                        </div>
                    </div>

                    <p className="footer-description">
                        Authentic homemade food, prepared with love
                        and served fresh using traditional recipes
                        and the finest ingredients.
                    </p>

                    {/* SOCIAL */}
                    <div className="footer-social">
                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                    </a>

                    <a href="#" aria-label="Facebook">
                        <FaFacebookF />
                    </a>

                    <a href="#" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    </div>
                </div>


                {/* QUICK LINKS */}
                <div className="footer-column">
                    <h3>Quick Links</h3>

                    <div className="footer-heading-line"></div>

                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/menu">Menu</a>
                        </li>

                        <li>
                            <a href="/about">About Us</a>
                        </li>

                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>


                {/* CONTACT */}
                <div className="footer-column footer-contact">
                    <h3>Contact Us</h3>

                    <div className="footer-heading-line"></div>

                    <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span>Ratnagiri, Maharashtra</span>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <span>+91 XXXXXX XXXXX</span>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">✉️</span>
                        <span>
                            brahmapurnahomekitchen@gmail.com
                        </span>
                    </div>

                    <div className="contact-item">
                        <span className="contact-icon">🕐</span>
                        <span>Mon – Sun: 8:00 AM – 9:00 PM</span>
                    </div>
                </div>


                {/* GOOGLE MAP */}
                <div className="footer-column footer-location">
                    <h3>Our Location</h3>

                    <div className="footer-heading-line"></div>

                    <div className="map-container">
                        <iframe
                            title="Brahmapurna Home Kitchen Location"
                            src="https://www.google.com/maps?q=Ratnagiri,Maharashtra&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <a
                        className="map-button"
                        href="https://www.google.com/maps/search/?api=1&query=Ratnagiri,Maharashtra"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📍 View on Google Maps
                    </a>
                </div>

            </div>


            {/* =========================
                COPYRIGHT
            ========================= */}
            <div className="footer-bottom">

                <div className="copyright">
                    © 2026 Brahmapurna Home Kitchen.
                    <span> All rights reserved.</span>
                </div>

                <div className="footer-heart">
                    <span>──</span>
                    <strong>♥</strong>
                    <span>──</span>
                </div>

                <div className="made-with">
                    Made with <span>♥</span> and homemade goodness.
                </div>

            </div>

        </footer>
    );
}

export default Footer;