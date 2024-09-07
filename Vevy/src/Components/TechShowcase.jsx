import React from 'react';


const TechShowcase = () => {
  return (
    <div id='Technology' className="relative -z-10 bg-gradient-to-r from-slate-300 to-slate-400 min-h-screen pt-8 pb-4 px-6 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Heading Section */}
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-black">WHY CHOOSE US</h1>
        <p className="text-md sm:text-xl lg:text-2xl text-center text-black mb-8 sm:mb-10 lg:mb-12">
        <span className='font-bold text-lg sm:text-3xl'>Affordable, Custom Websites That Work for Your Business</span><br/>
        We understand small businesses because we are one. Get a professional website that drives results without breaking the bank. No templates, no shortcuts—just a site built specifically for you, ready to bring in more customers."
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* Video Section */}
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <div className="bg-white bg-opacity-40 backdrop-blur-xl p-2 shadow-xl rounded-lg overflow-hidden w-full mb-4 lg:mb-0">
              <div className="relative pb-9/16">
                <video disablePictureInPicture autoPlay loop muted className="w-full h-full object-cover rounded-lg">
                  <source src="/Coding-Demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Technology Logos Section */}
            <div className="flex flex-col justify-center items-center flex-wrap mt-4 p-4">
              
              <div className='flex flex-row items-center justify-center gap-4'>
                  <img src='/react-svgrepo-com.svg' className='h-12 w-12 sm:h-16 sm:w-16 aspect-square'/>
                  <img src='/node-js-svgrepo-com.svg' className='h-12 w-12 sm:h-16 sm:w-16 aspect-square'/>
                  <img src='/tailwind-css-svgrepo-com.svg' className='h-12 w-12 sm:h-16 sm:w-16  aspect-square'/>
                  <img src='/next-js-svgrepo-com.svg' className='h-12 w-12 sm:h-16 sm:w-16  aspect-square'/>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            {/* Custom-Coded Websites */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg p-6 sm:p-8">
              <h2 className="text-lg sm:text-2xl font-semibold text-center mb-4 text-black">Custom-Coded Websites</h2>
              <ul className="text-left mb-6 space-y-2 text-black text-sm sm:text-lg">
                <li>✓ Built using the latest tech stack (React, Node.js, etc.)</li>
                <li>✓ High performance and fast load times</li>
                <li>✓ Fully customizable to your needs</li>
                <li>✓ Scalable for future growth</li>
                <li>✓ SEO-friendly and optimized for search engines</li>
              </ul>
            </div>

            {/* No-Code Websites */}
            <div className="bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-lg p-6 sm:p-8 ">
              <h2 className="text-lg sm:text-2xl font-semibold text-center mb-4 text-black">No-Code Websites</h2>
              <ul className="text-left mb-6 space-y-2 text-black text-sm sm:text-lg">
                <li>✗ Limited customization options</li>
                <li>✗ May suffer from performance issues</li>
                <li>✗ Often lack scalability</li>
                <li>✗ Can be difficult to optimize for SEO</li>
                <li>✗ Dependence on third-party platforms</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TechShowcase;
