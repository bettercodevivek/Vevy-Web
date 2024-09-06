
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg sticky w-full z-50 top-0 left-0 px-24">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
       <div>
        <p className='tracking-wider text-2xl font-bold'>VWS</p>
        <p className='font-normal text-sm'>Vevy Web Solutions</p>
       </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#Home" className="text-white hover:text-blue-600 font-medium">
            Home
          </a>
          <a href="#Services" className="text-white hover:text-blue-600 font-medium">
            Our Services
          </a>
          <a href="#Technology" className="text-white hover:text-blue-600 font-medium">
            Our Technology
          </a>
          <a href="#Testimonials" className="text-white hover:text-blue-600 font-medium">
            Our Testimonials
          </a>
          <a href="#Contact" className="text-white hover:text-blue-600 font-medium">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;