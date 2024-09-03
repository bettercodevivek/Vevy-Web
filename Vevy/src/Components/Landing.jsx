// src/LandingPage.jsx

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-6">Transform Your Business with Stunning Websites</h1>
        <p className="text-xl mb-8">Expertly crafted websites to elevate your online presence and engage your audience.</p>
        <a href="#video" className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200">Get Started</a>
      </header>

      {/* Video Section */}
      <section id="video" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">See Our Work in Action</h2>
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden w-full md:w-3/4 lg:w-2/3">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
                  <source src="/Demo_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Watch Our Demo</h3>
                <p className="mb-4">See how we can transform your ideas into a stunning website. Our demo video showcases our design and development capabilities.</p>
                <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Webify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
