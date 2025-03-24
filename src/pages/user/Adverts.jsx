import { SearchIcon } from "lucide-react";
import React, { useEffect } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import { Link } from "react-router";

const Adverts = () => {
  const fetchAds = async () =>{
    try {
      const res = await apiGetAllAdverts ();
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };
useEffect(() => {
  fetchAds();
}, [])
  
  const ads = [
    { id: 1, title: "iPhone 13", description: "Brand new iPhone 13, 128GB", price: "$799", image: "https://via.placeholder.com/300" },
    { id: 2, title: "Samsung 4K TV", description: "55-inch 4K UHD Smart TV", price: "$499", image: "https://via.placeholder.com/300" },
    { id: 3, title: "Nike Sneakers", description: "Comfortable running shoes", price: "$120", image: "https://via.placeholder.com/300" },
    { id: 4, title: "Dell Laptop", description: "Powerful laptop for work and gaming", price: "$999", image: "https://via.placeholder.com/300" },
    { id: 5, title: "AirPods Pro", description: "Wireless noise-canceling earbuds", price: "$249", image: "https://via.placeholder.com/300" },
    { id: 6, title: "Gaming Chair", description: "Ergonomic chair for long gaming sessions", price: "$199", image: "https://via.placeholder.com/300" }
  ]
  return (
    <div>
      <div className="min-h-[70vh]  bg-[url('assets/images/ad-bg.png')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:tex
          -6xl text-black font-bold pb-4">
            Products List
          </h1>
          <p className="text-black text-lg md:text-2xl font-normal mb-3">
            Happy Shopping
          </p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by title,description or price"
          className="w-full sm:w-96 md:w-[500px] lg:w-[600px] px-4 py-2 mt-4 border rounded-md outline-none text-gray-700 text-sm mx-auto block focus:border-blue-500 focus:ring-1 focus:ring-blue-500 "
        />
      </div>

      <div>
      <div className="max-w-7xl mx-auto p-4">
      

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {ads.map((ad) => (
            <div key={ad.id} className="bg-white border rounded-lg shadow-md p-4">
              <div className="w-full h-40 bg-gray-200 rounded-md"></div> 
              <h2 className="text-lg font-semibold mt-2">Ad Title</h2>
              <p className="text-gray-600 text-sm">Short description...</p>
              <p className="text-blue-500 font-bold mt-2">$XXX</p>
              <Link to={`/adverts/${ad.id}`}>
              <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                View Details
              </button>
              </Link>
            </div>
          ))}
        </div>
      
    </div>
      </div>
    </div>
  );
};

export default Adverts;
