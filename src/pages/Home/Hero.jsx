import React from 'react';
import bannerImg from '../../assets/banner.png';
import { FaSearch } from 'react-icons/fa';
import TooltipButton from "../../components/TooltipButton";


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
          <p className="text-2xl font-normal lg:w-1/2 mx-auto">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>

          {/* Search field with input and icon */}
          <div className="relative inline-block z-30">
            <input
              type="text"
              placeholder="Search furniture"
              className="w-full md:w-80 px-6 py-2  bg-white/25 rounded-full border border-gray-300 text-white focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-amber-500 rounded-full cursor-pointer">
              <FaSearch className="text-white " />
            </div>
          </div>
        </div>

        {/* Button blur effet*/}
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-top from-white via-transparent to-transparent blur-sm"></div>

        {/* Hover button for displaying tooltip box */}

        {/* <BasicToolTip/> */}
        <div className="hidden xl:block absolute bottom-40 left-24">
          <TooltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute bottom-52 left-96">
          <TooltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute bottom-24 right-[820px]">
          <TooltipButton position="bottom" />
        </div>
        <div className="hidden xl:block absolute bottom-12 right-16">
          <TooltipButton position="bottom" />
        </div>

        {/* dark and light mode */}
        {/* <div className="absolute bottom-16 right-16 z-40">
          <button
            onClick={toggleTheme}
            className="focus:outline-none font-bold text-lg bg-black text-white p-5 rounded-full "
          >
            {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
          </button>
        </div> */}
      </section>
    );
};

export default Hero;