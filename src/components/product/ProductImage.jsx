import React from 'react';
import Badge from '../ui/Badge';

const ProductImage = ({ src, alt, tag }) => {
  return (
    <div className="relative h-72 w-full overflow-hidden bg-gray-200">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      <Badge text={tag} />
    </div>
  );
};

export default ProductImage;