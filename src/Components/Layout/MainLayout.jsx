import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/App_Layout/Navbar";
import Sidebar from "../../Components/App_Layout/Sidebar";
import Footer from "../../Components/App_Layout/Footer";

function MainLayout() {
  return (
    <div className="bg-[#102f47]">
      <Navbar />
      <div className="lg:flex lg:flex-row sm:flex sm:flex-col lg:pl-[111px] sm:pl-0">
        <Sidebar />
        <div className="flex-1 p-4 md:ml-[67px] sm:ml-[0px] md:mr-[140px] ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
