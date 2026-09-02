import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import MenuHeader from "./components/MenuHeader";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

import { CartProvider } from "./context/CartContext";
import CartToast from "./components/CartToast";

import Checkout from "./pages/Checkout";


function App() {

    return (

        <BrowserRouter>

            <CartProvider>

                <CartToast />

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route
                        path="/about"
                        element={<About />}
                    />

                    <Route
                        path="/menu"
                        element={<MenuHeader />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/signup"
                        element={<Signup />}
                    />

                </Routes>

            </CartProvider>

        </BrowserRouter>
    );
}

export default App;