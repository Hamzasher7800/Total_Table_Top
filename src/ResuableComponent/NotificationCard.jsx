import React from "react";

function NotificationCard({
  profileIcon,
  message = "You have a new notification!",
  Button1,
  Button2,
  onAccept,
  onDismiss,
}) {
  return (
    <div className="bg-[#0D2539] p-4 rounded-md shadow-md border-b-4 border-[#F77F00] w-full flex items-center justify-between flex-wrap gap-4">
      {/* Red Dot */}
      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>

      {/* Profile Icon */}
      <img
        src={profileIcon}
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover mr-3"
      />

      {/* Message */}
      <p className="flex-1 text-white text-sm md:text-base mr-4">{message}</p>

      {/* Buttons */}
      <div className="flex flex-wrap sm:flex-nowrap gap-2">
        <button
          className="flex-1 sm:flex-none sm:w-[120px]  text-white px-4 py-2 rounded-md hover:bg-green-600 text-center"
          onClick={onAccept}
        >
          {Button1}
        </button>
        <button
          className="flex-1 sm:flex-none sm:w-[120px] border-[#F77F00] border-2 text-white px-4 py-2 rounded-md hover:bg-red-600 text-center"
          onClick={onDismiss}
        >
          {Button2}
        </button>
      </div>
    </div>
  );
}

export default NotificationCard;
