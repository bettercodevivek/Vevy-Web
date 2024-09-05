// src/ContactUs.jsx

import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-600 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-white mb-6">Get in Touch</h1>
        <p className="text-xl text-center text-gray-200 mb-12">
          We’re here to help! Fill out the form below or reach out to us through the details provided.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Google Form Embed */}
          <div className="w-full lg:w-2/3 bg-white shadow-lg rounded-lg p-6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScTcog-dBxjfjKLNWez5rdDzDBH7bhdtLtOYV66Yw9-ZMS3xw/viewform?usp=sf_link"
              width="100%"
              height="600"
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
          <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <a href="mailto:info@webify.com" className="text-blue-500 hover:underline">info@webify.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
                <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaInstagram className="text-blue-600 text-2xl" />
                <a href="https://www.instagram.com/webify" className="text-blue-500 hover:underline">Follow us on Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
