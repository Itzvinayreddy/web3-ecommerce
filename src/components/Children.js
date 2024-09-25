// src/components/Children.js
import React from 'react';
import product1 from '../assets/children_product1.jpeg'; // Update to .jpeg
import product2 from '../assets/children_product2.jpeg'; // Update to .jpeg
import product3 from '../assets/children_product3.jpeg'; // Update to .jpeg

const Children = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen fade-in">
      <h2 className="text-3xl font-bold mb-6">Children's Section</h2>
      <p className="mb-4">Here you can find all products for children.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 slide-up">
          <img src={product1} alt="Product 1" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl mt-2">Product 1</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 slide-up">
          <img src={product2} alt="Product 2" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl mt-2">Product 2</h3>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 slide-up">
          <img src={product3} alt="Product 3" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl mt-2">Product 3</h3>
        </div>
      </div>
    </div>
  );
};

export default Children;
