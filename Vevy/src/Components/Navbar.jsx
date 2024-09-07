import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg sticky w-full z-50 top-0 left-0 xs:pr-8  md:px-8 lg:px-16">
      <div className="container mx-auto md:px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex flex-row items-center justify-start xs:gap-2 gap-4 sm:gap-4'>
      <img className='invert xs:h-12 xs:w-12' src='/logo.png'/>
          
          <p className="font-normal text-lg xs:text-md sm:text-lg">Vevy Web Solutions</p>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
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
