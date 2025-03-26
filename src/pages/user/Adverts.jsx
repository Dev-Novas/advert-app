import React, { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import { Link, useSearchParams } from "react-router";

const Adverts = () => {
  const [ads, setAds] = useState([]);
  const imageURL = "https://res.cloudinary.com/dwhmwz2nm/image/upload/";
  const getAds = async () => {
    try {
      const response = await apiGetAllAdverts();
      setAds(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAds();
  }, []);

  return (
    <div>
      <div className="min-h-[70vh]  bg-[url('assets/images/ad-bg.png')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-black font-bold pb-4">
            Products List
          </h1>
          <p className="text-black text-lg md:text-4xl font-normal mb-3">
            Happy Shopping
          </p>
        </div>
      </div>
  
      <div className="flex items-center gap-4 mt-4 justify-center">
        {/* Filter Dropdown */}
        <select className="px-4 py-2 ml-4 border rounded-md text-gray-700 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
          <option value="category">All Categories</option>
          <option value="title">Title</option>
          <option value="gte">Price greater than</option>
          <option value="lte">Price less than</option>
        </select>
  
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by title, description, or price"
          className="w-full sm:w-96 md:w-[500px] lg:w-[600px] px-4 py-2 border rounded-md outline-none text-gray-700 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-50"
        />
      </div>
  
      <div>
        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {ads.map((ad) => {
              return (
                <div
                  key={ad.id} 
                  className="bg-white border rounded-lg shadow-md p-4"
                >
                  <div className="w-full h-40 bg-gray-200 rounded-md">
                    <img src={`${imageURL}${ad.image}`} alt="" />
                  </div>
                  <h2 className="text-lg font-semibold mt-2">{ad.title}</h2>
                  <p className="text-gray-600 text-sm">{ad.description}</p>
                  <p className="text-blue-500 font-bold mt-2">GHS {ad.price}</p>
                  <Link to={`/adverts/${ad.id}`}>
                    <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adverts;
