import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 via-white to-gray-50 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <img
        src={product.image}
        alt="Product"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
          {product.title}
        </h2>
        
        <p className="text-gray-700 text-sm mt-3 mb-6 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded-md">
          ₹{product.price}
          </span>
          
          <button className="px-5 py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
