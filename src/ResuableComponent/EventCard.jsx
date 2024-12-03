
// import React from "react";
// import { Link } from "react-router-dom";
// import iconlocation from "../assets/iconlocation.svg";
// import iconcalender from "../assets/iconcalender.svg";

// function EventCard({
    
//   title,
//   date,
//   location,
//   description,
//   icon,
//   isFeatured,
//   buttondetail,
//   isSelected,
//   onSelect,
//   id, // Add id prop to pass event ID
// }) {
//   return (
//     <div
//       onClick={onSelect}
//       className={`border-2 mt-10 lg:mt-[16px] p-4 sm:p-6 lg:p-8 bg-[#0D2539] text-white rounded-md transition-all duration-300 ${
//         isSelected ? "border-[#F77F02]" : "border-transparent"
//       }`}
//     >
//       {/* Header Section */}
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
//         <div className="flex items-start lg:items-center gap-4">
//           <div className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
//             <img src={icon} alt="Icon" className="h-full w-full object-contain" />
//           </div>
//           <div>
//             <div className="flex items-center gap-2">
//               <h2 className="text-base sm:text-lg lg:text-2xl font-bold">{title}</h2>
//               {isFeatured && (
//                 <span className="text-[10px] lg:text-[12px] px-[5px] font-medium bg-[#F3C15F] text-black">
//                   Featured
//                 </span>
//               )}
//             </div>
//             <div className="flex flex-col lg:flex-row gap-2 mt-2">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={iconcalender}
//                   alt="Calendar Icon"
//                   className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] object-contain"
//                 />
//                 <h3 className="text-xs sm:text-sm lg:text-base font-medium">{date}</h3>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img
//                   src={iconlocation}
//                   alt="Location Icon"
//                   className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] object-contain"
//                 />
//                 <h3 className="text-xs sm:text-sm lg:text-base font-medium">{location}</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           {/* Add Link to Details Page */}
//           <Link to={`/events/${id}`}>
//             <button className="px-3 sm:px-4 py-2 border-2 border-[#F77F02] text-white font-medium hover:bg-[#e06902] transition text-xs sm:text-sm lg:text-base">
//               {buttondetail}
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="mt-4">
//         <p className="text-xs sm:text-sm lg:text-base">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default EventCard;






import React from "react";
import { Link } from "react-router-dom";
import iconlocation from "../assets/iconlocation.svg";
import iconcalender from "../assets/iconcalender.svg";

function EventCard({
  title,
  date,
  location,
  description,
  icon,
  isFeatured,
  buttondetail,
  isSelected,
  onSelect,
  id, // Add id prop to pass event ID
}) {
  return (
    <div
      onClick={onSelect}
      className={`border-2 mt-10 lg:mt-[16px] p-4 sm:p-6 lg:p-8 bg-[#0D2539] text-white rounded-md transition-all duration-300 ${
        isSelected ? "border-[#F77F02]" : "border-transparent"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex items-start lg:items-center gap-4">
          <div className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]">
            <img src={icon} alt="Icon" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg lg:text-2xl font-bold">{title}</h2>
              {isFeatured && (
                <span className="text-[10px] lg:text-[12px] px-[5px] font-medium bg-[#F3C15F] text-black">
                  Featured
                </span>
              )}
            </div>
            <div className="flex flex-col lg:flex-row gap-2 mt-2">
              <div className="flex items-center gap-2">
                <img
                  src={iconcalender}
                  alt="Calendar Icon"
                  className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] object-contain"
                />
                <h3 className="text-xs sm:text-sm lg:text-base font-medium">{date}</h3>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={iconlocation}
                  alt="Location Icon"
                  className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] object-contain"
                />
                <h3 className="text-xs sm:text-sm lg:text-base font-medium">{location}</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Use Link only once here */}
          <Link
            to={`/events/${id}`}
            className="px-3 sm:px-4 py-2 border-2 border-[#F77F02] text-white font-medium hover:bg-[#e06902] transition text-xs sm:text-sm lg:text-base"
          >
            {buttondetail}
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs sm:text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;
