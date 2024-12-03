import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../App_Layout/Navbar";
import Footer from "../App_Layout/Footer";
import iconlocation from "../../assets/iconlocation.svg";
import iconlink from "../../assets/iconlink.svg";
import iconcalender from "../../assets/iconcalender.svg";
import iconannounce from "../../assets/iconannouce.svg";

const events = [
  {
    id: 1,
    title: "UK Games Expo",
    date: "31st May - 2 June 2023",
    location: "NEC Birmingham",
    description: [
      "Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
      "At UK Games Expo there are two huge halls full of exhibitors who want to show you their games. You can see them, you can try them out, and if you like them you can buy them.",
      "There is also a huge library of games to borrow and play on hundreds of tables of open gaming - open for anyone to play anything in.",
    ],
    website: "https://www.ukgamesexpo.com",
    icon: iconannounce,
  },
  {
    id: 2,
    title: "HandyCon Double 6",
    date: "19th April - 21st April 2024",
    location: "Delta Hotel, Milton Keynes",
    description: [
      "HandyCon is a thrilling three-day board gaming convention that takes place four times a year.",
      "The event features a large collection of games, exciting competitions, and a great opportunity to connect with fellow board game enthusiasts.",
    ],
    website: "https://www.handycon.co.uk",
    icon: iconannounce,
  },
];

function EventDetails() {
  const { id } = useParams(); // Get event ID from the URL
  const event = events.find((event) => event.id === parseInt(id)); // Find event by ID

  if (!event) {
    return <div className="text-white">Event not found</div>;
  }

  return (
    <div className="bg-[#102F47] text-white min-h-screen">
      <Navbar />
      <div className="px-4 sm:px-8 lg:px-[148px] mt-10 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/5">
          <h1 className="text-2xl lg:text-4xl font-bold">{event.title}</h1>
          <div className="mt-4 text-sm lg:text-base leading-relaxed">
            {event.description.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 border-2 border-[#F77F02] bg-[#0D2539] rounded-md p-6">
          <div className="flex flex-col items-center">
            <img src={event.icon} alt={event.title} className="w-40 h-40 object-contain mb-4" />
            <div className="text-sm lg:text-base mb-2 flex items-center">
              <img src={iconlocation} alt="Location Icon" className="w-5 h-5 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="text-sm lg:text-base mb-2 flex items-center">
              <img src={iconcalender} alt="Calendar Icon" className="w-5 h-5 mr-2" />
              <span>{event.date}</span>
            </div>
            <a
              href={event.website}
              className="text-sm lg:text-base text-[#F77F02] hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconlink} alt="Link Icon" className="w-5 h-5 mr-2" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../App_Layout/Navbar";
// import Footer from "../App_Layout/Footer";
// import iconlocation from "../../assets/iconlocation.svg";
// import iconlink from "../../assets/iconlink.svg";
// import iconcalender from "../../assets/iconcalender.svg";
// import iconannounce from "../../assets/iconannouce.svg";

// function EventDetails() {
//   const { slug } = useParams(); // Get event slug from the URL
//   const [event, setEvent] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("Event slug from URL:", id); // Ensure the 'id' is actually the slug
  
//     const fetchEvent = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/event/${id}`); // This should use slug, not id
//         const data = await response.json();
  
//         if (response.ok) {
//           setEvent(data);
//         } else {
//           setError(data.message || "An error occurred while fetching the event.");
//         }
//       } catch (err) {
//         console.error("Error fetching event data:", err);
//         setError("An error occurred while fetching event data.");
//       }
//     };
  
//     fetchEvent();
//   }, [id]); // id should be the slug from URL

//   if (error) {
//     return <div className="text-white">{error}</div>;
//   }

//   if (!event) {
//     return <div className="text-white">Loading...</div>;
//   }

//   // Log event data to ensure it exists and has the expected properties
//   console.log('Event properties:', event.title, event.icon, event.location, event.date);

//   return (
//     <div className="bg-[#102F47] text-white min-h-screen">
//       <Navbar />
//       <div className="px-4 sm:px-8 lg:px-[148px] mt-10 flex flex-col lg:flex-row gap-8">
//         <div className="w-full lg:w-3/5">
//           <h1 className="text-2xl lg:text-4xl font-bold">{event.title}</h1>
//           <div className="mt-4 text-sm lg:text-base leading-relaxed">
//             {Array.isArray(event.description) ? (
//               event.description.map((paragraph, index) => (
//                 <p key={index} className="mb-4">
//                   {paragraph}
//                 </p>
//               ))
//             ) : (
//               <p>{event.description}</p>
//             )}
//           </div>
//         </div>
//         <div className="w-full lg:w-1/3 border-2 border-[#F77F02] bg-[#0D2539] rounded-md p-6">
//           <div className="flex flex-col items-center">
//             <img src={event.icon} alt={event.title} className="w-40 h-40 object-contain mb-4" />
//             <div className="text-sm lg:text-base mb-2 flex items-center">
//               <img src={iconlocation} alt="Location Icon" className="w-5 h-5 mr-2" />
//               <span>{event.location}</span>
//             </div>
//             <div className="text-sm lg:text-base mb-2 flex items-center">
//               <img src={iconcalender} alt="Calendar Icon" className="w-5 h-5 mr-2" />
//               <span>{event.date}</span>
//             </div>
//             <a
//               href={event.website}
//               className="text-sm lg:text-base text-[#F77F02] hover:underline flex items-center"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={iconlink} alt="Link Icon" className="w-5 h-5 mr-2" />
//               Visit Website
//             </a>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default EventDetails;
