// src/Testimonials.jsx

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "LHD Human Care PVT LTD",
      title: "Pharmaceutical Company,Meerut",
      quote: "Webify transformed our website into a modern, responsive platform. Their attention to detail and customer support are top-notch!",
      image: "https://i.postimg.cc/Y0S5LMn7/LHD-Human-Care-Logo-1.png" // Replace with real images
    },
    {
      name: "JBANS ICU CARE PVT LTD",
      title: "Pharmaceutical Company,Delhi",
      quote: "Thanks to Webify, our online store looks amazing and functions flawlessly. The team exceeded our expectations!",
      image: "https://i.postimg.cc/4NBTDjyB/IMG-20240619-WA0009-1-removebg-preview-removebg-preview.webp" // Replace with real images
    },
    
  ];

  return (
    <div className="text-black min-h-screen bg-[#f3efe5] pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">What Our Clients Say</h1>
        
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-50 backdrop-blur-xl border-solid border-2 border-black shadow-xl rounded-lg p-8 max-w-md mx-auto md:mx-0 transition-transform transform hover:scale-105">
              <div className="text-center">
                <img
                  className="w-32 h-28 rounded-lg mx-auto mb-4 drop-shadow-xl"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="font-medium mb-4">{testimonial.title}</p>
                <p className=" italic mb-4">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
