import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Navbar from "./components/NavBar";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-14 bg-gray-100">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
