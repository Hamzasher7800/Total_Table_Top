

import React from "react";
import ReSidebar from "../../ResuableComponent/ReSidebar";

function Sidebar() {
  const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/activity", label: "Your Activity" },
    { href: "/friends", label: "Friends" },
    { href: "/profile", label: "Your Profile" },
  ];
  const additionalSections = [
        {
          headerLink: "#quicklinks",
          headerText: "Quick links",
          links: [
            { href: "#upcoming", label: "Upcoming conventions" },
            { href: "#games", label: "Games for sale" },
          ],
        },
      ];
  return (
    <div className="lg:w-[331px] sm:w-full mt-[39px]">
      <ReSidebar
        headerTitle="Your turn, Helen"
        navLinks={mainNavLinks}
        additionalSections={additionalSections}
      />
    </div>
  );
}

export default Sidebar;
