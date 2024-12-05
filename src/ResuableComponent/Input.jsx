// import React from 'react';

// function Input({ 
//   type = 'text', 
//   placeholder = '', 
//   value, 
// //   onChange, 
//   name, 
//   id, 
//   icon,
//   className = '', 
//   required = false 
// }) {
//   return (
//     <div className="mb-4">
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         // onChange={onChange}
//         name={name}
//         id={id}
//         className={`w-full p-2 bg-[#102f47] border-b-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f3c15f] ${className}`}
//         required={required}
//         icon={icon}
//       />
//     </div>
//   );
// }

// export default Input;



import React from 'react';

function Input({ type, placeholder, value, name, id, required, className, icon }) {
  return (
    <div className="relative ">
      {/* Input Field */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={id}
        className={`w-full p-2 bg-[#102f47] border-b-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f3c15f] pl-10 ${className}`}
        required={required}
      />
      
      {/* Icon */}
      {icon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <img src={icon} alt="icon" className="w-5 h-5" />
        </div>
      )}
    </div>
  );
}

export default Input;
