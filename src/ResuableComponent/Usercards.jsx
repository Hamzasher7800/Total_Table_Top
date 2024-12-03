import React from "react";
function UserCards({ userImage, name, username }) {
  return (
    <div className="flex flex-col items-center bg-[#0D2539] text-white p-6   w-full">
      {/* User Image */}
      <img
        src={userImage}
        alt={name}
        className="sm:w-18 sm:w-18 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#F77F02] mb-4"
      />

      {/* User Name */}
      <h2 className="text-lg font-bold">{name}</h2>

      {/* Username */}
      <p className="text-sm text-gray-400">@{username}</p>

      {/* Icons */}
      <div className="flex gap-1 mt-4">
        {/* User Icon */}
        <button className="flex items-center justify-center w-10 h-10  text-white rounded-full  hover:scale-105 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6-10a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>

        {/* Message Icon */}
        <button className="flex items-center justify-center w-10 h-10  text-white rounded-full hover:scale-105 transition-transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.961 8.961 0 01-4.187-.982L3 21l1.382-5.528A8.96 8.96 0 013 12c0-3.866 3.582-7 8-7s8 3.134 8 7z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default UserCards;
