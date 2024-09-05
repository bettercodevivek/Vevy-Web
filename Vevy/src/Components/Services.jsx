// src/ServicesPage.jsx

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$299',
      features: [
        'Responsive Design',
        'Basic SEO Optimization',
        '3 Pages',
        'Contact Form',
        '1 Month Free Support',
      ],
      popular: false,
    },
    {
      title: 'Standard Plan',
      price: '$499',
      features: [
        'Everything in Basic',
        '5 Pages',
        'Advanced SEO Optimization',
        'Custom Features',
        '3 Months Free Support',
      ],
      popular: true, // Highlight this plan
    },
    {
      title: 'Premium Plan',
      price: '$999',
      features: [
        'Everything in Standard',
        'Unlimited Pages',
        'E-Commerce Integration',
        'Priority Support',
        '6 Months Free Support',
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col bg-white shadow-lg rounded-lg p-6 w-full max-w-sm ${
                plan.popular ? 'border-4 border-black' : ''
              }`}
            >
              <div className="text-center mb-4">
                <FaCheckCircle className="text-black inline-block mb-2" size={32} />
                <h2 className="text-2xl font-semibold">
                  {plan.title}
                </h2>
                {plan.popular && (
                  <span className="inline-block mt-2 text-sm text-white bg-black px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-center text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheckCircle className="text-black mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-auto bg-black text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
