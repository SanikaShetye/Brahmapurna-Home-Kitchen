import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import MenuHeader from "./components/MenuHeader";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
                
                <Route path="/menu" element={<MenuHeader />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<Signup />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;