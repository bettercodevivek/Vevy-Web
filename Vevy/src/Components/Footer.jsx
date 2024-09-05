// src/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Company Description */}
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">Webify</h2>
          <p className="text-gray-400">Crafting exceptional websites with cutting-edge technology. Elevate your online presence with us.</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-4">
        <p>&copy; {new Date().getFullYear()} Webify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
