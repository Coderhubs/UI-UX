import React from "react";
import Image from "next/image";
import { FaHeart, FaBell, FaCog, FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10">
        {/* Logo Section */}
        <h1 className="text-blue-600 text-lg md:text-xl lg:text-2xl font-bold">
          MORENT
        </h1>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center w-full max-w-md h-10 bg-white rounded-[70px] border border-[#c3d4e9]/40 px-4 mx-4">
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

        {/* Profile Icon */}
        <div className="flex items-center">
          {/* Hidden Icons for Larger Screens */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaHeart className="text-gray-500 w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative">
              <FaBell className="text-gray-500 w-4 h-4" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            </div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <FaCog className="text-gray-500 w-4 h-4" />
            </div>
          </div>

          {/* Profile Image */}
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ml-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
