import React, { useState } from "react";
import Friends from "./Friends";
import FriendsGrid from "./Friendsgrid";
import FriendsHeader from "./FreindsHeader";

function FriendsPage() {
  const [currentPage, setCurrentPage] = useState("friends"); // Default to Friends

  const renderPage = () => {
    switch (currentPage) {
      case "friends":
        return <Friends />;
      case "friendsGrid":
        return <FriendsGrid />;
      default:
        return <Friends />;
    }
  };

  return (
    <div className="friends-page">
      {/* Render header once */}
      <FriendsHeader
        onPageChange={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      {/* Render the current page */}
      {renderPage()}
    </div>
  );
}

export default FriendsPage;
