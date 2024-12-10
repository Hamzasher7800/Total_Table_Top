// import React from "react";
// import Input from "../../ResuableComponent/Input";
// import iconcirclecheck from "../../assets/Iconcheck-circle.svg";
// import image from "../../assets/image.png";
// function SignUp() {
//   return (
//     <div className="bg-[#0D2539] min-h-screen ">
//       <div>
//         <div className="flex justify-between items-center py-8 border-b-4 border-[#F3C15F] px-[20px] lg:px-[140px] ">
//           {/* Logo Section */}
//           <div className="flex items-center gap-x-3">
//             <img className="w-16 h-16" src={image} alt="" />
//             <h2 className="text-[30px] font-bold text-white hidden sm:block">
//               Totally TableTop
//             </h2>
//           </div>

//           {/* Help and Login Section */}
//           <div className="flex items-center gap-x-6">
//             <p className="text-[white] font-semibold text-[12px] hidden sm:block">
//               Need help?
//             </p>
//             <button
//               type="submit"
//               className="px-3 py-3 bg-[#F77F00] text-white hover:bg-[#FF8C00] transition duration-200"
//             >
//               Log in
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="  max-h-fit flex flex-col lg:flex-row justify-center bg-[#102F47] px-4 py-8">
//         {/* Sign Up Card */}
//         <div className="bg-[#0D2539] border-b-2 border-r-2 border-[#F3C15F] p-8  w-full max-w-[733px] lg:mr-8">
//           <form action="">
//             {/* Header Section */}
//             <div className="text-start mb-6">
//               <h2 className="text-2xl font-bold text-white">
//                 Create an Account
//               </h2>
//               <p className="text-white text-sm">It only takes a minute.</p>
//             </div>

//             {/* Input Fields */}
//             <div className="space-y-4">
//               <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
//                 <Input placeholder="First Name" className="w-full" />
//                 <Input placeholder="Last Name" className="w-full" />
//               </div>
//               <Input placeholder="Email" type="email" className="w-full" />
//               <Input placeholder="@ Choose a username" className="w-full" />
//               <p className="text-[#F2F0EF] text-[12px] mt-1">
//                 Select a username. Cannot already be in use, cannot be changed.
//               </p>
//               <Input
//                 placeholder="Password"
//                 type="password"
//                 className="w-full"
//               />
//               <Input
//                 placeholder="Confirm Password"
//                 type="password"
//                 className="w-full"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="px-3 py-3 bg-[#F77F00] text-white   hover:bg-[#FF8C00] transition duration-200"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Info Section */}
//         <div className="mt-8 lg:mt-0 bg-[#0D2539] border-b-2 border-r-2 border-[#F3C15F] p-6  w-auto h-auto max-h-fit max-w-fit">
//           <div className="space-y-6 text-white">
//             <div className="flex items-center gap-x-4">
//               <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
//               <p>Sell and buy board games in advance of a convention</p>
//             </div>
//             <div className="flex items-center gap-x-4">
//               <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
//               <p>Create an agenda for each stand you wish to visit</p>
//             </div>
//             <div className="flex items-center gap-x-4">
//               <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
//               <p>Instantly invite friends to play games and events</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

// import React from "react";
// import Input from "../../ResuableComponent/Input";
// import iconcirclecheck from "../../assets/Iconcheck-circle.svg";
// import image from "../../assets/image.png";

// function SignUp() {
//   return (
//     <div className="bg-[#0D2539] min-h-screen">
//       <div>
//         {/* Header Section */}
//         <div className="grid grid-cols-2 py-8 border-b-4 border-[#F3C15F] px-[20px] lg:px-[140px]">
//           {/* Logo Section */}
//           <div className="flex items-center gap-x-3">
//             <img className="w-16 h-16" src={image} alt="" />
//             <h2 className="text-[30px] font-bold text-white hidden sm:block">
//               Totally TableTop
//             </h2>
//           </div>

//           {/* Help and Login Section */}
//           <div className="flex items-center gap-x-6 justify-end">
//             <p className="text-[white] font-semibold text-[12px] hidden sm:block">
//               Need help?
//             </p>
//             <button
//               type="submit"
//               className="px-3 py-3 bg-[#F77F00] text-white hover:bg-[#FF8C00] transition duration-200"
//             >
//               Log in
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
//         {/* Sign Up Card */}
//         <div className="bg-[#0D2539] border-b-2 border-r-2 border-[#F3C15F] p-8 max-w-[733px] mx-auto">
//           <form action="">
//             {/* Header Section */}
//             <div className="text-start mb-6">
//               <h2 className="text-2xl font-bold text-white">
//                 Create an Account
//               </h2>
//               <p className="text-white text-sm">It only takes a minute.</p>
//             </div>

//             {/* Input Fields */}
//             <div className="space-y-4">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                 <Input placeholder="First Name" className="w-full" />
//                 <Input placeholder="Last Name" className="w-full" />
//               </div>
//               <Input placeholder="Email" type="email" className="w-full" />
//               <Input placeholder="@ Choose a username" className="w-full" />
//               <p className="text-[#F2F0EF] text-[12px] mt-1">
//                 Select a username. Cannot already be in use, cannot be changed.
//               </p>
//               <Input
//                 placeholder="Password"
//                 type="password"
//                 className="w-full"
//               />
//               <Input
//                 placeholder="Confirm Password"
//                 type="password"
//                 className="w-full"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="px-3 py-3 bg-[#F77F00] text-white hover:bg-[#FF8C00] transition duration-200 w-full"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Info Section */}
//         <div className="bg-[#0D2539] h-auto max-h-fit w-auto max-w-fit border-b-2 border-r-2 border-[#F3C15F] p-6">
//           <div className="space-y-6 text-white">
//             <div className="flex items-center gap-x-4">
//               <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
//               <p>Sell and buy board games in advance of a convention</p>
//             </div>
//             <div className="flex items-center gap-x-4">
//               <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
//               <p>Create an agenda for each stand you wish to visit</p>
//             </div>
//             <div className="flex items-center gap-x-4">
//               <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
//               <p>Instantly invite friends to play games and events</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;







import React from "react";
import Input from "../../ResuableComponent/Input";
import iconcirclecheck from "../../assets/Iconcheck-circle.svg";
import image from "../../assets/image.png";

function SignUp() {
  return (
    <div className="bg-[#102F47] min-h-screen">
      <div>
        {/* Header Section */}
        <div className="grid grid-cols-2 py-8 border-b-4 border-[#F3C15F] px-4 sm:px-[20px] lg:px-[140px]">
          {/* Logo Section */}
          <div className="flex items-center gap-x-3">
            <img className="w-16 h-16" src={image} alt="" />
            <h2 className="text-[24px] sm:text-[30px] font-bold text-white hidden sm:block">
              Totally TableTop
            </h2>
          </div>

          {/* Help and Login Section */}
          <div className="flex items-center gap-x-6 justify-end">
            <p className="text-white font-semibold text-[12px] hidden sm:block">
              Need help?
            </p>
            <button
              type="submit"
              className="px-3 py-3 bg-[#F77F00] text-white hover:bg-[#FF8C00] transition duration-200 text-[12px] sm:text-[14px]"
            >
              Log in
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] xl:grid-cols-[4fr_1fr] gap-8 px-4 py-8 sm:px-[20px] lg:px-[140px]">
        {/* Sign Up Card - Takes 2fr on large screens */}
        <div className="bg-[#0D2539] border-b-2 border-r-2 border-[#F3C15F] p-8">
          <form action="">
            {/* Header Section */}
            <div className="text-start mb-6">
              <h2 className="text-2xl font-bold text-white">Create an Account</h2>
              <p className="text-white text-sm">It only takes a minute.</p>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="w-full" />
                <Input placeholder="Last Name" className="w-full" />
              </div>
              <Input placeholder="Email" type="email" className="w-full" />
              <Input placeholder="@ Choose a username" className="w-full" />
              <p className="text-[#F2F0EF] text-[12px] mt-1">
                Select a username. Cannot already be in use, cannot be changed.
              </p>
              <Input placeholder="Password" type="password" className="w-full" />
              <Input placeholder="Confirm Password" type="password" className="w-full" />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="px-3 py-3 bg-[#F77F00] text-white hover:bg-[#FF8C00] transition duration-200 w-full text-[14px]"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        {/* Info Section - Takes 1fr on large screens */}
        <div className="bg-[#0D2539] h-auto max-h-fit lg:max-w-fit border-b-2 border-r-2 border-[#F3C15F] p-6">
          <div className="space-y-6 text-white">
            <div className="flex items-center gap-x-4">
              <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
              <p>Sell and buy board games in advance of a convention</p>
            </div>
            <div className="flex items-center gap-x-4">
              <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
              <p>Create an agenda for each stand you wish to visit</p>
            </div>
            <div className="flex items-center gap-x-4">
              <img className="w-6 h-6" src={iconcirclecheck} alt="Check Icon" />
              <p>Instantly invite friends to play games and events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
