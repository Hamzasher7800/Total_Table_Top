
import React, { useState } from "react";
import Navbar from "../App_Layout/Navbar";
import EventCard from "../../ResuableComponent/EventCard"; // Import the reusable card
import iconannounce from "../../assets/iconannouce.svg";
import Footer from "../App_Layout/Footer";

function Events() {
  // State to track selected event
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Example event data
  const events = [
    {
      id: 1, // Added unique id for each event
      title: "UK Games Expo",
      date: "31st May - 2 June 2023",
      location: "Harrogate Convention Center",
      description:
        "Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
      icon: iconannounce,
      buttondetail: "More detail",
      isFeatured: true,
    },
    {
      id: 2, // Added unique id for each event
      title: "HandyCon Double 6",
      date: "19th April - 21st April 2024",
      location: "Delta Hotel, Milton Keynees",
      description:
        "HandyCon is a thrilling three-day board gaming convention that takes place four times a year in the vibrant city of Milton Keynes, UK.",
      icon: iconannounce,
      buttondetail: "More detail",
      isFeatured: false,
    },
    // Add more events as needed
  ];

  // Function to handle card selection
  const handleSelectCard = (id) => {
    setSelectedEventId(id); // Set the selected event's id
  };

  return (
    <div className="bg-[#102F47] text-white">
      <div>
        <Navbar />
      </div>
      <div className="px-4 sm:px-8 lg:px-[148px]">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
            icon={event.icon}
            buttondetail={event.buttondetail}
            isFeatured={event.isFeatured}
            isSelected={selectedEventId === event.id} // Pass isSelected prop to EventCard
            onSelect={() => handleSelectCard(event.id)} // Pass onSelect prop to EventCard
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Events;






// In EventCard.jsx or wherever your event card is being defined

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link to handle navigation

// function EventCard({
//   slug, 
//   title, 
//   date, 
//   location, 
//   description, 
//   icon, 
//   buttondetail, 
//   isFeatured, 
//   isSelected, 
//   onSelect
// }) {
//   return (
//     <div className={`event-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
//       <img src={icon} alt={title} />
//       <h2>{title}</h2>
//       <p>{description}</p>
//       <p>{location}</p>
//       <p>{date}</p>
//       {isFeatured && <span>Featured Event</span>}

//       {/* Use Link to navigate to event details page */}
//       <Link to={`/event/${slug}`}>
//         <button>{buttondetail}</button>
//       </Link>
//     </div>
//   );
// }

// export default EventCard;
