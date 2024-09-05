// src/ContactUs.jsx

import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-400  min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-black mb-6">Get in Touch</h1>
        <p className="text-xl text-center text-black mb-12">
          Want us to create your website and elevate your digital presence, call us, ping us on whatsapp or fill the form below.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col items-center justify-center gap-8">
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
                <FaEnvelope className="text-black text-2xl" />
                <a href="mailto:info@webify.com" className="text-black hover:underline">info@webify.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-black text-2xl" />
                <a href="tel:+1234567890" className="text-black hover:underline">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center space-x-3">
                <FaInstagram className="text-black text-2xl" />
                <a href="https://www.instagram.com/webify" className="text-black hover:underline">Follow us on Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
