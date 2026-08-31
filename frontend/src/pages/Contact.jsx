import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/Contact.css";

function Contact() {
    return (
        <div className="contact-page">

            <Header />

            {/* =========================================
                CONTACT HERO
            ========================================= */}
            <section className="contact-hero">

                <div className="contact-hero-content">

                    <span className="contact-label">
                        GET IN TOUCH
                    </span>

                    <h1>Contact Us</h1>

                    <div className="contact-divider">
                        <span></span>
                        <span>♥</span>
                        <span></span>
                    </div>

                    <p>
                        We'd love to hear from you! Whether you have a question,
                        feedback, or a special request, feel free to reach out.
                    </p>

                </div>

                <div className="contact-hero-image">
                    <img
                        src="/images/AboutUs1.jpg"
                        alt="Traditional homemade food"
                    />
                </div>

            </section>


            {/* =========================================
                CONTACT INFORMATION + FORM
            ========================================= */}
            <section className="contact-main">

                <div className="contact-container">

                    {/* Contact Information */}
                    <div className="contact-info">

                        <h2>
                            <span className="title-icon">⚙</span>
                            Contact Information
                        </h2>

                        <div className="info-card">

                            <div className="info-item">

                                <div className="info-icon">
                                    📞
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <strong>+91 98765 43210</strong>
                                    <small>Mon – Sat: 9:00 AM – 8:00 PM</small>
                                </div>

                            </div>


                            <div className="info-item">

                                <div className="info-icon">
                                    ✉
                                </div>

                                <div>
                                    <span>Email</span>
                                    <strong>
                                        hello@brahmapurna.com
                                    </strong>
                                    <small>We reply within 24 hours</small>
                                </div>

                            </div>


                            <div className="info-item">

                                <div className="info-icon">
                                    📍
                                </div>

                                <div>
                                    <span>Address</span>
                                    <strong>
                                        Brahmapurna Home Kitchen
                                    </strong>
                                    <small>
                                        Ratnagiri, Maharashtra – 415612
                                    </small>
                                    <small>India</small>
                                </div>

                            </div>


                            <div className="info-item">

                                <div className="info-icon">
                                    🕐
                                </div>

                                <div>
                                    <span>Working Hours</span>
                                    <strong>
                                        Mon – Sat: 9:00 AM – 8:00 PM
                                    </strong>
                                    <small>Sunday: Closed</small>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}
                    <div className="contact-form-card">

                        <h2>
                            <span className="title-icon">✉</span>
                            Send Us a Message
                        </h2>

                        <form>

                            <div className="form-row">

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                />

                            </div>

                            <input
                                type="tel"
                                placeholder="Phone Number"
                            />

                            <textarea
                                rows="6"
                                placeholder="Your Message"
                            ></textarea>

                            <button type="submit">
                                <span>➤</span>
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>


                {/* =========================================
                    GOOGLE MAP
                ========================================= */}
                <div className="map-container">

                    <iframe
                        title="Brahmapurna Home Kitchen Location"
                        src="https://www.google.com/maps?q=Ratnagiri,Maharashtra&output=embed"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>

                </div>


                {/* =========================================
                    FAQ
                ========================================= */}
                <div className="faq-section">

                    <div className="faq-header">

                        <div>
                            <h2>Have a Question?</h2>

                            <div className="faq-line">
                                <span></span>
                                <span>♥</span>
                                <span></span>
                            </div>

                            <p>
                                Here are some quick answers to common queries.
                            </p>
                        </div>

                        <button className="faq-button">
                            View FAQ →
                        </button>

                    </div>


                    <div className="faq-list">

                        <details>
                            <summary>
                                Do you offer home delivery?
                                <span>⌄</span>
                            </summary>

                            <p>
                                Yes, we offer home delivery within our
                                service area.
                            </p>
                        </details>


                        <details>
                            <summary>
                                Can I place a bulk order for an event?
                                <span>⌄</span>
                            </summary>

                            <p>
                                Yes. Contact us in advance for bulk and
                                special event orders.
                            </p>
                        </details>


                        <details>
                            <summary>
                                Do you customize meals for special diets?
                                <span>⌄</span>
                            </summary>

                            <p>
                                Please contact us and let us know your
                                requirements.
                            </p>
                        </details>

                    </div>

                </div>

            </section>


            <Footer />

        </div>
    );
}

export default Contact;