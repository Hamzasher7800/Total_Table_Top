import React from 'react';

function SettingHeader() {
  return (
    <div>
      <div className="text-white flex justify-between items-center px-4 sm:px-6 md:px-0 mt-4">
        <div className="text-white">
          <h2 className="text-[18px] sm:text-[40px] md:text-[45px] font-bold">Settings</h2>
        </div>
        <div>
          <button className="text-[13px] sm:text-[15px] md:text-[20px] border-2 border-[#f3c15f] p-2 sm:px-1 sm:py-4 md:px-4 md:py-3">
            Save all changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingHeader;