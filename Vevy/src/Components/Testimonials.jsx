// src/Testimonials.jsx

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      title: "Founder, Tech Innovators",
      quote: "Webify transformed our website into a modern, responsive platform. Their attention to detail and customer support are top-notch!",
      image: "https://via.placeholder.com/150" // Replace with real images
    },
    {
      name: "Priya Singh",
      title: "Owner, Boutique Bliss",
      quote: "Thanks to Webify, our online store looks amazing and functions flawlessly. The team exceeded our expectations!",
      image: "https://via.placeholder.com/150" // Replace with real images
    },
    {
      name: "Ravi Verma",
      title: "CEO, Startup Spark",
      quote: "The Webify team delivered exactly what we needed. Our site is faster, more engaging, and we're seeing more conversions than ever before.",
      image: "https://via.placeholder.com/150" // Replace with real images
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">What Our Clients Say</h1>
        
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-xl rounded-lg p-8 max-w-md mx-auto md:mx-0 transition-transform transform hover:scale-105">
              <div className="text-center">
                <img
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-700"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-blue-700 font-medium mb-4">{testimonial.title}</p>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
