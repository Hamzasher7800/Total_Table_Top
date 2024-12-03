import React from "react";
import EventNotification from "../../ResuableComponent/EventNotification";
import iconannouce from "../../assets/iconannouce.svg";

function Activity() {
  return (
    <div className="bg-[#102F47] text-white mt-6 ">
      {/* Main Content */}
      <div className="w-full space-y-4  ">
        <EventNotification
          profileImage={iconannouce}
          name="Daphne"
          Annoucnment="is attending"
          eventTitle="UK Games Expo"
          dateMessage="Friday 31st May 2024 - Saturday 1st June 2024"
          logo={iconannouce}
          commentCount={0}
          favorite={true}
        />
          <EventNotification
          profileImage={iconannouce}
          name="UK Game Expo"
          Annoucnment="announced for 2024"
          eventTitle=""
          dateMessage="Friday 31st May 2024 - Saturday 1st June 2024"
          logo={iconannouce}
          commentCount={0}
          favorite={true}
        />
         <EventNotification
          profileImage={iconannouce}
          name="Niles "
          Annoucnment="update thier profile picture"
          eventTitle=""
          commentCount={0}
          favorite={false}
        />
      </div>
    </div>
  );
}

export default Activity;
