import { Calendar } from "lucide-react";
import React from "react";
import StatCards from "../../components/StatCards";
import ActivityGraph from "../../components/ActivityGraph";
import UsageRadar from "../../components/UsageRadar";
import RecentTransactions from "../../components/RecentTransactions";

const Overview = () => {
  return (
    // <div>
    //   <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent p-2">
    //     Vendor!
    //     <br /> Welcome to your Dashboard
    //   </h1>
    //   <div></div>
    // </div>
    <div className="w-full pt-14 bg-[#F7F7F7]">
      <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
        <div className="flex items-center justify-between p-0.5">
          <div>
            <span className="text-sm font-bold block">
              Good morning, Vendor!
            </span>
            <span className="text-xs block text-stone-500">
              Friday, March 28th 2025
            </span>
          </div>
          <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
            <Calendar />
            <span>Prev 6 Months</span>
          </button>
        </div>
      </div>
      <div className="px-4 grid gap-3 grid-cols-12">
        <StatCards />
        <ActivityGraph />
        <UsageRadar />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Overview;
