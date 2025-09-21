import React, { useState } from "react";
import logo from "../assets/Logo-Furniro.png";
import heartIcon from "../assets/akar-icons_heart.svg";
import searchIcon from "../assets/akar-icons_search.svg";
import cartIcon from "../assets/ant-design_shopping-cart-outlined.svg";
import humanIcon from "../assets/human-icon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Furniro"
            className="w-24 sm:w-28 md:w-32 cursor-pointer"
          />
        </div>

        {/* Links (Desktop Only) */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium ml-10">
          <a href="#" className="hover:text-yellow-600 transition">Home</a>
          <a href="#" className="hover:text-yellow-600 transition">Shop</a>
          <a href="#" className="hover:text-yellow-600 transition">About</a>
          <a href="#" className="hover:text-yellow-600 transition">Contact</a>
        </div>

        {/* Icons (Desktop Only) */}
        <div className="hidden sm:flex gap-4 md:gap-6 items-center">
          <img src={humanIcon} alt="User" className="w-6 h-6 cursor-pointer" />
          <img src={searchIcon} alt="Search" className="w-6 h-6 cursor-pointer" />
          <img src={heartIcon} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
          <img src={cartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-white border-t border-gray-200`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <a href="#" className="hover:text-yellow-600 transition">Home</a>
          <a href="#" className="hover:text-yellow-600 transition">Shop</a>
          <a href="#" className="hover:text-yellow-600 transition">About</a>
          <a href="#" className="hover:text-yellow-600 transition">Contact</a>

          {/* Icons inside mobile menu */}
          <div className="flex gap-6 mt-2">
            <img src={humanIcon} alt="User" className="w-6 h-6 cursor-pointer" />
            <img src={searchIcon} alt="Search" className="w-6 h-6 cursor-pointer" />
            <img src={heartIcon} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
            <img src={cartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
