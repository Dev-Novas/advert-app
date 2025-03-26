import { Star } from "lucide-react";
import React from "react";
import p1 from "../../assets/photos/p1.png";

const SingleProduct = () => {
  return (
    <div className="w-full pt-17 bg-[#F7F7F7] p-5">
      {/* Product Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Canon Camera C9</h1>
      <p className="text-sm text-gray-500 mb-6">High Resolution Camera</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-2">
          {/* Main Image */}
          <div className="aspect-square bg-gray-100 border rounded-md overflow-hidden">
            <img
              src={p1}
              alt=""
              className="h-full object-cover object-center"
            />
          </div>

          {/* Thumbnail Images */}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Price */}
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-900">$899.99</span>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
          </div>

          {/* Stock Status */}

          {/* Short Description */}
          <p className="text-gray-600 text-[20px]">
            Experience stunning 4K resolution and smart features with this
            55-inch Ultra HD Smart TV. Perfect for streaming, gaming, and
            enjoying your favorite content with vibrant colors and crisp
            details.
          </p>

          {/* Static Quantity */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Quantity</span>
            <div className="border border-gray-300 rounded-md px-4 py-1 text-center w-16">
              1
            </div>
          </div>

          {/* Add to Cart Button (non-functional) */}
          <a
            href="#"
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium text-center"
          >
            Add to Cart
          </a>

          {/* Warranty */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-[16px] font-bold">
              Warranty: 2-year manufacturer warranty
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Product Description
        </h2>
        <p className="text-gray-600 mb-6">More descriptions for the product</p>

        <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
      </div>

      {/* Product Specifications */}

      {/* Customer Support */}
      <div className="mt-12 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Customer Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-sm text-gray-600">
              Free shipping on all orders over $50
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">
              Technical Support
            </h3>
            <p className="text-sm text-gray-600">Available 7 days a week</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-sm text-gray-600">
              30-day hassle-free return policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
