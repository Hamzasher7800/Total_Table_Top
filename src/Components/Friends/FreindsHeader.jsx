// import React from "react";
// import icononline from "../../assets/icononline.svg";
// import iconoffline from "../../assets/iconoffline.svg";
// import icongrid1 from "../../assets/icongrid1.svg";
// import icongrid2 from "../../assets/icongrid2.svg";

// function FriendsHeader() {
//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-center text-white py-2 sm:py-4">
//       {/* Title Section */}
//       <div className="text-white text-xl sm:text-2xl md:text-2xl lg:text-[35px] xl:text-[45px] font-bold sm:mb-0 mb-4">
//         <h2>Friends (47)</h2>
//       </div>

//       {/* Status & Buttons Section */}
//       <div className="flex  sm:flex-row gap-x-3 sm:gap-x-4 items-center sm:items-center  ">
//         {/* Online Status */}
//         <div className="flex items-center gap-x-2">
//           <img className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" src={icononline} alt="Online" />
//           <h2 className="text-xs sm:text-sm md:text-base">Online</h2>
//         </div>

//         {/* Offline Status */}
//         <div className="flex items-center gap-x-2">
//           <img className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" src={iconoffline} alt="Offline" />
//           <h2 className="text-xs sm:text-sm md:text-base">Offline</h2>
//         </div>

//         {/* Grid Icons */}
//         <div className="flex items-center gap-x-2 sm:mt-0 ">
//           <button className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 border-2 border-[#f3c15f] p-2 flex items-center justify-center">
//             <img src={icongrid1} alt="Grid 1" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
//           </button>
//           <button className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 bg-[#f3c15f] p-2 flex items-center justify-center">
//             <img src={icongrid2} alt="Grid 2" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FriendsHeader;






import React from "react";
import icononline from "../../assets/icononline.svg";
import iconoffline from "../../assets/iconoffline.svg";
import icongrid1 from "../../assets/icongrid1.svg";
import icongrid2 from "../../assets/icongrid2.svg";

function FriendsHeader({ onPageChange, currentPage }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-white py-2 sm:py-4">
      {/* Title Section */}
      <div className="text-white text-xl sm:text-2xl md:text-2xl lg:text-[35px] xl:text-[45px] font-bold sm:mb-0 mb-4">
        <h2>Friends (47)</h2>
      </div>

      {/* Status & Buttons Section */}
      <div className="flex sm:flex-row gap-x-3 sm:gap-x-4 items-center sm:items-center">
        {/* Online Status */}
        <div className="flex items-center gap-x-2">
          <img className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" src={icononline} alt="Online" />
          <h2 className="text-xs sm:text-sm md:text-base">Online</h2>
        </div>

        {/* Offline Status */}
        <div className="flex items-center gap-x-2">
          <img className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" src={iconoffline} alt="Offline" />
          <h2 className="text-xs sm:text-sm md:text-base">Offline</h2>
        </div>

        {/* Grid Icons */}
        <div className="flex items-center  sm:mt-0">
          <button
            className={`h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 border-2 ${
              currentPage === "friends" ? "border-[#f3c15f] bg-[#f3c15f] " : "border-[#f3c15f]"
            } p-2 flex items-center justify-center`}
            onClick={() => onPageChange("friends")}
          >
            <img src={icongrid1} alt="Grid 1" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </button>
          <button
            className={`h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-10 ${
              currentPage === "friendsGrid" ? "border-[#f3c15f] bg-[#f3c15f] " : "border-gray-500"
            } p-2 flex items-center justify-center`}
            onClick={() => onPageChange("friendsGrid")}
          >
            <img src={icongrid2} alt="Grid 2" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendsHeader;
