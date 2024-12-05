// import React from "react";
// import Navbar from "../../App_Layout/Navbar";
// import Footer from "../../App_Layout/Footer";
// import icondropdown from "../../../assets/icondropdown.svg";
// import iconannouce from "../../../assets/iconannouce.svg"
// function ViewProfile() {
//   return (
//     <div className="bg-[#102F47]">
//       <Navbar />

//       <div className="flex justify-between px-4 sm:px-6 md:px-16 py-4 text-black bg-white">
//         <h2 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">
//           You are viewing your own profile
//         </h2>
//         <button className="text-[14px] sm:text-[16px] md:text-[18px]  text-[#f3c15f] px-3 py-2 rounded-md">
//           Edit profile
//         </button>
//       </div>
//       <div >
//       <div className="flex px-4 sm:px-6 md:px-[140px] py-[25px] text-white">
//         {/* Left Side - Profile Card */}
//         <div className="flex-none w-1/3 bg-[#0D2539] text-black py-4 ">
//           <div className="flex flex-col items-center space-y-4">
//             {/* Profile Picture */}
//             <img
//               src={iconannouce}// Replace with actual image source
//               alt="Profile"
//               className="w-32 h-32 rounded-full border-4 border-[#f3c15f]"
//             />
//             {/* Profile Name and Username */}
//             <div className="text-center">
//               <h3 className="text-[20px] text-white font-bold">John Doe</h3>
//               <p className="text-[14px] text-gray-600">@johndoe</p>
//             </div>
//             {/* Edit Profile Button */}
//             <button className="border-2 border-[#f3c15f] text-white px-4 py-2 rounded-md">
//               Edit Profile
//             </button>
//             {/* Tags like Location, Address, etc. */}
//             <div className="space-y-2 text-sm text-gray-600">
//               <p><strong>Location:</strong> New York, USA</p>
//               <p><strong>Address:</strong> 123 Main St</p>
//               <p><strong>Email:</strong> johndoe@example.com</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Feed Section */}
//         <div className="flex-1 ml-6">
//           <div className="flex justify-between items-center">
//             <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-bold">
//               Your Feed
//             </h2>
//             <div className="flex space-x-3">
//               <button className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] border-2 border-gray-600 px-3 py-2">
//                 Show all updates
//                 <img
//                   src={icondropdown}
//                   alt="Dropdown icon"
//                   className="w-2 h-2 ml-2 sm:w-5 sm:h-5 md:w-6 md:h-6"
//                 />
//               </button>
//               <button className="text-[14px] sm:text-[16px] md:text-[18px] border-2 border-[#f3c15f] text-white px-4 py-2">
//                 Post update
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default ViewProfile;

import React from "react";
import Navbar from "../../App_Layout/Navbar";
import Footer from "../../App_Layout/Footer";
import icondropdown from "../../../assets/icondropdown.svg";
import iconannouce from "../../../assets/iconannouce.svg";
import EventNotification from "../../../ResuableComponent/EventNotification";
import iconlocation from "../../../assets/iconlocation.svg"
function ViewProfile() {
  return (
    <div className="bg-[#102F47]">
      <Navbar />

      {/* Top Section */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-16 py-4 text-black bg-white">
        <h2 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold">
          You are viewing your own profile
        </h2>
        <button className="text-[14px] sm:text-[16px] md:text-[18px] text-[#f3c15f] px-3 py-2 rounded-md">
          Edit profile
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap px-4 sm:px-6 md:px-[140px] py-[25px] space-y-4 md:space-y-0 md:space-x-6 text-white mt-6 ">
        {/* Left Side - Profile Card */}
        <div className="w-full md:w-1/4 bg-[#0D2539] text-black p-4 mt-16 relative rounded-lg flex flex-col items-center ">
          {/* Profile Picture */}
          <div className="absolute -top-12">
            <img
              src={iconannouce} // Replace with actual image source
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#f3c15f]"
            />
          </div>

          {/* Card Content */}
          <div className="flex flex-col items-center justify-center space-y-4 mt-16">
            {/* Profile Name and Username */}
            <div className="text-center">
              <h3 className="text-[18px] sm:text-[20px] text-white font-bold">
                John Doe
              </h3>
              <p className="text-[12px] sm:text-[14px] text-gray-600">
                @johndoe
              </p>
            </div>
            {/* Edit Profile Button */}
            <button className="border-2 w-full border-[#f3c15f] text-white px-4 py-2 rounded-md">
              Edit Profile
            </button>
            {/* Tags like Location, Address, etc. */}
            <div className="space-y-2 text-sm text-gray-600 text-center">
              <p>
                413 friends
              </p>
              <p>
                 Member since 2024
              </p>
              <p className="flex items-center gap-x-1">
                <img className="w-4 h-4" src={iconlocation} alt="" />
                 Bristol
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Feed Section */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between space-y-4 sm:space-y-0 px-4">
            {/* Left Side - Heading */}
            <h2 className="text-[16px] sm:text-[18px] md:text-[36px] font-bold w-full sm:w-auto text-center sm:text-left">
              Your Feed
            </h2>

            {/* Right Side - Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-2 w-full sm:w-auto">
              {/* Show All Updates Button */}
              <button className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] border-2 border-gray-600 px-3 py-2 ">
                Show all updates
                <img
                  src={icondropdown}
                  alt="Dropdown icon"
                  className="w-2 h-2 ml-2 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
              </button>
              {/* Post Update Button */}
              <button className="flex items-center text-[14px] sm:text-[16px] md:text-[18px] border-2 border-[#f3c15f] text-white px-4 py-2">
                Post update
              </button>
            </div>
          </div>

          <div className="space-y-4 mt-2">
            <EventNotification
              profileImage={iconannouce}
              name="You"
              Annoucnment="are attending"
              eventTitle="UK Games Expo"
              dateMessage="Daphne will attend UK Games Expo on Friday 31st May 2024 and Saturday 1st June 2024"
              logo={iconannouce}
              commentCount={0}
              favorite={false}
            />
            <EventNotification
              profileImage={iconannouce}
              name="You"
              Annoucnment="are attending your profile picture"
              commentCount={0}
              favorite={true}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ViewProfile;
