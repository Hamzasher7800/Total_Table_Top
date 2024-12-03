import React from 'react'
import SetupBar from '../../ResuableComponent/SetupBar'
import Tags from '../../ResuableComponent/Tags';
import { useNavigate } from 'react-router-dom';
import iconprogress from "../../assets/iconprogress.svg"
import iconannouce from "../../assets/iconannouce.svg";
function Home() {
    const navigate =useNavigate();
    const handleSkip = () => {
        console.log("Skipped!");
      };
    
      const handleComplete = () => {
        console.log("Profile Completed!");
        navigate("/taskcomplete");
      };
  return (
    <div  className=" " >
       <SetupBar
       iconprogress={iconprogress}
        title="Welcome"
        step="Step 1 of 4"
        description="Complete your profile to get started"
        completebutton="Complete profile"
        skipbutton="Skip"
        onSkip={handleSkip}
        onComplete={handleComplete}
      />
   <div className='mt-[51px]'>
   <Tags
   icon={iconannouce}
   title="Annoucement"/>
   </div>

    </div>
    
  )
}

export default Home