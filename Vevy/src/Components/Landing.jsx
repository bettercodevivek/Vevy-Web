// src/LandingPage.jsx

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative z-0">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-6">Transform Your Business with Stunning Websites</h1>
        <p className="text-xl mb-8">Expertly crafted websites to elevate your online presence and engage your audience.</p>
        <a href="#video" className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200">Get Started</a>
      </header>

      {/* Video Section */}
      <section id="video" className="py-16 bg-blue-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-white">See Our Work in Action</h2>
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg shadow-xl rounded-xl overflow-hidden w-full md:w-3/4 lg:w-2/3">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                  <source src="/Demo_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
