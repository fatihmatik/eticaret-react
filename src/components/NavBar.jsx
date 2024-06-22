import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-blue-500 fixed w-full text-white py-4 top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          WORLD'S BEST ECOMMERCE SITE
        </Link>
        <ul className="flex space-x-8">
          <li>
            <Link to="/shopping" className="hover:text-gray-400">
              Shopping
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gray-400">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-400">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
