import React from 'react';
import icondropdown from "../assets/icondropdown.svg";

function SettingOption({ heading, buttonname }) {
  return (
    <div className="py-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-y-4 sm:gap-y-0">
        {/* Profile Name Section */}
        <h2 className="text-lg font-bold text-white-600">{heading}</h2>

        {/* Button Section */}
        <button className="flex items-center justify-between gap-x-14 w-full sm:w-[250px] px-4 py-2 border-2 border-gray-600 rounded-md hover:border-[#f3c15f] hover:text-[#f3c15f] transition">
          <span>{buttonname}</span>
          <img src={icondropdown} alt="Dropdown Icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default SettingOption;
