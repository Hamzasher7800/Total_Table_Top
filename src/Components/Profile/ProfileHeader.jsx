import React from 'react';
import { useNavigate } from 'react-router-dom';
function ProfileHeader() {
  const navigate = useNavigate();

  const handleSave = () => {
    // Navigate to the standalone confirmation page
    navigate('/ViewProfile');
  };
  return (
    <div>
      <div className="text-white flex justify-between items-center px-4 sm:px-6 md:px-0 mt-4">
        <div className="text-white">
          <h2 className="text-[18px] sm:text-[40px] md:text-[45px] font-bold">Edit Your Profile</h2>
        </div>
        <div>
          <button
          onClick={handleSave} className="text-[13px] sm:text-[15px] md:text-[20px] border-2 border-[#f3c15f] p-2 sm:px-1 sm:py-4 md:px-4 md:py-3">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
