import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const SingleAd = () => {
  const { id } = useParams();
  const [ad, setAd] = useState({});

  const getAd = async () => {
    try {
      const response = await apiGetSingleAdverts(id);
      console.log(response.data.data);
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
          <div>
            <img
              src={ad.image}
              alt={ad.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h1 className="text-3xl font-bold text-blue-600">{ad.title}</h1>
            <p className="text-gray-700 text-lg mt-3">{ad.description}</p>
            <p className="text-blue-500 font-bold text-2xl mt-3">{ad.price}</p>

            {/* Back Button */}
            <Link to="/adverts">
              <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                ← Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAd;
