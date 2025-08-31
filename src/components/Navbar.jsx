import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          MyShop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>

          {/* Cart for desktop */}
          <Link to="/cart" className="relative hover:text-gray-300">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Buttons */}
          <Link
            to="/login"
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 px-3 py-1 rounded hover:bg-green-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Cart + Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative hover:text-gray-300">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col space-y-3 mt-2">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}
            className="bg-blue-600 px-3 py-1 rounded text-center hover:bg-blue-700">
            Login
          </Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}
            className="bg-green-600 px-3 py-1 rounded text-center hover:bg-green-700">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
