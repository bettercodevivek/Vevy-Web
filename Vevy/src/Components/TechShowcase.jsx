// src/TechShowcase.jsx

import React from 'react';

const TechShowcase = () => {
  return (
    <div className="bg-gradient-to-r from-sky-600 to-blue-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold text-center mb-12">Built with the Latest Technology</h1>
        <p className="text-xl text-center text-white mb-12">
          Our websites are custom-coded using the latest technology stack, offering you greater flexibility, scalability, and performance compared to no-code platforms.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* Video Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <div className="bg-white bg-opacity-40 backdrop-blur-xl p-2 shadow-xl rounded-lg overflow-hidden w-full mb-8 lg:mb-0">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                  <source src="/Coding-Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Technology Logos Section */}
            <div className="flex justify-center items-center flex-wrap mt-4">
              {/* Replace the src attributes with the paths to your logo images */}
              <img src="/path/to/react-logo.png" alt="React" className="h-16 w-auto m-4" />
              <img src="/path/to/tailwind-logo.png" alt="Tailwind CSS" className="h-16 w-auto m-4" />
              <img src="/path/to/node-logo.png" alt="Node.js" className="h-16 w-auto m-4" />
              <img src="/path/to/mongo-logo.png" alt="MongoDB" className="h-16 w-auto m-4" />
              {/* Add more logos as needed */}
            </div>
          </div>

          {/* Comparison Section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            {/* Custom-Coded Websites */}
            <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform">
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
            <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform">
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
