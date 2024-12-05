import React from "react";
import iconannouce from "../../assets/iconannouce.svg";
import UserCard from "../../ResuableComponent/Usercards";

function Friends() {
  return (
    <div className=" min-h-screen">
       
      {/* Responsive Grid Layout for User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <UserCard
          userImage={iconannouce}
          name="John Doe"
          username="johndoe"
        />
        <UserCard
          userImage={iconannouce}
          name="Jane Smith"
          username="janesmith"
        />
        <UserCard
          userImage={iconannouce}
          name="Alice Johnson"
          username="alicej"
        />
        <UserCard
          userImage={iconannouce}
          name="Bob Brown"
          username="bobbrown"
        />
        <UserCard
          userImage={iconannouce}
          name="Emma Stone"
          username="emstone"
        />
      </div>
    </div>
  );
}

export default Friends;
