import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {

    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setShowUserMenu(false);
        navigate("/");
    };

    return (
        <header className="header">

            {/* =========================
                BRAND
            ========================= */}

            <Link to="/" className="brand">

                <div className="brand-logo">
                    <svg
                        viewBox="0 0 64 64"
                        className="brand-logo-icon"
                        aria-hidden="true"
                    >
                        <circle
                            cx="32"
                            cy="32"
                            r="30"
                            fill="#fff0dc"
                        />

                        <circle
                            cx="24"
                            cy="28"
                            r="5"
                            fill="#f4a261"
                        />

                        <circle
                            cx="33"
                            cy="26"
                            r="5"
                            fill="#e76f51"
                        />

                        <circle
                            cx="41"
                            cy="29"
                            r="4"
                            fill="#f6bd60"
                        />

                        <path
                            d="M14 29c0-3 4-5 18-5s18 2 18 5-4 5-18 5-18-2-18-5Z"
                            fill="#a05200"
                        />

                        <path
                            d="M16 31h32c-1 10-7 17-16 17s-15-7-16-17Z"
                            fill="#8b4a00"
                        />

                        <path
                            d="M22 37c3 5 7 7 10 7"
                            fill="none"
                            stroke="#c87520"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="brand-text">
                    <h2>Brahmapurna</h2>
                    <span>Home Kitchen</span>
                </div>

            </Link>


            {/* =========================
                NAVIGATION
            ========================= */}

            <nav className="navbar">

                <Link to="/">Home</Link>

                <Link to="/menu">Menu</Link>

                <Link to="/about">About Us</Link>

                <Link to="/contact">Contact</Link>

            </nav>


            {/* =========================
                RIGHT SIDE
            ========================= */}

            <div className="header-right">

                {/* CART */}

                <Link to="/cart" className="cart-button">
                    <span className="cart-icon">🛒</span>
                    <span>Cart</span>
                </Link>


                {/* =========================
                    LOGGED IN USER
                ========================= */}

                {user ? (

                    <div className="user-menu-container">

                        {/* USER ICON */}

                        <button
                            type="button"
                            className="user-icon-button"
                            onClick={() =>
                                setShowUserMenu(!showUserMenu)
                            }
                            aria-label="User menu"
                        >
                            👤
                        </button>


                        {/* USER DROPDOWN */}

                        {showUserMenu && (

                            <div className="user-dropdown">

                                <div className="dropdown-user-name">
                                    👤 {user.name}
                                </div>

                                <button
                                    type="button"
                                    className="logout-button"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>

                            </div>

                        )}

                    </div>

                ) : (

                    /* =========================
                       LOGGED OUT
                    ========================= */

                    <Link
                        to="/login"
                        className="login-button"
                    >
                        Login
                    </Link>

                )}

            </div>

        </header>
    );
}

export default Header;