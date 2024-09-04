import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sticky top-0 bg-white bg-opacity-30 backdrop-blur-lg w-full z-10 font-mono">
      
      {/* Navbar for larger screens */}
      <nav className="hidden md:flex w-full flex-row items-center justify-between text-lg leading-8 py-4 px-4 md:px-8">
        <div className="flex items-center gap-4">
          <img className="h-10 md:h-12" src="/website-svgrepo-com.svg" alt="Logo" />
          <h1 className="font-semibold text-sm md:text-lg">VEVY WEB SOLUTIONS</h1>
        </div>
        <div className="flex flex-row items-center justify-end gap-8">
          <a href="#" className="text-sm md:text-base hover:text-blue-500 transition">Home</a>
          <a href="#" className="text-sm md:text-base hover:text-blue-500 transition">Our Services</a>
          <a href="#" className="text-sm md:text-base hover:text-blue-500 transition">Our Work</a>
          <a href="#" className="text-sm md:text-base hover:text-blue-500 transition">Testimonials</a>
          <a href="#" className="text-sm md:text-base hover:text-blue-500 transition">Contact Us</a>
        </div>
      </nav>

      {/* Hamburger Icon for mobile screens */}
      <div className="flex md:hidden items-center justify-between p-4">
        <img className="h-10" src="/website-svgrepo-com.svg" alt="Logo" />
        <button onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-start p-4 space-y-6">
          <button onClick={toggleSidebar} className="self-end">
            <FaTimes className="text-2xl" />
          </button>
          <a href="#" className="text-lg font-semibold hover:text-blue-500 transition">Home</a>
          <a href="#" className="text-lg font-semibold hover:text-blue-500 transition">Our Services</a>
          <a href="#" className="text-lg font-semibold hover:text-blue-500 transition">Our Work</a>
          <a href="#" className="text-lg font-semibold hover:text-blue-500 transition">Testimonials</a>
          <a href="#" className="text-lg font-semibold hover:text-blue-500 transition">Contact Us</a>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
