import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-xl p-4 w-full z-50 shadow-md overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center">
          <img src="logo.png" alt="Company Logo" className="h-10 mr-2" />
          <span className="text-gray-800 text-lg font-semibold">Company Name</span>
        </div>

        {/* Nav Links (Hidden on small screens) */}
        <ul className="hidden md:flex space-x-6 text-gray-800">
          <li><a href="#home" className="hover:text-gray-600">Home</a></li>
          <li><a href="#about" className="hover:text-gray-600">About</a></li>
          <li><a href="#services" className="hover:text-gray-600">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
        </ul>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-800">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-1/2 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start mt-20 px-6">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <li
              key={item}
              className="transform transition-transform duration-500 ease-out"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                transitionDelay: `${index * 100}ms`, // Stagger effect
              }}
            >
              <a href={`#${item.toLowerCase()}`} onClick={toggleSidebar}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
