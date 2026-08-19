import "../css/Header.css";

function Header() {
    return (
        <header className="header">

            {/* Brand */}
            <div className="brand">
                <div className="brand-logo">
                    <svg
                        viewBox="0 0 64 64"
                        className="brand-logo-icon"
                        aria-hidden="true"
                    >
                        {/* Outer circle */}
                        <circle
                            cx="32"
                            cy="32"
                            r="30"
                            fill="#fff0dc"
                        />

                        {/* Food */}
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

                        {/* Bowl rim */}
                        <path
                            d="M14 29c0-3 4-5 18-5s18 2 18 5-4 5-18 5-18-2-18-5Z"
                            fill="#a05200"
                        />

                        {/* Bowl */}
                        <path
                            d="M16 31h32c-1 10-7 17-16 17s-15-7-16-17Z"
                            fill="#8b4a00"
                        />

                        {/* Bowl highlight */}
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
            </div>


            {/* Navigation */}
            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#about">About Us</a>
                <a href="#contact">Contact</a>
            </nav>


            {/* Cart */}
            <button className="cart-button">
                <span className="cart-icon">🛒</span>
                <span>Cart</span>
            </button>

        </header>
    );
}

export default Header;