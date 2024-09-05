import React from 'react';
import { FaRocket, FaCogs, FaStar } from 'react-icons/fa'; // Import icons

const OurServices = () => {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-400 min-h-screen py-12 font-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">
              <FaRocket className="inline-block mr-2" /> Basic Plan
            </h2>
            <p className="text-center text-gray-600 mb-4">Perfect for small businesses and startups looking to establish an online presence.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✓ Responsive Design</li>
              <li>✓ Single Page Website (No external linked pages, can have multiple pages in scrolling manner)</li>
              <li>✓ Basic SEO Setup</li>
              <li>✓ SSL Certificate</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">₹ 5,000</p>
              <p className="text-gray-600 mb-6">One-time Payment</p>
              <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">
              <FaCogs className="inline-block mr-2" /> Standard Plan
            </h2>
            <p className="text-center text-gray-600 mb-4">Ideal for growing businesses that need more features and customization.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✓ MultiPage Website</li>
              <li>✓ Advanced SEO Setup</li>
              <li>✓ Custom Design</li>
              <li>✓ SSL Certificate</li>
              <li>✓ Dynamic Design</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">₹ 10,000</p>
              <p className="text-gray-600 mb-6">One-time Payment</p>
              <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm mx-auto md:mx-0">
            <h2 className="text-2xl font-semibold text-center mb-4">
              <FaStar className="inline-block mr-2" /> Premium Plan
            </h2>
            <p className="text-center text-gray-600 mb-4">Best for businesses that want a fully customized and optimized website.</p>
            <ul className="text-left mb-6 space-y-2">
              <li>✓ Everything in Standard Plan</li>
              <li>✓ Unlimited Pages</li>
              <li>✓ E-commerce Integration</li>
              <li>✓ Ongoing Support & Maintenance</li>
              <li>✓ Custom Development Features</li>
            </ul>
            <div className="text-center">
              <p className="text-3xl font-bold mb-2">Depends on Requirements(Min. ₹20,000)</p>
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
