import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; 
import eg1 from "../assets/photos/eg1.png";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  
  const isAdvertsPage =
    location.pathname.startsWith("/adverts");

  return (
    <nav className="fixed top-0 left-0 w-full  text-black  bg-transparent backdrop-blur-md rounded-lg ">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <img src={eg1} alt="logo" className="h-[50px]" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-transparent backdrop-blur-md rounded-lg md:bg-transparent shadow-md md:shadow-none md:flex items-center space-x-6 px-6 py-4 md:py-0 transition-all duration-300 text-lg ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <Link to="/" className="block md:inline py-2 md:py-0">
            Home
          </Link>
          <Link to="/adverts" className="block md:inline py-2 md:py-0">
            Products
          </Link>
          <Link to="/about" className="block md:inline py-2 md:py-0">
            About
          </Link>
          <Link to="/blog" className="block md:inline py-2 md:py-0">
            Blog
          </Link>
          <Link to="/contact" className="block md:inline py-2 md:py-0">
            Contact
          </Link>

          {/* Authentication Buttons (Changes on /adverts and /adverts/:id) */}
          <div className="block md:hidden py-2">
            {isAdvertsPage ? (
              <Link to="/">
                <button className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Logout
              </button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="block py-2">
                  Log In
                </Link>
                <Link to="/signup">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Desktop Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <div>|</div>
          {isAdvertsPage ? (
            <Link to="/">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Logout
            </button>
            </Link>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/signup">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
