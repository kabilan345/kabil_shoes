import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1556906781-9a412961c28c)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Step into Style</h1>
            <p className="text-xl md:text-2xl mb-8">Discover our premium collection of shoes</p>
            <Link
              to="/products"
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Running',
              image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            },
            {
              title: 'Casual',
              image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
            },
            {
              title: 'Sports',
              image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            },
          ].map((category) => (
            <div
              key={category.title}
              className="relative overflow-hidden rounded-lg aspect-square group"
            >
              <img
                src={category.image}
                alt={category.title}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};