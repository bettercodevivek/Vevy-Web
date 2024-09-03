import React from 'react';
import {  FaLock } from 'react-icons/fa';
const LandingPage = () => {
  return (
    <div className=" min-h-screen flex flex-col relative z-0 font-mono">
      {/* Hero Section */}
      <header className="bg-blue-700 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Get Professional Websites at Prices That Won’t Break the Bank.</h1>
        <p className="text-2xl mb-8">Affordable, Effective, and Ready to Launch Your Business Online.</p>
        <a href="#video" className="bg-white text-blue-700 px-8 py-4 rounded-full border-2 border-solid border-white text-lg font-semibold hover:bg-blue-700 hover:text-white">Get Started</a>
      </header>

      {/* Video Section */}
      <section id="video" className=" bg-blue-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8 text-white">See Our Work | Quality Websites, Real Results</h2>
          <div>
          <div className='flex items-center bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-xl gap-2 p-4 w-max m-4 ml-32 hover:text-white hover:cursor-pointer'>
            <FaLock></FaLock>
           <a href='https://lhdhumancare.com/'> https://lhdhumancare.com/ </a>
          </div>
          <div className="flex justify-center items-center space-x-8">
            <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg shadow-xl rounded-xl flex-shrink-0 w-full md:w-3/4 lg:w-2/3">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                  <source src="/Demo_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg rounded-xl shadow-xl flex-shrink-0">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="h-96 object-cover rounded-lg">
                  <source src="/Demo_web_mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
          
          </div>
          
          <div className='pt-12 pb-12'>
          <div className='flex items-center bg-white bg-opacity-30 backdrop-blur-lg shadow-xl rounded-xl gap-2 p-4 w-max my-4 relative left-3/4 -ml-8 hover:text-white hover:cursor-pointer'>
            <FaLock></FaLock>
           <a href='https://jbansicucare.com/'> https://jbansicucare.com/</a>
          </div>
          <div className="flex justify-center items-center space-x-8">
          <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg rounded-xl shadow-xl flex-shrink-0">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="h-96 object-cover rounded-lg">
                  <source src="/Demo_mobile_2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="bg-white bg-opacity-30 p-4 backdrop-blur-lg shadow-xl rounded-xl flex-shrink-0 w-full md:w-3/4 lg:w-2/3">
              <div className="relative pb-9/16">
                <video autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                  <source src="/Demo2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
