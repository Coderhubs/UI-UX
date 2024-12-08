import React from "react";
import Image from "next/image";
import { FaHeart, FaBell, FaCog, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 lg:px-0">


        {/* Left Section: Logo and Search Bar */}

        <div className="flex items-center space-x-12 top-40 left-60 py-4"> 

          {/* Logo */}
          <h1 className="text-blue-600 text-lg md:text-xl lg:text-2xl m-0 font-bold px-0">
            MORENT
          </h1>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 md:space-x-4 w-full sm:w-[300px] md:w-[492px]
           lg:w-[400px] h-8 bg-white rounded-[70px] border border-[#c3d4e9]/40 px-4 -mt-2">

            <FaSearch className="text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search something here"
              className="w-full bg-transparent outline-none text-gray-700 ml-2 placeholder-gray-400"
            />
            <Image
              src="/images/filter.jpg"
              alt="filter"
              width={24}
              height={24}
              className="hidden md:block"
            />
          </div>
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Heart Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaHeart className="text-gray-500 w-4 h-4" />
          </div>

          {/* Bell Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative">
            <FaBell className="text-gray-500 w-4 h-4" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </div>

          {/* Settings Icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaCog className="text-gray-500 w-4 h-4" />
          </div>

          {/* Profile Picture */}
          <img
            src="./images/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
