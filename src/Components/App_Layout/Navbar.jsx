import React from "react";
import image from "../../assets/image.png";
import iconimage from "../../assets/Iconemail.svg";
import iconbell from "../../assets/Iconbell.svg";
import usericon from "../../assets/Iconuser.svg";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className="bg-[#0d2539] px-6 md:px-[133px] py-4 flex items-center justify-between">
      {/* Left: Logo and Search */}
      <div className="flex items-center w-full md:w-auto justify-between">
        {/* Search Icon for Mobile */}
        <div className="block md:hidden">
          <FaSearch className="w-6 h-6 text-white" />
        </div>

        {/* Logo */}
        <div className="flex-grow md:flex-grow-0 flex justify-center md:justify-start">
          <div className="w-[100px] h-[100px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain" // Ensures the image scales properly within the container
              src={image} // Replace with your logo path
              alt="Logo"
            />
          </div>
        </div>

        {/* Search Bar (visible on md and lg screens) */}
        <div className="hidden md:block flex-grow md:max-w-[500px] lg:max-w-[800px] ml-4">
          <input
            type="text"
            placeholder="Search for conventions, people, or games..."
            className="w-full px-8 py-4 rounded-lg text-base border-b bg-[#102F47] border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right: Icons and User Profile */}
      <div className="flex items-center gap-4">
        {/* Mail Icon (hidden on md and sm screens) */}
        <div className="hidden lg:block relative">
          <img
            className="w-10 h-10 rounded-full bg-[#102F47] p-2"
            src={iconimage} // Replace with your mail icon path
            alt="Mail"
          />
          <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Bell Icon (hidden on md and sm screens) */}
        <div className="hidden lg:block">
          <img
            className="w-10 h-9 rounded-full bg-[#102F47] p-2"
            src={iconbell} // Replace with your bell icon path
            alt="Notifications"
          />
        </div>

        {/* User Profile Icon with Name and Dropdown */}
        <div className="flex items-center bg-[#102F47] p-2 rounded-full">
          {/* Username and Dropdown Arrow (hidden on small screens) */}
          <div className="hidden md:flex items-center ml-2 text-white">
            <span className="mr-1">Helen</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <img
            className="w-10 h-10 rounded-full"
            src={usericon} // Replace with your user icon path
            alt="User Profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
