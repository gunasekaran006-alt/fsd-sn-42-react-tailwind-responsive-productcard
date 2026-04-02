import React from 'react';

const ProductInfo = ({ category, name, price }) => {
  return (
    <div className="p-6 flex flex-col h-full bg-white">
      <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-2">
        {category}
      </span>
      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1">
        {name}
      </h3>
      
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">Price</span>
          <span className="text-2xl font-black text-gray-900">${price}</span>
        </div>
        <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-200 active:scale-95 transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;