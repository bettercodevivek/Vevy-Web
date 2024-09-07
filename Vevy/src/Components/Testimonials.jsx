import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: 'LHD Human Care',
    title: 'Pharmaceutical Company, New Delhi',
    testimonial: 'exceeded our expectations with the website they developed for us. The entire process was seamless and well-coordinated, with their team paying meticulous attention to our requirements. They delivered a website that not only looks exceptional but also performs flawlessly. Their proficiency in modern web technologies is evident, and we’ve already received significant positive feedback.',
    image: 'https://i.postimg.cc/Y0S5LMn7/LHD-Human-Care-Logo-1.png',
    website: 'https://www.lhdhumancare.com', 
  },
  {
    name: 'JBANS ICU CARE PVT. LTD.',
    title: 'Pharmaceutical Company, New Delhi',
    testimonial: 'did an outstanding job on our new website. They understood exactly what we wanted and delivered a clean, modern design that’s easy to navigate. Their attention to detail and professionalism were impressive, and they made sure everything was perfect before launch. We have already noticed an increase in engagement and positive feedback.',
    image: 'https://i.postimg.cc/4NBTDjyB/IMG-20240619-WA0009-1-removebg-preview-removebg-preview.webp',
    website: 'https://www.jbansicucare.com', 
  },
];

const TestimonialsPage = () => {
  return (
    <section id='Testimonials' className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 md:py-8 xl:py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-12 relative -top-8 text-center">Hear from Our Clients</h2>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-black"></div>
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
            >
              <div
                className={`flex items-center space-x-4 ${
                  index % 2 === 0 ? 'text-left pl-2 sm:pl-8' : 'text-right flex-row-reverse space-x-reverse pr-2 sm:pr-8'
                }`}
              >
                <img
                  className="w-28 h-24 rounded-lg border-2 border-black"
                  src={testimonial.image}
                  alt={`${testimonial.name} logo`}
                />
                <div className="bg-white border-solid border-2 border-black shadow-lg rounded-lg p-6 max-w-md">
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{testimonial.title}</p>
                  <p className="text-gray-700 text-xs sm:text-lg italic">
                    <span className="font-semibold">Vevy Web Solutions</span> {testimonial.testimonial}
                  </p>
                  <div className="mt-4 text-blue-500 text-xs sm:text-lg hover:text-blue-600">
                    <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                      <span>Check their website</span>
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
