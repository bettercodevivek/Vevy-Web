import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Company Name */}
        <h2 className="text-2xl font-bold mb-2">VWS</h2>
        
        {/* Copyright */}
        <p className="text-gray-400 text-sm mb-4">
          &copy; {new Date().getFullYear()} Vevy Web Solutions. All rights reserved.
        </p>
        
        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
