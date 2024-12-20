import React from "react";
import iconprogress from "../assets/iconprogress.svg";

function SetupBar({
  title = "",
  step = "",
  description = "",
  onSkip,
  onComplete,
  completebutton,
  skipbutton,
  iconprogress,
}) {
  return (
    <div className="mt-[39px] ">
      {/* Welcome Header */}
      <div>
        <h2 className="lg:text-[60px] sm:text-[40px] text-[40px]  font-bold text-white">
          {title}
        </h2>
      </div>

      {/* Step Progress Section */}
      <div className="flex flex-wrap justify-between items-center bg-[#0D2539] p-[20px] shadow-lg mt-6 gap-y-4  sm:items-start">
        {/* Progress Details */}
        <div className="flex items-center gap-4">
          <div className="h-[49px] w-[71px]">
            <img
              className="h-full w-full object-contain"
              src={iconprogress}
              alt="Progress Icon"
            />
          </div>
          <div>
            <h3 className="text-white text-sm">{step}</h3>
            <h2 className="text-white text-md">{description}</h2>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 sm:mt-4">
          <button
            className="bg-transparent text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#0D2539] transition"
            onClick={onSkip}
          >
            {skipbutton}
          </button>
          <button
            className="text-white font-bold border-2 border-[#F77F02] px-4 py-2 hover:bg-blue-600 transition"
            onClick={onComplete}
          >
            {completebutton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupBar;
