import React from "react";
import Navbar from "../App_Layout/Navbar";
import FooterComponent from "../../ResuableComponent/FooterComponent";
import Footer from "../App_Layout/Footer";

function FeedbackForm() {
  const handleFormSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#102F47]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-8 lg:px-[140px] py-4">
        <FooterComponent
          heading="Feedback form"
          paragraph="The best way to tell us about your experience using TotallyTableTop is to fill in this form, and we’ll get your feedback right away. Alternatively, you can email hello@totallytabletop.com"
          cardHeading="Tell us what you think"
          inputPlaceholders={["Your Name", "Your Email address"]}
          buttonText="Send feedback"
          onSubmit={handleFormSubmit}
        />
      </div>
      <Footer />
    </div>
  );
}

export default FeedbackForm;

