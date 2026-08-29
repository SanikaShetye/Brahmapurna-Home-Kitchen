import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./components/AboutUs";
import MenuHeader from "./components/MenuHeader";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
                
                <Route path="/menu" element={<MenuHeader />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/cart" element={<Cart />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;