// src/TechShowcase.jsx

import React from 'react';

const TechShowcase = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold text-center mb-12">Built with the Latest Technology</h1>
        <p className="text-xl text-center text-gray-700 mb-12">
          Our websites are custom-coded using the latest technology stack, offering you greater flexibility, scalability, and performance compared to no-code platforms.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* Video Section */}
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className=" w-full h-full object-cover">
                  <source src="/Coding-Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            {/* Custom-Coded Websites */}
            <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-center mb-4">Custom-Coded Websites</h2>
              <ul className="text-left mb-6 space-y-2 text-gray-700">
                <li>✓ Built using the latest tech stack (React, Node.js, etc.)</li>
                <li>✓ High performance and fast load times</li>
                <li>✓ Fully customizable to your needs</li>
                <li>✓ Scalable for future growth</li>
                <li>✓ SEO-friendly and optimized for search engines</li>
              </ul>
            </div>

            {/* No-Code Websites */}
            <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-center mb-4">No-Code Websites</h2>
              <ul className="text-left mb-6 space-y-2 text-gray-700">
                <li>✗ Limited customization options</li>
                <li>✗ May suffer from performance issues</li>
                <li>✗ Often lack scalability</li>
                <li>✗ Can be difficult to optimize for SEO</li>
                <li>✗ Dependence on third-party platforms</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TechShowcase;
