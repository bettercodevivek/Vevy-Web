import React, { useState } from 'react';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-slate-100 sticky top-0 left-0 z-10 bg-opacity-40 backdrop-blur-xl shadow-lg font-mono">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side: Logo and Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/website-svgrepo-com.svg" alt="Logo" />
            <span className="ml-3 text-xl font-bold text-gray-800">BCV Web Solutions</span>
          </div>
          
          {/* Right side: Navigation Links */}
          <div className="hidden md:flex space-x-4 text-black text-lg">
            <a href="#" className=" px-3 py-2 rounded-md  font-medium">Home</a>
            <a href="#" className=" px-3 py-2 rounded-md  font-medium">Our Work</a>
            <a href="#" className=" px-3 py-2 rounded-md  font-medium">Our Services</a>
            <a href="#" className=" px-3 py-2 rounded-md  font-medium">Testimonials</a>
            <a href="#" className=" px-3 py-2 rounded-md  font-medium">Contact Us</a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 bg-gray-800 md:hidden`}>
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="text-white"
            onClick={toggleSidebar}
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-8 space-y-2 px-4">
          <a href="#" className="block text-white text-lg font-medium hover:text-gray-300">Home</a>
          <a href="#" className="block text-white text-lg font-medium hover:text-gray-300">About</a>
          <a href="#" className="block text-white text-lg font-medium hover:text-gray-300">Services</a>
          <a href="#" className="block text-white text-lg font-medium hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
