// src/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaServices, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${scrolled ? 'transform -translate-y-16' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Nav Links */}
        <div className={`flex space-x-6 ${scrolled ? 'hidden' : 'flex'}`}>
          <Link to="/" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
            <FaInfoCircle size={20} />
            <span>About</span>
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
            <FaServices size={20} />
            <span>Services</span>
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500 flex items-center space-x-2">
            <FaEnvelope size={20} />
            <span>Contact</span>
          </Link>
        </div>

        {/* Logo */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Webify</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
