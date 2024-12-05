import React from 'react'
import Navbar from './Components/App_Layout/Navbar'
import Footer from './Components/App_Layout/Footer'
import FooterComponent from './ResuableComponent/FooterComponent'
function ContactUs() {
    const handleFormSubmit = () =>{
        alert("Form submitted");
    };
  return (
    <div>
         <div className="flex flex-col min-h-screen bg-[#102F47]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-8 lg:px-[140px] py-4">
        <FooterComponent
          heading="Contact us"
          paragraph="The best way to get in touch with us is to fill in this form, and we’ll get your message right away. Alternatively, you can email hello@totallytabletop.com"
          cardHeading="Send us a message"
          inputPlaceholders={["Your Name", "Your Email address"]}
          buttonText="Send message"
          onSubmit={handleFormSubmit}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  )
}

export default ContactUs