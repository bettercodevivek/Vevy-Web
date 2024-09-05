// src/ContactUs.jsx

import React from 'react';

import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div id='Contact' className="bg-gradient-to-r from-slate-300 to-slate-400  min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold text-center text-black mb-8">Contact Us</h1>
        <p className="text-xl text-center text-black mb-12">
          We’d love to hear from you! Fill out the form below or reach out to us via email or phone.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Google Form Embed */}
          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScTcog-dBxjfjKLNWez5rdDzDBH7bhdtLtOYV66Yw9-ZMS3xw/viewform?usp=sf_link"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg"
              title="Contact Form"
            >
              Loading…
            </iframe>
          </div>

<div className="w-full lg:w-1/3 mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-4 text-sm">
  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
  <div className="flex items-center mb-3">
    <FaEnvelope className="text-blue-500 mr-2" />
    <a href="mailto:info@webify.com" className="text-gray-700 hover:underline">info@webify.com</a>
  </div>
  <div className="flex items-center mb-3">
    <FaPhone className="text-blue-500 mr-2" />
    <a href="tel:+1234567890" className="text-gray-700 hover:underline">+1 (234) 567-890</a>
  </div>
  <div className="flex items-center">
    <FaInstagram className="text-blue-500 mr-2" />
    <a href="https://www.instagram.com/webify" className="text-gray-700 hover:underline">instagram.com/webify</a>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
