import React, { useEffect } from "react";
import { useState } from "react";

import VendorCard from "../../components/VendorCard";
import { apiGetVenderAdverts } from "../../services/adverts";

const VendorAds = () => {
  // const products = [
  //   { id: 1, name: "Laptop", price: "$1000" },
  //   { id: 2, name: "Smartphone", price: "$600" },
  //   { id: 3, name: "Headphones", price: "$100" },
  //   { id: 4, name: "Camera", price: "$700" },
  // ];

  const [ads, setAds] = useState([]);

  //fetching data from api
  const getAds = async () => {
    try {
      const response = await apiGetVenderAdverts();
      // console.log(response.data);
      setAds(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div className="p-4 pt-14 bg-[#F7F7F7] ">
      <div className="">
        <h1
          className="text-4xl mb-1 flex justify-center items-center 
  font-bold text-gray-700 p-1.5  border-b-2 border-blue-500 pb-2 
  w-fit mx-auto"
        >
          My Products
        </h1>
      </div>
      <div className="">
        {ads.map((ad) => {
          return <VendorCard key={ad.id} ad={ad} />;
        })}
      </div>

      {/* <div
        className="grid grid-cols-4 gap-4 bg-gray-100 p-6 bg-gradient-to-r from-blue-50 to-white shadow-lg border border-gray-300
  rounded-md"
      >
        {products.map((product) => {
          return (
            <VendorCard
              image={product.image}
              title={product.title}
              id={product.id}
              key={product.id}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default VendorAds;
