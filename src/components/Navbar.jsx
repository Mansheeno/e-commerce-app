import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ShopEase
        </Link>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-medium" : "hover:text-indigo-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-medium" : "hover:text-indigo-600"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-medium" : "hover:text-indigo-600"
            }
          >
            <div className="flex items-center gap-1">
              <ShoppingCart className="w-5 h-5" />
              Cart
            </div>
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-medium" : "hover:text-indigo-600"
            }
          >
            <div className="flex items-center gap-1">
              <User className="w-5 h-5" />
              Login
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
