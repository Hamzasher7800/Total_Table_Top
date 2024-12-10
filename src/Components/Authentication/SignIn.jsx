import React from 'react';
import logo from "../../assets/image.png"; // Update with your logo path
import iconcirclecheck from "../../assets/Iconcheck-circle.svg";

function SignIn() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//   };

  return (
    <div className="bg-[#102F47] min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row mb-8 space-y-8 lg:space-y-0"> 

        {/* Left Side - Image and Info for Large Screens */}
        <div className="lg:w-1/2 p-8  flex-col justify-center text-white hidden lg:block">
          <div className="flex items-center space-x-4 mb-6">
            <img src={logo} alt="Logo" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]" />
            <div>
              <h1 className="text-[16px] sm:text-4xl font-bold">Totally TableTop</h1>
              <p className="text-xl sm:text-[16px]">CONVENTIONS, MANAGED</p>
            </div>
          </div> 

          {/* Options */}
          <div className="space-y-4 text-lg">
            <div className="flex gap-x-2 items-center">
              <img className="w-4 h-4" src={iconcirclecheck} alt="" />
              <p>Sell and buy board games in advance of a convention</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <img className="w-4 h-4" src={iconcirclecheck} alt="" />
              <p>Create an agenda for each stand you wish to visit</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <img className="w-4 h-4" src={iconcirclecheck} alt="" />
              <p>Instantly invite friends to play games and events</p>
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="lg:w-1/2 p-8 flex flex-col">
          <form >
            {/* Logo and Headings for Small Screens */}
            <div className="flex flex-col items-center text-white mb-6 lg:hidden">
              <img src={logo} alt="Logo" className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-4" />
              <h1 className="text-3xl sm:text-4xl font-bold">Totally TableTop</h1>
              <p className="text-xl">CONVENTIONS, MANAGED</p>
            </div>

            {/* First Div: Inputs and Login Button */}
            <div className="bg-[#0D2539] border-r-2 border-b-2 border-[#F3C15F] p-8 mb-4">
              <div className="space-y-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                
                  className="w-full px-4 py-2 bg-[#102F47] focus:outline-none focus:ring-2 focus:ring-[#F77F00] text-lg"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                 
                  className="w-full px-4 py-2 bg-[#102F47] focus:outline-none focus:ring-2 focus:ring-[#F77F00] text-lg"
                />
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-[#F77F00] hover:bg-[#FF8C00] text-lg mt-4"
                >
                  Login
                </button>
                <div className="text-center mt-4">
                  <a href="#" className="text-white hover:underline">Lost your password?</a>
                </div>
              </div>
            </div>

            {/* Second Div: Create Account Button */}
            <div className="w-full text-center">
              <button className="w-full py-2 text-white border-2 border-white hover:bg-[#FFBF00] text-lg">
                Create Account
              </button>
            </div>
          </form>

          {/* Options for Small Screens */}
          <div className="text-white mt-8 space-y-4 text-lg lg:hidden">
            <div className="flex gap-x-2 items-center">
              <img className="w-4 h-4" src={iconcirclecheck} alt="" />
              <p>Sell and buy board games in advance of a convention</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <img className="w-4 h-4" src={iconcirclecheck} alt="" />
              <p>Create an agenda for each stand you wish to visit</p>
            </div>
            <div className="flex gap-x-2 items-center">
              <img className="w-4 h-4" src={iconcirclecheck} alt="" />
              <p>Instantly invite friends to play games and events</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
