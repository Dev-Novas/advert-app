import React from "react";

import VendorCard from "../../components/VendorCard";

const VendorAds = () => {
  return (
    <div className="p-4 pt-14">
      <div className="">
        <h1
          className="text-4xl mb-1 flex flex-row justify-center items-center
       font-bold text-gray-700 p-1.5"
        >
          My Products
        </h1>
      </div>
      <VendorCard />
    </div>
  );
};

export default VendorAds;
