import React, { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import { Link } from "react-router";

const Adverts = () => {
  const [ads, setAds] = useState([]);
  const [selectedFilterType, setSelectedFilterType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const imageURL = "https://res.cloudinary.com/dwhmwz2nm/image/upload/";

  
  const getAds = async (e) => {
    if (e) e.preventDefault(); 

    try {
      let response;

      if (selectedFilterType === "" || searchQuery.trim() === "") {
        
        response = await apiGetAllAdverts({ limit: 1000 });
      } else {
        
        response = await apiGetAllAdverts(selectedFilterType, searchQuery);
      }

      setAds(response.data.data || []);
    } catch (error) {
      console.log("Error fetching ads:", error);
      setAds([]);
    }
  };

  
  useEffect(() => {
    getAds();
  }, []);

  return (
    <div>
      <div className="min-h-[70vh] bg-[url('assets/images/ad-bg.png')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl text-black font-bold pb-4">
            Products List
          </h1>
          <p className="text-black text-lg md:text-4xl font-normal mb-3">
            Happy Shopping
          </p>
        </div>
      </div>

      {/* ✅ Search & Filter Section */}
      <div className="flex items-center gap-4 mt-4 justify-center">
        <form
          onSubmit={getAds}
          className="flex flex-wrap items-center justify-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md"
        >
          {/* ✅ Filter Dropdown */}
          <select
            className="h-10 px-4 border rounded-md text-gray-700 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={selectedFilterType}
            onChange={(e) => setSelectedFilterType(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="category">Category</option>
            <option value="title">Title</option>
            <option value="gte">Price greater than</option>
            <option value="lte">Price less than</option>
          </select>

          {/* ✅ Search Input */}
          <input
            type="text"
            placeholder="Enter keyword or price"
            className="h-10 w-full sm:w-80 md:w-96 lg:w-[400px] px-4 border rounded-md outline-none text-gray-700 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* ✅ Search Button */}
          <button
            type="submit"
            className="h-10 bg-blue-500 text-white px-6 rounded-md hover:bg-blue-600 transition shadow-md flex items-center"
          >
            Search
          </button>
        </form>
      </div>

      {/* ✅ Display Ads */}
      <div>
        <div className="max-w-7xl mx-auto p-4">
          {ads.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {ads.map((ad) => (
                <div
                  key={ad.id}
                  className="bg-white border rounded-lg shadow-md p-4 flex flex-col gap-1 justify-center items-center"
                >
                  <div className="w-[150px] h-40 bg-gray-200 rounded-md">
                    <img
                      src={`${imageURL}${ad.image}.${ad.image?.includes("png") ? "png" : "jpg"}`}
                      alt={ad.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4>{ad.category}</h4>
                  <h2 className="text-lg font-semibold mt-2">{ad.title}</h2>
                  <p className="text-gray-600 text-sm">{ad.description?.slice(0, 21)}</p>
                  <p className="text-blue-500 font-bold mt-2">GHS {ad.price}</p>
                  <Link to={`/adverts/${ad.id}`}>
                    <button className="mt-3 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // ✅ Show "No Products Found" message when ads are empty
            <p className="text-center text-red-700 mt-6 text-xl font-semibold">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adverts;
