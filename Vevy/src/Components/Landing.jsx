// src/LandingPage.jsx

import React from 'react';
import { FaLock, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const LandingPage = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+918979145539'; // Replace with your phone number
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/+918979145539', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div id='Home' className="min-h-screen-2xl relative z-0 font-sans">
      <section className="bg-gradient-to-r from-slate-300 to-slate-400 text-center py-16 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 text-black">
          Get Professional Websites at Prices
          <br className="sm:hidden" /> {/* This line break ensures wrapping on smaller screens */}
          <div className='mt-2 xl:inline'>
            <span className="bg-black bg-opacity-90 text-white w-fit p-2 rounded-2xl sm:inline-block xl:inline mx-auto">
              That Won’t Break the Bank.
            </span>
          </div>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-black">
          Affordable, Effective, and Ready to Launch Your Business Online.
        </p>
     
        <a
          href="https://wa.me/+918979145539" target='_blank'
          className="bg-white text-black px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-full border-2 border-solid border-white text-xl md:text-2xl font-semibold hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
        >
          Get Your Free Quotation
          <FaWhatsapp className='inline pb-1 h-8 w-8 pl-2'></FaWhatsapp>
        </a>
       
      </section>

      {/* Video Section */}
      <section id="video" className="bg-gradient-to-r from-slate-300 to-slate-400">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-black">
            See Our Work | Quality Websites, Real Results
          </h2>
          <div>
            <div className="flex flex-row items-center justify-start lg:ml-16 lg:m-4 xl:ml-24 xl:m-4 2xl:ml-32 2xl:m-4">
              <div className="flex items-center bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-xl gap-2 p-4 w-max hover:text-white hover:cursor-pointer">
                <FaLock />
                <a href="https://lhdhumancare.com/">https://lhdhumancare.com/</a>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start sm:items-center sm:justify-center sm:flex-row sm:space-x-8 mt-8 sm:mt-0">
              <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg shadow-xl rounded-xl flex-shrink-0 w-full md:w-3/4 lg:w-2/3 mb-8 sm:mb-0">
                <div className="relative pb-9/16">
                  <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                    <source src="/Demo_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
     

              <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg rounded-xl shadow-xl flex-shrink-0">
                <div className="relative pb-9/16">
                  <video autoPlay loop muted className="xl:h-96 lg:h-80 md:h-72 sm:h-60 h-96 object-cover rounded-lg">
                    <source src="/Demo_web_mobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

             
            </div>
          </div>

          <div className="pt-12 pb-12">
            <div className="m-4 xl:mr-24 lg:mr-16 2xl:mr-32 -mr-0.5 flex flex-row justify-end">
              <div className="flex items-center bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-xl gap-2 p-4 hover:text-white hover:cursor-pointer">
                <FaLock />
                <a href="https://jbansicucare.com/">https://jbansicucare.com/</a>
              </div>
            </div>

            <div className="flex flex-col-reverse items-end justify-end sm:items-center sm:justify-center gap-8 sm:gap-0 mt-8 sm:mt-0 sm:flex-row sm:space-x-8">
              


              <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg rounded-xl shadow-xl flex-shrink-0 mb-8 sm:mb-0">
                <div className="relative pb-9/16">
                  <video autoPlay loop muted className="xl:h-96 lg:h-80 md:h-72 sm:h-60 h-96 object-cover rounded-lg">
                    <source src="/Demo_mobile_2.mp4" type="video/mp4" /> 
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              

              <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg shadow-xl rounded-xl flex-shrink-0 w-full md:w-3/4 lg:w-2/3">
                <div className="relative pb-9/16">
                  <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                    <source src="/Demo2New.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-4 z-50">
        <button
          onClick={handleCallClick}
          className="bg-black p-4 rounded-full text-white shadow-lg hover:bg-green-500 transition-colors duration-300"
        >
          <FaPhoneAlt className="text-2xl" />
        </button>
        <button
          onClick={handleWhatsappClick}
          className="bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-black transition-colors duration-300"
        >
          <FaWhatsapp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
