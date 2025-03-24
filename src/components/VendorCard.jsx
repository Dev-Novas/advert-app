import React from "react";
import p1 from "../assets/photos/p1.png";
import { EditIcon, Trash } from "lucide-react";

const VendorCard = () => {
  return (
    <div className="bg-gray-300 p-5 rounded-md">
      <div className=" bg-white w-[250px] flex flex-col justify-center items-center rounded-lg border border-stone-300">
        <div>
          <img
            src={p1}
            alt="product.image"
            className="w-[300px] h-[200px] object-cover"
          />
        </div>
        <div className="w-[250px] p-4 flex flex-col gap-y-2">
          <h3 className="text-[20px] text-stone-800 font-bold">
            Camera Lens(p.title)
          </h3>
          <p className="text-[16px] text-stone-600">Accessories(p.cate)</p>
          <p className="text-[16px] text-stone-600">
            Capture every moment in stunning detail with this high-resolution
            camera(p.desc).{" "}
          </p>
          <div className="flex flex-row justify-between items-center">
            <p className="bg-stone-300 p-1 rounded-md w-fit text-stone-800">
              $600.00()
            </p>
            <span className="bg-stone-300 p-1 rounded-md w-fit text-stone-800">
              Available
            </span>
            <EditIcon className="text-stone-600" />
            <Trash className="text-stone-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
