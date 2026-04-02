import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col w-full max-w-sm mx-auto rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
      <ProductImage 
        src={product.image} 
        alt={product.name} 
        tag={product.tag} 
      />
      <ProductInfo 
        category={product.category} 
        name={product.name} 
        price={product.price} 
      />
    </div>
  );
};

export default ProductCard;