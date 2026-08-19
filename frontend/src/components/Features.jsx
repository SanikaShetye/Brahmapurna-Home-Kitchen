import React from "react";
import {
    FaSeedling,
    FaUtensils,
    FaHeart,
    FaTruck
} from "react-icons/fa";

import "../css/Features.css";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaSeedling />,
            title: "Fresh Ingredients",
            text: "We use only fresh & quality ingredients."
        },
        {
            icon: <FaUtensils />,
            title: "Hygienic Preparation",
            text: "Prepared in a clean & hygienic kitchen."
        },
        {
            icon: <FaHeart />,
            title: "Made with Love",
            text: "Every dish is made with love & care."
        },
        {
            icon: <FaTruck />,
            title: "Timely Delivery",
            text: "On-time delivery at your doorstep."
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="why-choose-container">

                {features.map((feature, index) => (
                    <div className="feature-item" key={index}>

                        <div className="feature-icon">
                            {feature.icon}
                        </div>

                        <div className="feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default WhyChooseUs;