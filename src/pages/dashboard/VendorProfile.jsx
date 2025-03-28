import React from "react";
import profile from "../../assets/photos/profile.png";
import { Link } from "react-router";

const VendorProfile = () => {
  return (
    <div className="pt-14 bg-[#F7F7F7] w-full h-[130vh] flex flex-col justify-evenly gap-y-[20px] p-4">
      <div className="p-3">
        <h2 className="text-2xl font-bold text-stone-700 pl-9">
          Vendor Profile
        </h2>
      </div>
      <div className="flex flex-row gap-x-10 items-center w-[90%] bg-white h-[20vh] rounded-md mx-auto p-5">
        <img src={profile} alt="" className="w-30 h-30 rounded-[50%]" />
        <div className="flex flex-col justify-evenly">
          <h2 className="text-2xl text-stone-700 font-bold">John Doe</h2>
          <span className="text-[16px] text-stone-700">Vendor</span>
          <span className="text-[16px] text-stone-700">Accra, Ghana</span>
        </div>
      </div>
      <div className="w-[90%] bg-white h-[40vh] rounded-md mx-auto p-5">
        <div className="border-b-2 border-gray-300 p-5 flex flex-row justify-between items-center">
          <h2 className="text-[18px] font-bold text-stone-700">
            Personal Information
          </h2>
          <Link to={"/dashboard/profile-update"}>
            <button className=" bg-blue-300 text-white rounded-md w-fit px-5">
              Edit
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-5 p-5">
          <div className="flex flex-col gap-y-2">
            <span className="font-light">Name</span>
            <span className="font-bold">John Doe</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">Status</span>
            <span className="font-bold">Online</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">Date of Birth</span>
            <span className="font-bold">12-10-1920</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">E-mail Address</span>
            <span className="font-bold">John Doe</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">Phone Number</span>
            <span className="font-bold">+233 55558445</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">User Role</span>
            <span className="font-bold">John Doe</span>
          </div>
        </div>
      </div>
      <div className="w-[90%] bg-white h-[30vh] rounded-md mx-auto p-5">
        <div className="border-b-2 border-gray-300 p-5">
          <h1 className="text-[18px] font-bold text-stone-700">Address</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 p-5">
          <div className="flex flex-col gap-y-2">
            <span className="font-light">Country</span>
            <span className="font-bold">Ghana</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">City</span>
            <span className="font-bold">Accra</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="font-light">Postal Code</span>
            <span className="font-bold">ERT-1254</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
