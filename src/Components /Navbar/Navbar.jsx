import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { useUserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAdmin } = useUserContext();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 shadow-lg font-semibold text-lg font-mono">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4 text-white">
          <Logo />
          <h1>TEClift</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-white">
          <li className="group relative">
            <Link
              to="/"
              className="group-hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link
              to="/signup"
              className="group-hover:text-yellow-400 transition-colors duration-300"
            >
              Sign-Up
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link
              to="/Productspage"
              className="group-hover:text-yellow-400 transition-colors duration-300"
            >
              Products
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link
              to="/AboutUs"
              className="group-hover:text-yellow-400 transition-colors duration-300"
            >
              About Us
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>

          {isAdmin && (
            <li className="group relative">
              <Link
                to="/adminpage"
                className="group-hover:text-yellow-400 transition-colors duration-300"
              >
                AdminPage
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-indigo-800 w-full text-white py-6">
          <li className="px-6 py-2 hover:bg-yellow-400 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 py-2 hover:bg-yellow-400 transition-colors">
            <Link to="/signup">Sign-Up</Link>
          </li>
          <li className="px-6 py-2 hover:bg-yellow-400 transition-colors">
            <Link to="/Productspage">Products</Link>
          </li>
          <li className="px-6 py-2 hover:bg-yellow-400 transition-colors">
            <Link to="/AboutUs">About Us</Link>
          </li>

          {isAdmin && (
            <li className="px-6 py-2 hover:bg-yellow-400 transition-colors">
              <Link to="/adminpage">AdminPage</Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
