// src/LandingPage.jsx

import React from 'react';
import { FaLock, FaWhatsapp } from 'react-icons/fa';

const LandingPage = () => {
 


  return (
    <div id='Home' className="min-h-screen-2xl relative z-0 font-sans">
      <section className="bg-gradient-to-r from-slate-300 to-slate-300 text-center py-16 px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 text-black">
          Get Professional Websites at Prices
          <br className="sm:hidden" /> {/* This line break ensures wrapping on smaller screens */}
          <div className='mt-2 xl:inline'>
            <span className="bg-black bg-opacity-90 text-white w-fit p-2 rounded-2xl lg:ml-2 sm:inline-block xl:inline mx-auto">
              That Won’t Break the Bank.
            </span>
          </div>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-black">
          Affordable, Effective, and Ready to Launch Your Business Online.
        </p>
     
        <a
          href="https://wa.me/+91" target='_blank'
          className="bg-white text-black px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 rounded-full border-2 border-solid border-white xs:text-sm text-lg md:text-2xl font-semibold hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
        >
          Get Your Free Quotation
          <FaWhatsapp className='inline xs:h-6 xs:w-6 sm:h-8 sm:w-8 pb-1 h-8 w-8 pl-2'></FaWhatsapp>
        </a>
       
      </section>

      {/* Video Section */}
      <section id="video" className="bg-gradient-to-r from-slate-300 to-slate-300">
        <div className="container mx-auto px-0 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-black">
            See Our Work | Quality Websites, Real Results
          </h2>
          <div>
            <div className="flex flex-row items-center justify-start xs:text-sm sm:text-sm lg:ml-16 lg:m-4 xl:ml-24 xl:m-4 2xl:ml-32 2xl:m-4">
              <div className="flex items-center bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-lg sm:rounded-xl gap-2 px-4 py-2 sm:px-4 sm:py-4 w-max hover:text-white hover:cursor-pointer">
                <FaLock />
                <a href="https://lhdhumancare.com/">https://lhdhumancare.com/</a>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start sm:items-center sm:justify-center sm:flex-row sm:space-x-8 mt-4 sm:mt-0">
              <div className="bg-white bg-opacity-30 p-2 sm:p-4 backdrop-blur-lg shadow-xl rounded-xl flex-shrink-0 w-full md:w-3/4 lg:w-2/3 mb-4 sm:mb-0">
                <div className="relative pb-9/16">
                 <img className='rounded-lg' src='/LhdScreenshot.webp'/>
                </div>
              </div>
     

              <div className="bg-white bg-opacity-30 p-2 sm:p-4 backdrop-blur-lg rounded-xl shadow-xl flex-shrink-0">
                <div className="relative pb-9/16">
                <video disablePictureInPicture disableRemotePlayback autoPlay loop muted className="xl:h-96 lg:h-80 md:h-72 sm:h-60 h-96 object-cover rounded-lg">
                    <source src="/Demo-lhd-mobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

             
            </div>
          </div>

          <div className="sm:py-12 xs:py-4">
            <div className="m-4 xs:-mb-4 sm:mb-4 xl:mr-24 lg:mr-16 2xl:mr-32 -mr-0.5 xs:text-sm sm:text-sm flex flex-row items-center justify-end">
              <div className="flex items-center bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-lg sm:rounded-xl gap-2 px-4 py-2 sm:px-4 sm:py-4 hover:text-white hover:cursor-pointer">
                <FaLock />
                <a href="https://jbansicucare.com/">https://jbansicucare.com/</a>
              </div>
            </div>

            <div className="flex flex-col-reverse items-end justify-end sm:items-center sm:justify-center gap-4 sm:gap-0 mt-8 sm:mt-0 sm:flex-row sm:space-x-8">
              
              <div className="bg-white bg-opacity-30 p-2 sm:p-4 backdrop-blur-lg rounded-xl shadow-xl flex-shrink-0 mb-8 sm:mb-0">
                <div className="relative pb-9/16">
                  <video disablePictureInPicture disableRemotePlayback autoPlay loop muted className="xl:h-96 lg:h-80 md:h-72 sm:h-60 h-96 object-cover rounded-lg">
                    <source src="/Demo_mobile_2.mp4" type="video/mp4" /> 
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              

              <div className="bg-white bg-opacity-30 p-2 sm:p-4 backdrop-blur-lg shadow-xl rounded-xl flex-shrink-0 w-full md:w-3/4 lg:w-2/3">
                <div className="relative pb-9/16">
                <img className='rounded-lg' src='/JbansScreenshot.webp'/>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default LandingPage;
