import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { apiGetAdvertbyId } from "../../services/adverts";
import { ShoppingCartIcon } from "lucide-react";

const SingleAd = () => {
  const { id } = useParams();
  const [ad, setAd] = useState({});
  const imageURL = "https://res.cloudinary.com/dwhmwz2nm/image/upload/";

  const getAd = async () => {
    try {
      const response = await apiGetAdvertbyId(id);
      setAd(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAd();
  });

  return (
    <div>
      <div className="min-h-[70vh]  bg-[url('assets/images/single2.png')] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center px-4"></div>
      <div className="max-w-5xl mx-auto p-6 mt-24 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="w-[450px] p-4 object-cover rounded-lg shadow-lg flex items-center justify-center">
            <img
              src={`${imageURL}${ad.image}.${ad.image?.includes("png")? "png" : "jpg"}`}
              alt={ad.title}
              className="w-[200px] h-64 md:h-80"
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{ad.title}</h1>
            <p className="text-gray-700 text-lg mt-3">{ad.description}</p>
            <p className="text-blue-500 font-bold text-2xl mt-3">
              GHS {ad.price}
            </p>

            {/* Back Button */}
            <div className="flex items-center">
              <Link to="/adverts">
                <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                  ← Back
                </button>
              </Link>
              {/* shop button */}
              <Link to="/contact">
                <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition ml-5 flex items-center gap-2">
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span>Shop Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
