import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">Discover amazing things happening around you.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg">Explore Now</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">About Us</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vitae libero maximus lobortis. Suspendisse nec suscipit eros.</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Our Services</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dolor vitae libero maximus lobortis. Suspendisse nec suscipit eros.</p>
      </div>
    </div>
  );
};

export default Home;

