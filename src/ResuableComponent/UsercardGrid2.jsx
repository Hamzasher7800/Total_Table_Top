import React from "react";

function UserCardgrid({ userImage, name, username, action1, action2 }) {
  return (
    <div className="flex justify-between items-center bg-[#0D2539] text-white p-4 sm:p-6 w-full ">
      {/* Left Section: User Image and Details */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* User Image */}
        <img
          src={userImage}
          alt={name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-[#F77F02]"
        />

        {/* User Details */}
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-400">@{username}</p>
        </div>
      </div>

      {/* Right Section: Action Buttons */}
      <div className="flex gap-3">
        {/* Action Button 1 */}
        {action1 && (
          <button
            className="flex items-center justify-center w-10 h-10 bg-[#1E3A4C] rounded-full hover:scale-105 transition-transform"
            onClick={action1.onClick}
            title={action1.title}
          >
            {action1.icon}
          </button>
        )}

        {/* Action Button 2 */}
        {action2 && (
          <button
            className="flex items-center justify-center w-10 h-10 bg-[#1E3A4C] rounded-full hover:scale-105 transition-transform"
            onClick={action2.onClick}
            title={action2.title}
          >
            {action2.icon}
          </button>
        )}
      </div>
    </div>
  );
}

export default UserCardgrid;
