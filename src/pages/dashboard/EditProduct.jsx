import React from "react";
import video1 from "../../assets/photos/video1.mp4";
import edit from "../../assets/photos/edit1.png";

const EditProduct = () => {
  return (
    <div className="flex-1 flex flex-col p-6 w-full bg-[#F7F7F7] pt-14">
      <h1
        className="text-4xl mb-1 flex justify-center items-center 
  font-bold text-gray-700 p-1.5  border-b-2 border-blue-500 pb-2 
  w-fit mx-auto"
      >
        Update Advert
      </h1>

      <div
        className="flex w-full flex-1 md:flex-row items-center justify-center  gap-8 p-6 bg-gradient-to-r from-blue-50 to-white shadow-lg border border-gray-300
 rounded-md"
      >
        <div className="w-full md:w-1/2 h-[500px]">
          <img
            src={edit}
            alt=""
            className="w-full  h-full  object-cover rounded-lg shadow-lg"
          />
          {/* <video
            src={video1}
            className="w-full  h-full  object-cover rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video1} type="video/mp4" />
          </video> */}
        </div>
        <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg h-[500px]">
          <form action="" className="flex flex-col space-y-2">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Advert Title*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a catchy title for your advert"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description*
              </label>
              <textarea
                name="description"
                id="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe your product or service in detail"
                required
              />
              {/* <textarea name="description" id="description"></textarea> */}
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category*
              </label>
              <select
                name="category"
                id="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="tech">Select Category</option>
                <option value="tech">Laptops</option>
                <option value="tech">Smartphones</option>
                <option value="tech">Headphones</option>
                <option value="tech">Smartwatches</option>
                <option value="tech">Accessories</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Recommended size: 800x600px. Max file size: 5MB
              </p>
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {" "}
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="$ 0.00"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Advert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
