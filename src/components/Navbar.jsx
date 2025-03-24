import React from "react";

const Navbar = () => {
  return(
    <nav className="flex justify-between items-center px-20 py-6 fixed top-0 left-0 w-full text-black text-lg  bg-transparent backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          DIGITAL DEALS HUB
        </div>
        <div className="flex items-center space-x-6">
          <a href="/">Home</a>
          <a href="/adverts">Products</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <div>|</div>
          <a href="#">Log In</a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
