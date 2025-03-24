import { ChartBar, HomeIcon, LayoutDashboard, Settings } from "lucide-react";
import React from "react";

const DashNav = () => {
  return (
    <div className="flex justify-around items-center  w-full px-2 py-3 bg-[#20B2AA] h-14 fixed">
      <div
        className="flex justify-between gap-x-2 cursor-pointer 
                transition-all duration-300 ease-in-out 
                hover:bg-white hover:text-black hover:shadow-md hover:rounded-md px-3 py-2"
      >
        <LayoutDashboard className="text-[#CDAA7D]" />
        <span>Dashboard</span>
      </div>
      <div
        className="flex justify-between gap-x-2 cursor-pointer 
                transition-all duration-300 ease-in-out 
                hover:bg-white hover:text-black hover:shadow-md hover:rounded-md px-3 py-2"
      >
        <ChartBar className="text-[#CDAA7D]" />
        <span>Analytics</span>
      </div>
      <div
        className="flex justify-between gap-x-2 cursor-pointer 
                transition-all duration-300 ease-in-out 
                hover:bg-white hover:text-black hover:shadow-md hover:rounded-md px-3 py-2"
      >
        <Settings className="text-[#CDAA7D]" />
        <span>Settings</span>
      </div>
      <div className="w-1/3 ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent "
        />
      </div>
    </div>
  );
};

export default DashNav;
