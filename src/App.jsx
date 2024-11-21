

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Components/HomePage/Home";
import Activity from "./Components/HomePage/Activity";
// import Friends from "./Components/Friends/Friends";
// import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout for pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="activity" element={<Activity />} />
          {/* <Route path="friends" element={<Friends />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
