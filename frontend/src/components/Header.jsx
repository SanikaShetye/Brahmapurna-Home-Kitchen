import "../css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
    const navigate = useNavigate();

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setShowUserMenu(false);
        navigate("/");
    };

    const handleEditProfile = () => {
        setShowUserMenu(false);
        navigate("/profile");
    };

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    return (
        <header className="header">

            {/* =========================
                BRAND
            ========================= */}
            <Link
                to="/"
                className="brand"
                onClick={closeMobileMenu}
            >
                <div className="brand-logo">
                    <img
                        src="/images/ProfileLogo.png"
                        alt="Brahmapurna Home Kitchen"
                        className="brand-logo-icon"
                    />
                </div>

                <div className="brand-text">
                    <h2>Brahmapurna</h2>
                    <span>Home Kitchen</span>
                </div>
            </Link>


            {/* =========================
                DESKTOP / MOBILE NAV
            ========================= */}
            <nav className={`navbar ${showMobileMenu ? "mobile-menu-open" : ""}`}>

                <Link to="/" onClick={closeMobileMenu}>
                    Home
                </Link>

                <Link to="/menu" onClick={closeMobileMenu}>
                    Menu
                </Link>

                <Link to="/about" onClick={closeMobileMenu}>
                    About Us
                </Link>

                <Link to="/contact" onClick={closeMobileMenu}>
                    Contact
                </Link>

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


                {/* USER */}
                {user ? (

                    <div className="user-menu-container">

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

                        {showUserMenu && (
                            <div className="user-dropdown">

                                <div className="dropdown-user-name">
                                    👤 {user.name}
                                </div>

                                <div className="dropdown-user-detail">
                                    <span>Email</span>
                                    <strong>{user.email}</strong>
                                </div>

                                <div className="dropdown-user-detail">
                                    <span>Mobile</span>
                                    <strong>{user.phone}</strong>
                                </div>

                                <div className="dropdown-user-detail">
                                    <span>Address</span>
                                    <strong>{user.address}</strong>
                                </div>

                                <div className="dropdown-user-row">

                                    <div className="dropdown-user-detail">
                                        <span>City</span>
                                        <strong>{user.city}</strong>
                                    </div>

                                    <div className="dropdown-user-detail">
                                        <span>Pincode</span>
                                        <strong>{user.pincode}</strong>
                                    </div>

                                </div>

                                <button
                                    type="button"
                                    className="edit-profile-button"
                                    onClick={handleEditProfile}
                                >
                                    ✏️ Edit Profile
                                </button>

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

                    <Link to="/login" className="login-button">
                        Login
                    </Link>

                )}


                {/* =========================
                    MOBILE TOGGLE
                ========================= */}
                <button
                    type="button"
                    className="mobile-menu-toggle"
                    onClick={() =>
                        setShowMobileMenu(!showMobileMenu)
                    }
                    aria-label="Toggle navigation menu"
                    aria-expanded={showMobileMenu}
                >
                    {showMobileMenu ? "✕" : "☰"}
                </button>

            </div>

        </header>
    );
}

export default Header;