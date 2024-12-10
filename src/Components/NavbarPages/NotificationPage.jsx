import React from "react";
import Navbar from "../App_Layout/Navbar";
import NotificationCard from "../../ResuableComponent/NotificationCard";
import profileImage from "../../assets/iconannouce.svg";
import Footer from "../App_Layout/Footer";

function NotificationPage() {
  const handleAccept = () => {
    alert("Accepted!");
  };

  const handleDismiss = () => {
    alert("Dismissed!");
  };

  return (
    <div className="bg-[#102F47] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow w-full px-4 sm:px-8 lg:px-[140px] py-6">
        {/* Page Title */}
        <div className="text-white mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Notifications <span className="text-[#F77F00]">(6 new)</span>
          </h2>
        </div>

        {/* Notification Cards */}
        <div className="space-y-4">
          <NotificationCard
            profileIcon={profileImage}
            message="John Doe sent you a friend request."
            Button1="Ignore"
            Button2="Accept"
            onAccept={handleAccept}
            onDismiss={handleDismiss}
          />
          <NotificationCard
            profileIcon={profileImage}
            message="Jane Doe commented on your post."
            Button1="Dismiss"
            Button2="View Profile"
            onAccept={handleAccept}
            onDismiss={handleDismiss}
          />
          <NotificationCard
            profileIcon={profileImage}
            message="Mike liked your recent post."
            Button1="Ignore"
            Button2="Read"
            onAccept={handleAccept}
            onDismiss={handleDismiss}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NotificationPage;
