import React from "react";
import { EditIcon, Trash } from "lucide-react";
import { Link } from "react-router"; // Import Link if using React Router
import p1 from "../assets/photos/p1.png";
import { apiDeleteVendorAdvertbyId } from "../services/adverts";

const VendorCard = ({ ad }) => {
  const imageURL = "https://res.cloudinary.com/dwhmwz2nm/image/upload/";

  const handleDelete = async () => {
    // Delete advert from backend
    try {
      const response = await apiDeleteVendorAdvertbyId(ad.id);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-stone-300">
        <div>
          <Link to="/dashboard/single-product">
            <img
              src={`${imageURL}${ad.image}.${
                ad.image?.includes("png") ? "png" : "jpg"
              }`}
              alt="product.image"
              className="w-full h-[200px] object-cover rounded-t-lg shadow-md"
            />
          </Link>
        </div>
        <div className="w-[250px] p-4 flex flex-col gap-y-2">
          <h3 className="text-[22px] text-gray-800 font-extrabold">
            {ad.title}
          </h3>
          <p className="text-[14px] text-gray-500 font-semibold uppercase tracking-wide">
            {ad.category}
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            {ad.description}
          </p>
          <div className="flex flex-row justify-between items-center gap-y-1">
            <p className="bg-blue-500 text-white font-bold px-3 py-1 rounded-full shadow-md">
              ${ad.price}
            </p>
            <span className="bg-green-500 text-white font-bold px-3 py-1 rounded-full shadow-md w-fit">
              Available
            </span>
            {/* Method 1: Using React Router */}
            <Link to={`/dashboard/edit-ad/${ad.id}`}>
              <EditIcon className="w-5 h-5 cursor-pointer text-blue-500 hover:text-blue-700" />
            </Link>
            <button onClick={handleDelete}>
              <Trash className="text-red-500 hover:text-red-700 cursor-pointer w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
