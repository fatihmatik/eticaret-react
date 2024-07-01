import React from "react";
import { Link } from "react-router-dom";
import { useNotification } from "../context/NotificationContext";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { showNotification } = useNotification();

  return (
    <nav className="bg-blue-500 fixed w-full text-white py-4 top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:scale-105">
          <img src={logo} alt="navbar-logo" />
        </Link>
        <div className="ml-atuo flex space-x-24">
          <Link to="/shopping" className="relative group inline-block">
            <span className="relative z-10 hover:font-bold transform transition-transform duration-200 group-hover:-translate-y-2">
              Shopping
            </span>
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>

          <Link to="/cart" className="relative group inline-block">
            <span className="relative z-10 hover:font-bold transform transition-transform duration-200 group-hover:-translate-y-2">
              Cart
            </span>
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
          {showNotification && (
            <div className="absolute top-[30px] right-[240px] mt-4 mr-4 bg-white text-blue-500 shadow-lg p-2 rounded-md z-20">
              Added to the Cart
            </div>
          )}

          <Link to="/profile" className="relative group inline-block">
            <span className="relative z-10 hover:font-bold transform transition-transform duration-200 group-hover:-translate-y-2">
              Profile
            </span>
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>

          <Link to="/about" className="relative group inline-block">
            <span className="relative z-10 hover:font-bold transform transition-transform duration-200 group-hover:-translate-y-2">
              About
            </span>
            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
