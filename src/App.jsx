import React from 'react';
import ProductCard from './components/product/ProductCard';

function App() {
  // Product Data is directly inside App.jsx now
  const productsData = [
    {
      id: 1,
      name: "Sony Noise Cancelling",
      category: "Audio",
      price: "299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format",
      tag: "Trending"
    },
    {
      id: 2,
      name: "Logitech MX Master 3S",
      category: "Accessories",
      price: "99",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format",
      tag: "Best Seller"
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      category: "Wearables",
      price: "399",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format",
      tag: "New"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            New Arrivals
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Discover our latest collection of premium products designed for your everyday lifestyle.
          </p>
        </div>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-14">
          {productsData.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;