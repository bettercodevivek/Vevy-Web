// src/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg sticky w-full z-50 top-0 left-0 px-24">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">
            Vevy Web Solutions
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Our Services
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">
            Our Technology
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
            Our Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
