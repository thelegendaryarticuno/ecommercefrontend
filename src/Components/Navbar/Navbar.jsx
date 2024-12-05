import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from 'lucide-react';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white text-black border-b">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-0">
        {/* Top Navigation */}
        <div className="h-[60px] flex items-center justify-between text-sm font-normal">
          {/* Logo Section */}
          <Link to="/HomePage" className="text-2xl flex items-center">
            <span className="font-['Bodoni_MT'] font-bold text-xl">MERA Bestie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/HomePage" className="hover:text-gray-500">
              HOME
            </Link>
            <Link to="/shop" className="hover:text-gray-500">
              SHOP
            </Link>
            <Link to="/occasions" className="hover:text-gray-500">
              OCCASIONS
            </Link>
            <Link to="/about" className="hover:text-gray-500">
              ABOUT
            </Link>
            <Link to="/contact" className="hover:text-gray-500">
              CONTACT
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-6">
            <button 
              aria-label="Search" 
              className="hover:text-gray-500"
              onClick={toggleSearch}
            >
              <Search className="w-4 h-4 stroke-[2.5] hover:stroke-[3]" />
            </button>
            <Link to="/cart" className="hover:text-gray-500"> 
            <button aria-label="Cart" className="hover:text-gray-500">
              <FaShoppingCart className="w-4 h-4" />
            </button></Link>
            <button aria-label="Wishlist" className="hover:text-gray-500">
              <FaHeart className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                aria-label="Profile"
                onClick={toggleProfileMenu}
                className="hover:text-gray-500 flex items-center"
              >
                <FaUser className="w-4 h-4" />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-[120px] bg-white border rounded shadow-lg z-20">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
            <button
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="lg:hidden hover:text-gray-500"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white p-4 shadow-lg z-50">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white py-2 px-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-gray-500">
              HOME
            </Link>
            <Link to="/shop" className="block py-2 hover:text-gray-500">
              SHOP
            </Link>
            <Link to="/occasions" className="block py-2 hover:text-gray-500">
              OCCASIONS
            </Link>
            <Link to="/about" className="block py-2 hover:text-gray-500">
              ABOUT
            </Link>
            <Link to="/contact" className="block py-2 hover:text-gray-500">
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}