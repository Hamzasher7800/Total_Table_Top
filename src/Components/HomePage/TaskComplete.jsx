import React from "react";
import SetupBar from "../../ResuableComponent/SetupBar";
import iconprogress from "../../assets/iconprogress.svg"
import iconprogress2 from "../../assets/iconprogress2.svg"
import iconprogress3 from "../../assets/iconprogress3.svg"
import iconprogress4 from "../../assets/iconprogress4.svg"
import iconprogress5 from "../../assets/iconprogress5.svg"
function TaskComplete() {
  const handleSkip = () => {
    console.log("Skipped!");
  };

  const handleComplete = () => {
    console.log("Profile Completed!");
  };
  return (
    <div>
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
      <SetupBar
      iconprogress={iconprogress2}
        step="Step 2 of 4"
        description="Find convention to attend"
        completebutton="All conventions"
        skipbutton="Skip"
        onSkip={handleSkip}
        onComplete={handleComplete}
      />
      <SetupBar
      iconprogress={iconprogress3}
      step="Step 3 of 4"
      description="Complete your profile to get started"
      completebutton="Find friends"
        skipbutton="Skip"
      onSkip={handleSkip}
      onComplete={handleComplete}
      />
      <SetupBar
      iconprogress={iconprogress4}
      step="Step 4 of 4"
      description="Take a look at avaliable games"
      completebutton="Game for sale"
        skipbutton="Skip"
      onSkip={handleSkip}
      onComplete={handleComplete}
      />
      <SetupBar
      iconprogress={iconprogress5}
      step="Stepup complete"
      description="You've completed setup, enjoy your account"
      completebutton="Hide this message"
      onComplete={handleComplete}
      />

    </div>
  );
}

export default TaskComplete;
