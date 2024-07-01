import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Nopage from "./pages/Nopage";
import Shopping from "./pages/Shopping";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Navbar from "./components/NavBar";
import ProductDetailPage from "./pages/ProductDetailPage";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <BrowserRouter basename="/eticaret-react/">
      <NotificationProvider>
        <Navbar />
        <div className="pt-20 bg-gray-100 h-screen">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="*" element={<Nopage />} />
          </Routes>
        </div>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
