// import React from "react";
// import { useNavigate } from "react-router-dom";
// import image from "../../assets/image.png";
// import iconimage from "../../assets/Iconemail.svg";
// import iconbell from "../../assets/Iconbell.svg";
// import usericon from "../../assets/Iconuser.svg";
// import { FaSearch } from "react-icons/fa";

// function Navbar() {
//   const navigate = useNavigate();

//   // Navigation Handlers
//   const goToMessages = () => navigate("/messages");
//   const goToNotifications = () => navigate("/notifications");

//   return (
//     <div className="bg-[#0d2539] border-b-4 border-[#F3C15F] px-6 md:px-[133px] py-4 flex items-center justify-between">
//       {/* Left: Logo and Search */}
//       <div className="flex items-center w-full md:w-auto justify-between">
//         {/* Search Icon for Mobile */}
//         <div className="block md:hidden">
//           <FaSearch className="w-6 h-6 text-white" />
//         </div>

//         {/* Logo */}
//         <div className="flex-grow md:flex-grow-0 flex justify-center md:justify-start">
//           <div className="w-[100px] h-[100px] flex items-center justify-center">
//             <img
//               className="w-full h-full object-contain"
//               src={image}
//               alt="Logo"
//             />
//           </div>
//         </div>

//         {/* Search Bar (visible on md and lg screens) */}
//         <div className="hidden md:block flex-grow md:max-w-[500px] lg:max-w-[800px] ml-4">
//           <input
//             type="text"
//             placeholder="Search for conventions, people, or games..."
//             className="w-full px-8 py-4 rounded-lg text-base border-b bg-[#102F47] border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400"
//           />
//         </div>
//       </div>

//       {/* Right: Icons and User Profile */}
//       <div className="flex items-center gap-4">
//         {/* Mail Icon */}
//         <div className="hidden lg:block relative cursor-pointer" onClick={goToMessages}>
//           <img
//             className="w-10 h-10 rounded-full bg-[#102F47] p-2"
//             src={iconimage}
//             alt="Mail"
//           />
//           <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
//             2
//           </span>
//         </div>

//         {/* Bell Icon */}
//         <div className="hidden lg:block cursor-pointer" onClick={goToNotifications}>
//           <img
//             className="w-10 h-9 rounded-full bg-[#102F47] p-2"
//             src={iconbell}
//             alt="Notifications"
//           />
//         </div>

//         {/* User Profile Icon */}
//         <div className="flex items-center bg-[#102F47] p-2 rounded-full">
//           <div className="hidden md:flex items-center ml-2 text-white">
//             <span className="mr-1">Helen</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-4 h-4"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </div>
//           <img
//             className="w-10 h-10 rounded-full"
//             src={usericon}
//             alt="User Profile"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/image.png";
import iconimage from "../../assets/Iconemail.svg";
import iconbell from "../../assets/Iconbell.svg";
import usericon from "../../assets/Iconuser.svg";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Navigation Handlers
  const goToMessages = () => navigate("/messages");
  const goToNotifications = () => navigate("/notifications");
  const goToSignup = () => navigate("/signup");
  const goToLogin = () => navigate("/login");

  return (
    <div className="bg-[#0d2539] border-b-4 border-[#F3C15F] px-6 md:px-[133px] py-4 flex items-center justify-between">
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
              className="w-full h-full object-contain"
              src={image}
              alt="Logo"
            />
          </div>
        </div>

        {/* Search Bar */}
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
        {/* Mail Icon */}
        <div className="hidden lg:block relative cursor-pointer" onClick={goToMessages}>
          <img
            className="w-10 h-10 rounded-full bg-[#102F47] p-2"
            src={iconimage}
            alt="Mail"
          />
          <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Bell Icon */}
        <div className="hidden lg:block cursor-pointer" onClick={goToNotifications}>
          <img
            className="w-10 h-9 rounded-full bg-[#102F47] p-2"
            src={iconbell}
            alt="Notifications"
          />
        </div>

        {/* User Profile with Name, Dropdown Arrow, and Icon */}
        <div className="relative flex items-center">
          <div
            className="flex items-center bg-[#102F47] p-2 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {/* User Name */}
            <span className="text-white mr-2 hidden md:flex">Helen</span>
            {/* Dropdown Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-white ml-2"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            {/* User Profile Icon */}
            <img
              className="w-10 h-10 rounded-full ml-2"
              src={usericon}
              alt="User Profile"
            />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-32 w-40 bg-white text-black rounded-lg shadow-lg">
              <button
                onClick={goToSignup}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Sign Up
              </button>
              <button
                onClick={goToLogin}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
