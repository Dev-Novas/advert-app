import React from "react";
import profile from "../../assets/photos/profile.png";

const ProfileUpdate = () => {
  return (
    <div className="pt-14 bg-[#F7F7F7]">
      <div className="border-b-2 border-gray-300 p-5 flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold text-stone-700">Edit your Profile</h2>
      </div>
      <div className="flex flex-row w-full p-5">
        <div className="flex flex-col justify-around gap-y-3 p-4 w-[30%] ">
          <span className="text-2xl font-medium text-gray-700">Photo :</span>
          <img src={profile} alt="" className="w-30 h-30 rounded-[50%]" />
          <span className="p-[10px] w-fit bg-blue-300 text-white rounded-md">
            CHANGE PHOTO
          </span>
        </div>
        <div className="w-[60%] bg-white p-6 rounded-lg shadow-lg">
          <form action="" className="flex flex-col gap-y-4">
            {/* Name Field */}
            <div className="flex flex-row items-center gap-x-6">
              <label
                htmlFor="name"
                className="w-32 text-lg font-medium text-gray-700 text-right"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Title Field */}
            <div className="flex flex-row items-center gap-x-6">
              <label
                htmlFor="title"
                className="w-32 text-lg font-medium text-gray-700 text-right"
              >
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your title"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-row items-center gap-x-6">
              <label
                htmlFor="email"
                className="w-32 text-lg font-medium text-gray-700 text-right"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
                disabled
              />
            </div>

            {/* Phone Number Field */}
            <div className="flex flex-row items-center gap-x-6">
              <label
                htmlFor="phone"
                className="w-32 text-lg font-medium text-gray-700 text-right"
              >
                Phone:
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-x-4 mt-4">
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
