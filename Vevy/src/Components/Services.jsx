// src/OurServices.jsx

import React from 'react';

const OurServices = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">Basic Plan</h2>
            <p className="text-center text-gray-600 mb-4">Perfect for small businesses and startups looking to establish an online presence.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✓ Responsive Design</li>
              <li>✓ Up to 5 Pages</li>
              <li>✓ Basic SEO Setup</li>
              <li>✓ Email Support</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">$299</p>
              <p className="text-gray-600 mb-6">One-time Payment</p>
              <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">Standard Plan</h2>
            <p className="text-center text-gray-600 mb-4">Ideal for growing businesses that need more features and customization.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✓ Everything in Basic Plan</li>
              <li>✓ Up to 10 Pages</li>
              <li>✓ Advanced SEO Setup</li>
              <li>✓ Custom Design</li>
              <li>✓ Priority Email Support</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">$499</p>
              <p className="text-gray-600 mb-6">One-time Payment</p>
              <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">Premium Plan</h2>
            <p className="text-center text-gray-600 mb-4">Best for businesses that want a fully customized and optimized website.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✓ Everything in Standard Plan</li>
              <li>✓ Unlimited Pages</li>
              <li>✓ E-commerce Integration</li>
              <li>✓ Ongoing Support & Maintenance</li>
              <li>✓ Custom Development Features</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">$999</p>
              <p className="text-gray-600 mb-6">One-time Payment</p>
              <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OurServices;
