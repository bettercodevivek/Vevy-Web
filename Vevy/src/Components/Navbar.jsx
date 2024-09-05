// src/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg sticky w-full z-50 top-0 left-0 px-8">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold font-sans tracking-wider flex flex-col items-start">
          <a href="#">
            VWS
          </a>
          <p className='text-sm font-normal'>
            Vevy Web Solutions
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <a href="#home" className="text-black hover:text-blue-600 font-medium hover:underline hover:decoration-1 hover:underline-offset-4">
            Home
          </a>
          <a href="#services" className="text-black hover:text-blue-600 font-medium hover:underline hover:decoration-1 hover:underline-offset-4">
            Our Services
          </a>
          <a href="#services" className="text-black hover:text-blue-600 font-medium hover:underline hover:decoration-1 hover:underline-offset-4">
            Our Technology
          </a>
          <a href="#about" className="text-black hover:text-blue-600 font-medium hover:underline hover:decoration-1 hover:underline-offset-4">
            Our Testimonials
          </a>
          <a href="#contact" className="text-black hover:text-blue-600 font-medium hover:underline hover:decoration-1 hover:underline-offset-4">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
