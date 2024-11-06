import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div id='Contact' className="bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen xs:py-8 sm:py-0 xl:py-0 flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-black mb-6">Get in Touch</h1>
        <p className="text-xl md:text-2xl text-center text-black mb-12">
          Want us to create your website and elevate your digital presence?{' '}
          <span className="font-bold">Call us, ping us on WhatsApp, or fill out the form below.</span>
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Prompt to Google Form */}
          <div className="w-full lg:w-2/3 bg-white text-black shadow-lg rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              We're excited to work with you! Click the button below to tell us more about your project.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeavUOUXDDx7WTuY6nFJOwitIfaxul3uqrt5lWiz9KbYIw_oA/viewform?embedded=true" 
              target="_blank" 
              className="bg-black text-white font-bold py-3 px-6 rounded-full hover:bg-blue-500 transition">
              Fill Out the Form
            </a>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-black text-2xl" />
                <a href="mailto:vevywebsolutions@gmail.com" className="text-black hover:underline">
                  Mail Us
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-black text-2xl" />
                <a href="tel:+91xxxxxxxx" className="text-black hover:underline">
                  +91
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaInstagram className="text-black text-2xl" />
                <a href="https://www.instagram.com/vevywebsolutions" target="_blank" className="text-black hover:underline">
                  Follow us on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
