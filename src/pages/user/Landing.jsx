import React, { useEffect, useState } from "react";
import { HeartIcon, MapPinIcon } from "lucide-react";
import phone from "../../assets/images/phone.png";
import accessories from "../../assets/images/accessories.png";
import headphone from "../../assets/images/headphone.png";
import laptop from "../../assets/images/laptop.png";
import watch from "../../assets/images/watch.png";
import smartphone from "../../assets/images/smartphone.png";
import laptop1 from "../../assets/images/laptop1.png";
import headphones from "../../assets/images/headphones.png";
import smartwatch from "../../assets/images/smartwatch.png";
import keyboard from "../../assets/images/keyboard.png";
import { Link } from "react-router";

const Landing = () => {
   const [role, setRole] = useState(null);

   useEffect(() => {
       const user = localStorage.getItem('user');
       setRole(JSON.parse(user));
     },[]);

  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('assets/images/herobg1.png')] min-h-screen flex flex-col items-center justify-center px-4 bg-no-repeat">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold pb-4">
            Welcome To DiGi TECH
          </h1>
          <p className="text-white text-lg md:text-2xl font-normal mb-3">
            Limitless Digital Products, Unlimited Possibilities!
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="w-full max-w-4xl p-4 relative -z-1">
          <div className="flex flex-wrap md:flex-nowrap gap-3 px-4 py-4 bg-transparent backdrop-blur-md rounded-lg shadow-md w-full">
            {/* Search Input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full px-4 py-2 rounded-md border outline-none text-gray-700"
              />
            </div>

            {/* Location Input */}
            <div className="relative w-full md:w-48">
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 rounded-md border outline-none text-gray-700 pr-10"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                <MapPinIcon />
              </div>
            </div>

            {/* Category Dropdown */}
            <div className=" w-full md:w-40">
              <select className="w-full px-4 py-2 rounded-md border outline-none text-gray-700">
                <option value="allCategories">All Categories</option>
                <option value="laptop">Laptops</option>
                <option value="smartphones">Smartphones</option>
                <option value="headphones">Headphones</option>
                <option value="smartwatches">Smartwatches</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition">
              Search
            </button>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="w-full max-w-4xl px-4 mt-4">
          <div className="flex flex-wrap gap-2 items-center">
            <p className="text-gray-800 font-medium">Trending Search:</p>
            <button className="px-3 py-1 border border-blue-500 text-blue-950 hover:bg-blue-500 hover:text-white rounded-md transition">
              Samsung
            </button>
            <button className="px-3 py-1 border border-blue-500 text-blue-950 hover:bg-blue-500 hover:text-white rounded-md transition">
              iPhone
            </button>
            <button className="px-3 py-1 border border-blue-500 text-blue-950 hover:bg-blue-500 hover:text-white rounded-md transition">
              Headset
            </button>
            <button className="px-3 py-1 border border-blue-500 text-blue-950 hover:bg-blue-500 hover:text-white rounded-md transition">
              Smartwatch
            </button>
          </div>
        </div>
      </div>

      {/* Featured Ads */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
         <div className="flex items-center justify-between">
         <h2 className="text-xl font-bold text-blue-900 mb-4">Featured Ads</h2>
         {role !== "user" && (
          <h2 className="text-xl font-bold text-blue-900 mb-4">Want to view all products? 
              <Link 
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition" to="/login"
              >
                Login
              </Link>
          </h2>
         )}
         </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* phones */}
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={phone}
                  alt="phone"
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                    Phones
                  </span>
                  <button class="focus:outline-none">
                    <HeartIcon />
                  </button>
                </div>
                <h3 class="text-blue-500 font-medium text-lg mb-1">
                  Own A New Phone
                </h3>
                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                <div class="flex items-center">
                  <div class="flex mr-1 list-none">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </div>
                  <span class="text-gray-600 text-sm">(3 Reviews)</span>
                </div>
              </div>
            </div>

            {/* accessories */}
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={accessories}
                  alt="accessories"
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                    Accessories
                  </span>
                  <button class="focus:outline-none">
                    <HeartIcon />
                  </button>
                </div>
                <h3 class="text-blue-500 font-medium text-lg mb-1">
                  Great assets just for you
                </h3>
                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                <div class="flex items-center">
                  <div class="flex mr-1 list-none">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </div>
                  <span class="text-gray-600 text-sm">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* headphones */}
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={headphone}
                  alt="headphone"
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                    Headphones
                  </span>
                  <button class="focus:outline-none">
                    <HeartIcon />
                  </button>
                </div>
                <h3 class="text-blue-500 font-medium text-lg mb-1">
                  Jam To The Music
                </h3>
                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                <div class="flex items-center">
                  <div class="flex mr-1 list-none">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </div>
                  <span class="text-gray-600 text-sm">(4 Reviews)</span>
                </div>
              </div>
            </div>
            {/* laptop */}
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={laptop}
                  alt="laptop"
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                    Laptops
                  </span>
                  <button class="focus:outline-none">
                    <HeartIcon />
                  </button>
                </div>
                <h3 class="text-blue-500 font-medium text-lg mb-1">
                  Play with the keys
                </h3>
                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                <div class="flex items-center">
                  <div class="flex mr-1 list-none">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </div>
                  <span class="text-gray-600 text-sm">(2 Reviews)</span>
                </div>
              </div>
            </div>
            {/* watches */}
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={watch}
                  alt="watch"
                />
              </div>
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                    Smartwatches
                  </span>
                  <button class="focus:outline-none">
                    <HeartIcon />
                  </button>
                </div>
                <h3 class="text-blue-500 font-medium text-lg mb-1">
                  Life made simple
                </h3>
                <p class="text-gray-600 text-sm mb-2">Plot No.7, Buro Osu</p>
                <div class="flex items-center">
                  <div class="flex mr-1 list-none">
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                    <li>⭐</li>
                  </div>
                  <span class="text-gray-600 text-sm">(5 Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* popular categories */}
      <section className="py-12 bg-white text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-600">
            Popular Categories
          </h2>
          <p className="text-gray-500">Have fun with the search </p>
          <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
        </div>
        {/* categories */}
        <div className="flex gap-x-10 justify-center items-center text-gray-500">
          <div className="hover:scale-105 transition-transform hover:bg-blue-300 hover:text-white p-4 rounded-lg shadow-md cursor-pointer">
            <img src={smartphone} alt="Phone" />
            <p className="mt-2 text-sm">SmartPhones</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mt-1">
              1,921
            </span>
          </div>
          <div className="hover:scale-105 transition-transform hover:bg-blue-300 hover:text-white p-4 rounded-lg shadow-md cursor-pointer">
            <img src={laptop1} alt="laptop" />
            <p className="mt-2 text-sm">Laptops</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mt-1">
              3,675
            </span>
          </div>
          <div className="hover:scale-105 transition-transform hover:bg-blue-300 hover:text-white p-4 rounded-lg shadow-md cursor-pointer">
            <img src={keyboard} alt="keyboard" />
            <p className="mt-2 text-sm">Accessories</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mt-1">
              1,112
            </span>
          </div>
          <div className="hover:scale-105 transition-transform hover:bg-blue-300 hover:text-white p-4 rounded-lg shadow-md cursor-pointer">
            <img src={headphones} alt="headphones" />
            <p className="mt-2 text-sm">Headphones</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mt-1">
              400
            </span>
          </div>
          <div className="hover:scale-105 transition-transform hover:bg-blue-300 hover:text-white p-4 rounded-lg shadow-md cursor-pointer">
            <img src={smartwatch} alt="smartwatch" />
            <p className="mt-2 text-sm">Smartwatches</p>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full mt-1">
              3,003
            </span>
          </div>
        </div>
      </section>

      {/* trending today */}
      <div className="bg-gray-100 p-8 flex justify-center items-center min-h-[80px]">
        <div className="w-full max-w-4xl">
        <h2 className="text-xl font-bold text-blue-600 mb-4 text-center">Trending Today</h2>
        <div className="grid grid-cols-2 gap-4">
        <div class="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <img src={headphone} alt="headphone" className="w-full sm:w-1/3 h-40 object-cover" />
            <div className="p-4 w-full sm:w-2/3">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Headphones</span>
                <h3 className="text-lg font-semibold text-blue-600 mt-2">Jam to the music</h3>
                <p className="text-sm text-gray-600">Plot No.7, Buro Osu</p>
                <div className="flex items-center mt-2 text-yellow-500">
                    ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm ml-2">(3 Reviews)</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <img src={phone} alt="phone" className="w-full sm:w-1/3 h-40 object-cover" />
            <div className="p-4 w-full sm:w-2/3">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Phones</span>
                <h3 className="text-lg font-semibold text-blue-600 mt-2">Own A New Phone</h3>
                <p className="text-sm text-gray-600">Plot No.7, Buro Osu</p>
                <div className="flex items-center mt-2 text-yellow-500">
                    ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm ml-2">(3 Reviews)</span>
                </div>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <img src={laptop} alt="laptop" className="w-full sm:w-1/3 h-40 object-cover" />
            <div className="p-4 w-full sm:w-2/3">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Laptops</span>
                <h3 className="text-lg font-semibold text-blue-600 mt-2">Play with the keys</h3>
                <p className="text-sm text-gray-600">Plot No.7, Buro Osu</p>
                <div className="flex items-center mt-2 text-yellow-500">
                    ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm ml-2">(3 Reviews)</span>
                </div>
            </div>
           </div>
           <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
            <img src={accessories} alt="accessories" className="w-full sm:w-1/3 h-40 object-cover" />
            <div className="p-4 w-full sm:w-2/3">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Accessories</span>
                <h3 className="text-lg font-semibold text-blue-600 mt-2">Great assets just for you</h3>
                <p className="text-sm text-gray-600">Plot No.7, Buro Osu</p>
                <div className="flex items-center mt-2 text-yellow-500">
                    ⭐⭐⭐⭐⭐ <span className="text-gray-500 text-sm ml-2">(3 Reviews)</span>
                </div>
            </div>
        </div>

        
        </div>

        

      
        </div>
      </div>
    </div>
  );
};

export default Landing;
