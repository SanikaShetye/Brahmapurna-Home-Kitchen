import "../css/Header.css";

function Header() {
    return (
        <header className="header">

            <div className="header-container">

                {/* Logo */}
                <div className="logo">
                    <div className="logo-icon">🍲</div>

                    <div className="logo-text">
                        <h2>Brahmapurna</h2>
                        <span>Home Kitchen</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="navigation">
                    <a href="#home">Home</a>
                    <a href="#menu">Menu</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                </nav>

                {/* Cart */}
                <button className="cart-button">
                    🛒
                    <span>Cart</span>
                </button>

            </div>

        </header>
    );
}

export default Header;