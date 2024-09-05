// src/ContactUs.jsx

import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-400  min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-5xl font-bold text-center text-white mb-8">Contact Us</h1>
        <p className="text-xl text-center text-gray-200 mb-12">
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

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-4"><strong>Email:</strong> <a href="mailto:info@webify.com" className="text-blue-500 hover:underline">info@webify.com</a></p>
            <p className="text-gray-700 mb-4"><strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
            <p className="text-gray-700 mb-4"><strong>Instagram:</strong> <a href="https://www.instagram.com/webify" className="text-blue-500 hover:underline">instagram.com/webify</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
