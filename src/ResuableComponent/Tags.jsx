import React from "react";
import iconannouce from "../assets/iconannouce.svg";

function Tags({icon,title}) {
  return (
    <div className="p-2">
      {/* Container for the Tag */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Icon */}
        <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
          <img
            className="h-full w-full object-contain"
            src={icon}
            alt="Announcement Icon"
          />
        </div>
        {/* Text */}
        <h2 className="text-sm sm:text-lg text-white font-bold">{title}</h2>
      </div>
    </div>
  );
}

export default Tags;
