// src/OurServices.jsx

import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

const OurServices = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
        <p className="text-xl text-center mb-8">
          Choose the perfect plan for your business needs. We offer a range of services to help you build a professional online presence.
        </p>

        {/* Services Section */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
          {/* Basic Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full md:w-1/3 h-full">
            <div className="text-3xl font-semibold mb-4 flex items-center">
              <FaCheckCircle className="text-blue-700 mr-2" /> Basic Plan
            </div>
            <ul className="text-left space-y-2 mb-6 text-gray-700">
              <li>✓ Responsive Design</li>
              <li>✓ Basic SEO Optimization</li>
              <li>✓ 5 Pages Website</li>
              <li>✓ Contact Form Integration</li>
              <li>✓ 1 Month Free Support</li>
            </ul>
            <div className="text-xl font-bold mb-4">Starting at $299</div>
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
          </div>

          {/* Standard Plan - Highlighted */}
          <div className="bg-blue-700 text-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full md:w-1/3 h-full transform scale-105">
            <div className="text-3xl font-semibold mb-4 flex items-center">
              <FaStar className="text-yellow-400 mr-2" /> Standard Plan
            </div>
            <ul className="text-left space-y-2 mb-6">
              <li>✓ Everything in Basic</li>
              <li>✓ Advanced SEO Optimization</li>
              <li>✓ 10 Pages Website</li>
              <li>✓ Custom Design</li>
              <li>✓ 3 Months Free Support</li>
            </ul>
            <div className="text-xl font-bold mb-4">Starting at $499</div>
            <a href="#contact" className="bg-white text-blue-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">Get Started</a>
          </div>

          {/* Premium Plan */}
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center w-full md:w-1/3 h-full">
            <div className="text-3xl font-semibold mb-4 flex items-center">
              <FaCheckCircle className="text-blue-700 mr-2" /> Premium Plan
            </div>
            <ul className="text-left space-y-2 mb-6 text-gray-700">
              <li>✓ Everything in Standard</li>
              <li>✓ E-commerce Functionality</li>
              <li>✓ Unlimited Pages</li>
              <li>✓ Priority Support</li>
              <li>✓ 6 Months Free Support</li>
            </ul>
            <div className="text-xl font-bold mb-4">Starting at $999</div>
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
