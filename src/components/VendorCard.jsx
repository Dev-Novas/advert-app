import React from "react";
import { EditIcon, Trash } from "lucide-react";
import { Link } from "react-router"; // Import Link if using React Router
import p1 from "../assets/photos/p1.png";

const VendorCard = () => {
  return (
    <div className="bg-gray-300 rounded-md">
      <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-stone-300">
        <div>
          <img
            src={p1}
            alt="product.image"
            className="w-full h-[200px] object-cover rounded-t-lg shadow-md"
          />
        </div>
        <div className="w-[250px] p-4 flex flex-col gap-y-2">
          <h3 className="text-[22px] text-gray-800 font-extrabold">
            Camera Lens
          </h3>
          <p className="text-[14px] text-gray-500 font-semibold uppercase tracking-wide">
            Accessories
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            Capture every moment in stunning detail with this high-resolution
            camera.
          </p>
          <div className="flex flex-row justify-between items-center gap-y-1">
            <p className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full shadow-md">
              $600.00
            </p>
            <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full shadow-md w-fit">
              Available
            </span>
            {/* Method 1: Using React Router */}
            <Link to="/dashboard/edit-ad">
              <EditIcon className="w-5 h-5 cursor-pointer text-blue-500 hover:text-blue-700" />
            </Link>

            {/* Method 2: Using window.location.href */}
            {/* <button onClick={() => (window.location.href = "/edit-product")}>
              <EditIcon className="text-red-400 cursor-pointer" />
            </button> */}

            <Trash className="text-red-500 hover:text-red-700 cursor-pointer w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
