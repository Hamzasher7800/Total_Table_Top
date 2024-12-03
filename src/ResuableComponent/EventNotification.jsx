// import React from "react";

// function EventNotification({
//   profileImage,
//   name,
//   eventTitle,
//   dateMessage,
//   logo,
//   commentCount,
//   favorite,
// }) {
//   return (
//     <div className="flex items-start bg-[#0D2539] text-white p-8 rounded-lg shadow-md gap-4 sm:ml-0">
//       {/* Event Logo */}
//       <img
//         src={logo}
//         alt={eventTitle}
//         className="w-12 h-12 rounded-full object-cover"
//       />
//       {/* Event Content */}
//       <div className="flex-1">
//         {/* User and Event Info */}
//         <p className="text-sm">
//           <span className="font-bold text-yellow-400 text-[20px]">{name}</span> is attending{" "}
//           <span className="font-bold text-[#F77F02] text-[20px]">{eventTitle}</span>
//         </p>
//         {/* Event Date Info */}
//         <p className="text-[16px] mt-4">{dateMessage}</p>
//         {/* Icons for Comments and Favorites */}
//         <div className="flex items-center gap-4 text-gray-400 text-xs mt-4">
//           {/* Comment Icon */}
//           <div className="flex items-center gap-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10 0V6a4 4 0 00-8 0v2m8 0H9"
//               />
//             </svg>
//             {commentCount || 0}
//           </div>
//           {/* Favorite Icon */}
//           <div className="flex items-center gap-1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className={`h-4 w-4 ${
//                 favorite ? "text-yellow-400" : "text-gray-400"
//               }`}
//               fill={favorite ? "currentColor" : "none"}
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5.121 17.804A10.023 10.023 0 0112 22a10.023 10.023 0 016.879-4.196M3.22 3.22l17.56 17.56M4.75 4.75A10.023 10.023 0 0112 2c2.47 0 4.73.91 6.5 2.43m2.5 2.91A9.94 9.94 0 0122 12c0 2.47-.91 4.73-2.43 6.5M16 10h-.01M12 10h-.01"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventNotification;


import React from "react";

function EventNotification({
  profileImage,
  name,
  Annoucnment,
  eventTitle,
  dateMessage,
  logo,
  commentCount,
  favorite,
}) {
  return (
    <div className="flex items-start bg-[#0D2539] text-white p-1 md:p-8 rounded-lg shadow-md  gap-8 sm:ml-0">
      {/* Profile Image and Event Logo Container */}
      <div className="relative flex-shrink-0">
        {/* Profile Image */}
        <img
          src={profileImage}
          alt={name}
          className="w-8 h-8 rounded-full object-cover border-2 border-[#F77F02]"
        />
        {/* Event Logo */}
        {logo && (
          <img
            src={logo}
            alt={eventTitle}
            className="w-8 h-8 rounded-full object-cover border-2 border-white absolute bottom-0 right-0 transform translate-x-3/4 -translate-y-0/4"
          />
        )}
      </div>

      {/* Event Content */}
      <div className="flex-1">
        {/* User and Event Info */}
        <p className="text-sm">
          <span className="font-bold text-yellow-400 sm:text-[16px] md:text-[20px]">{name}</span> {Annoucnment}{" "}
          <span className="font-bold text-[#F77F02] sm:text-[16px] md:text-[20px]">{eventTitle}</span>
        </p>
        {/* Event Date Info */}
        <p className="text-[16px] mt-4">{dateMessage}</p>
        {/* Icons for Comments and Favorites */}
        <div className="flex items-center gap-4 text-gray-400 text-xs mt-4">
          {/* Comment Icon */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m10 0V6a4 4 0 00-8 0v2m8 0H9"
              />
            </svg>
            {commentCount || 0}
          </div>
          {/* Favorite Icon */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${
                favorite ? "text-yellow-400" : "text-gray-400"
              }`}
              fill={favorite ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A10.023 10.023 0 0112 22a10.023 10.023 0 016.879-4.196M3.22 3.22l17.56 17.56M4.75 4.75A10.023 10.023 0 0112 2c2.47 0 4.73.91 6.5 2.43m2.5 2.91A9.94 9.94 0 0122 12c0 2.47-.91 4.73-2.43 6.5M16 10h-.01M12 10h-.01"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventNotification;
