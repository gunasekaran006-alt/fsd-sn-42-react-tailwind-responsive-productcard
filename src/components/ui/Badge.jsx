import React from 'react';

const Badge = ({ text }) => {
  if (!text) return null;
  
  return (
    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest z-10">
      {text}
    </span>
  );
};

export default Badge;