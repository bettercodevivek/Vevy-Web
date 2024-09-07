import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showPromptNav, setShowPromptNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowPromptNav(true);
      } else {
        setShowPromptNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-black text-white shadow-lg sticky w-full z-50 top-0 left-0 xs:pr-8 md:px-8 lg:px-16">
      <div className="container mx-auto xs:px-4 md:px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex flex-row items-center justify-start xs:gap-2 gap-4 sm:gap-4'>
          <img className='invert xs:h-8 xs:w-8 sm:h-8 sm:w-8' src='/logo.png' alt='logo' />
          {!showPromptNav && (
            <p id='logoname' className="font-normal xs:text-sm sm:text-xl sm:font-bold font-mono">
              Vevy Web Solutions
            </p>
          )}
        </div>
       
        {/* Get Started Button */}
        {showPromptNav && (
          <div id='promptnav' className='sm:hidden bg-white text-black p-2 rounded-full -mr-8'>
            <a href='tel:+918979145539' className='text-sm font-semibold'>
              Call Us Now!
            </a>
          </div>
        )}

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-white hover:text-blue-600 font-medium">
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
