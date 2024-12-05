// import React from "react";
// function FooterComponent({
//   heading = "Default Heading",
//   paragraph = "Default paragraph text goes here.",
//   cardHeading = "Card Heading",
//   inputPlaceholders = ["Input 1", "Input 2", "Input 3"],
//   buttonText = "Submit",
//   onSubmit,
// }) {
//   return (
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:px-10 sm:py-8 py-4">
//   {/* Left Side - Text Section */}
//   <div className="flex-1 mb-6 sm:mb-0 sm:pr-10">
//     <h2 className="text-[50px] text-white font-bold mb-4">{heading}</h2>
//     <p className="text-white text-base">{paragraph}</p>
//   </div>

//   {/* Right Side - Card Section */}
//   <div
//     className="bg-[#0D2539] p-6 shadow-md border-r-4 border-b-4 border-[#F77F00]"
//     style={{
//       width: "512px",
//       height: "426px",
//     }}
//   >
//     <h3 className="text-lg text-white font-semibold mb-4">{cardHeading}</h3>
//     {inputPlaceholders.map((placeholder, index) => (
//       <input
//         key={index}
//         type="text"
//         placeholder={placeholder}
//         className="w-full px-4 py-2 mb-3 bg-[#102F47] border-b border-gray-300 focus:outline-none"
//       />
      
//     ))}
//     <button
//       onClick={onSubmit}
//       className="w-full bg-[#F77F00] text-white px-4 py-2 rounded-md hover:bg-blue-600"
//     >
//       {buttonText}
//     </button>
//   </div>
// </div>

//   );
// }

// export default FooterComponent;



import React from "react";

function FooterComponent({
  heading = "Default Heading",
  paragraph = "Default paragraph text goes here.",
  cardHeading = "Card Heading",
  inputPlaceholders = ["Input 1", "Input 2"],
  buttonText = "Submit",
  onSubmit,
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:px-10 lg:py-8 py-4">
      {/* Left Side - Text Section */}
      <div className="flex-1 mb-6 lg:mb-0 lg:pr-10">
        <h2 className="text-2xl md:text-4xl lg:text-[50px] text-white font-bold mb-4">
          {heading}
        </h2>
        <p className="text-sm md:text-base text-white">{paragraph}</p>
      </div>

      {/* Right Side - Card Section */}
      <div
        className="w-full lg:w-[512px] bg-[#0D2539] p-6 shadow-md border-r-4 border-b-4 border-[#F77F00] flex flex-col items-center"
        style={{
          height: "auto", // Dynamic height for better responsiveness
        }}
      >
        <h3 className="text-base md:text-lg lg:text-xl text-white font-semibold mb-4">
          {cardHeading}
        </h3>
        {/* Input Fields */}
        {inputPlaceholders.map((placeholder, index) => (
          <input
            key={index}
            type="text"
            placeholder={placeholder}
            className="w-full px-4 py-2 mb-3 bg-[#102F47] text-sm md:text-base border-b border-gray-300 focus:outline-none"
          />
        ))}

        {/* Textarea Field */}
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 mb-3 bg-[#102F47] text-sm md:text-base border-b border-gray-300 focus:outline-none resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={onSubmit}
          className="w-full bg-[#F77F00] text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-blue-600"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default FooterComponent;
