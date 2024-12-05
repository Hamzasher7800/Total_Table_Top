import React from "react";
import Input from "../../ResuableComponent/input";
import iconannouce from "../../assets/iconannouce.svg";
import Button from "../../ResuableComponent/Button";
import iconlocation from "../../assets/iconlocation.svg";
function ProfileSection() {
  return (
    <div className="text-white px-6 py-8">
      <div>
        <h2 className="text-lg md:text-xl font-bold">About you</h2>
      </div>
      <div>
        <form>
          {/* Responsive Wrapper */}
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-6">
            {/* Input Section */}
            <div className="space-y-4 ">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Helen"
                  name="firstName"
                  id="firstName"
                  required
                />
                <Input
                  type="text"
                  placeholder="McKeigh"
                  name="lastName"
                  id="lastName"
                  required
                />
              </div>
              <Input
                type="text"
                placeholder="helengamer@gmail.com"
                name="email"
                id="email"
                required
              />
              <div>
                <input
                  className="w-full p-2 bg-transparent border-b-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#f3c15f]"
                  type="text"
                  placeholder="@gmaestories2"
                />
                <p className="text-gray-500 text-sm">
                  Username cannot be changed.
                </p>
              </div>
              <Input
                type="text"
                placeholder="Bristol"
                name="location"
                id="location"
                icon={iconlocation}
              />
            </div>

            {/* Image & Button Section */}
            <div className="flex flex-col items-center space-y-4 mt-8 md:mt-0 md:flex-shrink-0">
              <div className="w-[150px] h-[150px] md:w-[202px] md:h-[202px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={iconannouce}
                  alt="User"
                />
              </div>
              <Button name="Update picture" className="px-4 py-2" />
            </div>
          </div>

          {/* Biography Section */}
          <div className="mt-6">
            <textarea
              className="w-full min-h-[120px] md:min-h-[206px] bg-[#102f47] p-3 text-sm text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f3c15f]"
              placeholder="Your biography (160 characters)"
            />
          </div>
          {/* <button className="">Save changes</button> */}
          <div className="mt-4">
            <button className="bg-[#F77F00] p-2">Save changes</button>
          </div>

          <div className="mt-[82px]">
            <div>
              <h2 className="font-bold text-[30px]">Your password</h2>
            </div>
            <div className="w-full max-w-[625px]  space-y-4">
              <input
                className="w-full p-2 bg-[#102f47]  border-b-2 border-gray-600 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f3c15f] placeholder-gray-400"
                type="text"
                placeholder="Current Password"
              />
               <input
                className="w-full p-2 bg-[#102f47]  border-b-2 border-gray-600 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f3c15f] placeholder-gray-400"
                type="text"
                placeholder="New Password"
              />
               <input
                className="w-full p-2 bg-[#102f47]  border-b-2 border-gray-600 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#f3c15f] placeholder-gray-400"
                type="text"
                placeholder="Confirm new Password"
              />
            </div>
            <div className="mt-4">
            <button className="bg-[#F77F00] p-2">Update changes</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileSection;
