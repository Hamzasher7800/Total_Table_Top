import React from "react";
import UserCards from "../../ResuableComponent/UsercardGrid2";
import iconannouce from "../../assets/iconannouce.svg"
function Friendgrid() {
  return (
    <div className="space-y-4">
      <UserCards
        userImage={iconannouce}
        name="John Doe"
        username="@johndoe"
        action1={{
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6-10a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ),
          onClick: () => alert("Profile clicked"),
          title: "View Profile",
        }}
        action2={{
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.961 8.961 0 01-4.187-.982L3 21l1.382-5.528A8.96 8.96 0 013 12c0-3.866 3.582-7 8-7s8 3.134 8 7z"
              />
            </svg>
          ),
          onClick: () => alert("Message clicked"),
          title: "Send Message",
        }}
      />
      <UserCards
        userImage={iconannouce}
        name="Niles"
        username="@jungcrane"
        action1={{
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6-10a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ),
          onClick: () => alert("Profile clicked"),
          title: "View Profile",
        }}
        action2={{
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.961 8.961 0 01-4.187-.982L3 21l1.382-5.528A8.96 8.96 0 013 12c0-3.866 3.582-7 8-7s8 3.134 8 7z"
              />
            </svg>
          ),
          onClick: () => alert("Message clicked"),
          title: "Send Message",
        }}
      />
    </div>
  );
}

export default Friendgrid;
