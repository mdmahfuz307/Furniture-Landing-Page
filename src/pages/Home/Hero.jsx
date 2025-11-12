import React from 'react';
import bannerImg from '../../assets/banner.png';

const Hero = () => {
    return (
      <section
        className="h-screen relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="md:pt-44 px-2 pt-24 text-center space-y-6 md:w-1/2 mx-auto">
          <h1 className="text-4xl lg:text-6xl font-medium lg:leading-tight leading-snug">
            Make your interior more minimalistic & modern
          </h1>
          <p className='text-2xl font-normal lg:w-1/2 mx-auto'>
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>


          {/* Search Field */}
          <div>
            <input
              type="text"
              placeholder="Search furniture"
              className="px-4 py-3 rounded-l-full text-black w-2/3 md:w-1/2 focus:outline-none"
            />
            <button className="bg-orange-500 px-6 py-3 rounded-r-full hover:bg-orange-600 transition duration-300">
              Search
            </button>
          </div>
        </div>
      </section>
    );
};

export default Hero;