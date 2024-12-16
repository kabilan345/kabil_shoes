import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About ShoePalace</h1>
            <p className="text-gray-600 mb-4">
              Founded in 2024, ShoePalace has been at the forefront of footwear innovation and style.
              Our mission is to provide exceptional quality shoes that combine comfort, durability,
              and contemporary design.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that every step matters, and that's why we carefully curate our collection
              to ensure that each pair of shoes meets our high standards of excellence.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-black">50+</h3>
                <p className="text-gray-600">Brands</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-black">1000+</h3>
                <p className="text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-black">10k+</h3>
                <p className="text-gray-600">Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560769629-975ec94e6a86"
              alt="Shoe Store"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};