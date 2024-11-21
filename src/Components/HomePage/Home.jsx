import React from 'react'
import SetupBar from '../../ResuableComponent/SetupBar'
import Tags from '../../ResuableComponent/Tags';

import iconannouce from "../../assets/iconannouce.svg";
function Home() {
    const handleSkip = () => {
        console.log("Skipped!");
      };
    
      const handleComplete = () => {
        console.log("Profile Completed!");
      };
  return (
    <div  className=" " >
       <SetupBar
        title="Welcome"
        step="Step 1 of 4"
        description="Complete your profile to get started"
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