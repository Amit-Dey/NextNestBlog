import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-sky-600 to-indigo-700 text-white py-20 sm:py-24 lg:py-32 min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left Column - Text Content */}
        <div className="flex flex-col w-full md:w-3/5 lg:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-4 tracking-wide opacity-90">
            Explore insights, tutorials, and stories for curious minds like yours.
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
            Welcome To Sakura Dev Blog
          </h1>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">
            Join a community that thrives on learning, creating, and growing together.
          </p>
          {/* Optional: Add a call to action button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#latest-posts" // Link to your latest posts section
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-indigo-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
            >
              Start Reading
              <svg className="ml-2 -mr-0.5 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center md:justify-end">
          {/* Using a simple img tag as provided, but Next.js Image component is recommended for production */}
          <img
            src="/hero.png"
            alt="Hero section illustration"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* SVG Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Hero;

