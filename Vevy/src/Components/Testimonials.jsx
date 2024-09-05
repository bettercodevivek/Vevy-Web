// src/Testimonials.jsx

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "LHD Human Care PVT LTD",
      title: "Pharmaceutical Company, Meerut",
      quote: "We're thrilled with the website Vevy Web Solutions created for us. They made the whole process easy and enjoyable, listening closely to our needs and delivering a site that looks great and functions flawlessly. Their expertise in modern web technologies really shines through. We’re excited about the positive feedback we've received and couldn’t be happier with their work. Highly recommend them for anyone looking to elevate their online presence!",
      image: "https://i.postimg.cc/Y0S5LMn7/LHD-Human-Care-Logo-1.png"
    },
    {
      name: "JBANS ICU CARE PVT LTD",
      title: "Pharmaceutical Company, Delhi",
      quote: "Vevy Web Solutions did an outstanding job on our new website. They understood exactly what we wanted and delivered a clean, modern design that’s easy to navigate. Their attention to detail and professionalism were impressive, and they made sure everything was perfect before launch. We've already noticed an increase in engagement and positive feedback. I’d definitely recommend them to anyone looking for a top-quality web design service!",
      image: "https://i.postimg.cc/4NBTDjyB/IMG-20240619-WA0009-1-removebg-preview-removebg-preview.webp"
    },
  ];

  return (
    <div id='Testimonials' className="text-black min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          What Our Clients Say
        </h1>

        <div className="flex flex-col px-48 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black border-solid border-4 border-black shadow-xl rounded-lg p-8 w-full "
            >
              <div className="text-center">
                <img
                  className="w-32 h-28 rounded-lg mx-auto mb-4 drop-shadow-xl"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <h3 className="text-lg sm:text-2xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p className="font-medium mb-4 text-sm lg:text-lg">{testimonial.title}</p>
                <p className="italic mb-4 text-sm lg:text-lg">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
