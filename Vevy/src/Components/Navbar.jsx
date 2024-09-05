// src/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-slate-300 to-slate-400 sticky w-full z-50 top-0 left-0 px-8">
      <div className="container mx-auto px-4 py-2 flex flex-col justify-center items-center gap-2">
        {/* Logo */}
        <div className="text-3xl font-bold font-sans tracking-wider flex flex-col items-center justify-center">
          <p>
            VWS
          </p>
          <p className='text-sm font-normal pl-1'>
            Vevy Web Solutions
          </p>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-12 text-lg font-semibold">
  <a href="#Home" className="text-black hover:text-blue-600 hover:underline hover:decoration-1 hover:underline-offset-4">
    HOME
  </a>
  <a href="#Services" className="text-black hover:text-blue-600 hover:underline hover:decoration-1 hover:underline-offset-4">
    OUR SERVICES
  </a>
  <a href="#Technology" className="text-black hover:text-blue-600 hover:underline hover:decoration-1 hover:underline-offset-4">
    OUR TECHNOLOGY
  </a>
  <a href="#Testimonials" className="text-black hover:text-blue-600 hover:underline hover:decoration-1 hover:underline-offset-4">
    OUR TESTIMONIALS
  </a>
  <a href="#Contact" className="text-black hover:text-blue-600 hover:underline hover:decoration-1 hover:underline-offset-4">
    CONTACT US
  </a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
