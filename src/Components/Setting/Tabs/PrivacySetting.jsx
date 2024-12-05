import React from "react";
import SettingOption from "../../../ResuableComponent/SettingOption";
import Button from "../../../ResuableComponent/Button";

function PrivacySetting() {
  return (
    <div>
      <div className="bg-[#0d2539] p-4">
      <div>
        <p className="text-[16px] sm:text-[14px] md:text-[20px]">
          We take your privacy seriously, and put control in your hands. Use the
          options below to control who can see your different actions and
          updates on Totally TableTop. Please refer to our privacy policy for
          more information about how your data is used.
        </p>
      </div>
      <div className="mt-3">
        <h2 className="text-[26px] font-bold">Who can see me:</h2>
       <div>
       <SettingOption
        heading="Changes to your profile"
        buttonname="Friends only"/>
        <SettingOption
        heading="Your updates"
        buttonname="Friends only"/>
         <SettingOption
        heading="Your new friendships"
        buttonname="Friends only"/>
         <SettingOption
        heading="Your conventionn attendence"
        buttonname="Friends only"/>
         <SettingOption
        heading="Your accomodation"
        buttonname="no one"/>
       </div>
       <div className="flex justify-end items-center ">
         <Button className="bg-[#f77f00]"
         name="Save changes"/>
       </div>
      </div>
      </div>
      <div className="bg-[#0d2539] p-4 mt-4">
      <div className="mt-3">
        <h2 className="text-[26px] font-bold">Allow other users to find you by:</h2>
       <div>
       <SettingOption
        heading="Username"
        buttonname="yes"/>
        <SettingOption
        heading="Real name"
        buttonname="yes"/>
         <SettingOption
        heading="Email address"
        buttonname="yes"/>
         
       </div>
       <div className="flex justify-end items-center ">
         <Button className="bg-[#f77f00]"
         name="Save changes"/>
       </div>
      </div>
      </div>

    </div>
  );
}

export default PrivacySetting;
