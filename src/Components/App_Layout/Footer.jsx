// import React from 'react'
// import image from "../../assets/image.png"
// function Footer() {
//   return (
//     <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:px-[10px] sm:py-[20px] px-6 md:px-[133px] bg-[#0d2539] mt-[100px] space-y-4 sm:space-y-0">
//   {/* Logo Section */}
//   <div className="h-[80px] w-[80px] flex-shrink-0">
//     <img className="h-full w-full object-contain" src={image} alt="Logo" />
//   </div>

//   {/* Links Section */}
//   <div className="flex items-center">
//     <ul className="flex flex-col sm:flex-row gap-4 sm:gap-5 text-white text-center sm:text-left">
//       <li>Feedback form</li>
//       <li>Contact us</li>
//       <li>Staying safe</li>
//       <li>Terms</li>
//       <li>Cookies</li>
//       <li>Privacy</li>
//     </ul>
//   </div>
// </div>

  
//   )
// }

// export default Footer






import React from "react";
import { Link } from "react-router-dom"; // Import Link
import image from "../../assets/image.png";

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:px-[10px] sm:py-[20px] px-6 md:px-[133px] bg-[#0d2539] mt-[100px] space-y-4 sm:space-y-0">
      {/* Logo Section */}
      <div className="h-[80px] w-[80px] flex-shrink-0">
        <img className="h-full w-full object-contain" src={image} alt="Logo" />
      </div>

      {/* Links Section */}
      <div className="flex items-center">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-5 text-white text-center sm:text-left">
          {/* Internal links using Link component */}
          <li>
            <Link to="/feedback-form">Feedback Form</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/staying-safe">Staying Safe</Link>
          </li>
          {/* External links using <a> */}
          <li>
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
          </li>
          <li>
            <a href="/cookies" target="_blank" rel="noopener noreferrer">
              Cookies
            </a>
          </li>
          <li>
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
