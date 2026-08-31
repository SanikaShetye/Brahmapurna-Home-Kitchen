import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Auth.css";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // =========================================
    // HANDLE INPUT
    // =========================================

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    // =========================================
    // HANDLE SIGN UP
    // =========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        // Password check
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {

            setLoading(true);

            const response = await fetch(
                "http://localhost:5000/api/auth/signup",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Signup failed."
                );
            }

            // Go to login after successful signup
            navigate("/login");

        } catch (error) {

            console.error(error);

            setError(
                error.message || "Unable to create account."
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="auth-page">

            <div className="auth-card">

                {/* =========================================
                    ICON
                ========================================= */}

                <div className="auth-icon">
                    👤
                </div>


                {/* =========================================
                    TITLE
                ========================================= */}

                <h1>
                    Create Account
                </h1>

                <p className="auth-subtitle">
                    Join Brahmapurna Home Kitchen
                </p>


                {/* =========================================
                    ERROR
                ========================================= */}

                {error && (
                    <div className="auth-error">
                        {error}
                    </div>
                )}


                {/* =========================================
                    SIGNUP FORM
                ========================================= */}

                <form onSubmit={handleSubmit}>

                    {/* NAME */}

                    <div className="form-group">

                        <label>
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* EMAIL */}

                    <div className="form-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* PASSWORD */}

                    <div className="form-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* CONFIRM PASSWORD */}

                    <div className="form-group">

                        <label>
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* SIGN UP BUTTON */}

                    <button
                        type="submit"
                        className="auth-button"
                        disabled={loading}
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>

                </form>


                {/* =========================================
                    LOGIN LINK
                ========================================= */}

                <div className="auth-switch">

                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Signup;