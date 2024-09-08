import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '₹ 8,000',
      message: 'One Time Payment Only',
      features: [
        'Unlimited Pages website (on scrolling)',
        'Top Ranked Website on all Search Engines',
        'Custom Design of your choice',
        'Free Updations and Modifications',
        'Fast Loading time',
      ],
      popular: false,
    },
    {
      title: 'Standard Plan',
      price: '₹ 14,000',
      message: 'One Time Payment Only',
      features: [
        'Everything in Basic',
        'Unlimited linked Pages for website',
        'Top Ranked Website on all Search Engines',
        'Custom Design of your choice',
        'Free Support after hosting',
      ],
      popular: true, // Highlight this plan
    },
    {
      title: 'Premium Plan',
      price: '₹ 20,000',
      message: 'One Time Payment Only',
      features: [
        'Everything in Standard',
        'E-Commerce Website',
        'Website with server',
        'Free Priority Support',
        'Top Ranked Website on all Search Engines',
      ],
      popular: false,
    },
  ];

  return (
    <div id='Services' className="bg-gray-100 py-16">
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
              <div className="text-center mb-2">
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
              <p className="text-center xs:text-2xl text-4xl font-bold sm:mb-6 mb-2">{plan.price}</p>
              <p className="text-center text-sm sm:text-lg font-normal sm:mb-6 mb-2">{plan.message}</p>
              <ul className="space-y-3 mb-4 text-sm font-semibold sm:text-lg sm:mb-6">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
                  >
                    <FaCheckCircle className="text-black mr-2 hidden sm:flex" /> 
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/+918979145539" target='_blank'
                className="mt-auto bg-black text-white text-center py-3 text-xs sm:text-sm rounded-lg font-semibold hover:bg-blue-700 hover:cursor-pointer"
              >
                Get Your Free Quotation
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
