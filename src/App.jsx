import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Home from "./Components/HomePage/Home";
import Activity from "./Components/HomePage/Activity";
import TaskComplete from "./Components/HomePage/TaskComplete";
import Event from "./Components/Convocation/Events";
import EventDetails from "./Components/Convocation/EventDetails";
import FriendsPage from "./Components/Friends/FriendPages";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Setting/Settings";
import ViewProfile from "./Components/Profile/ViewProfile/ViewProfile";
import FeedbackForm from "./Components/FooterPages/FeedbackForm";
import ContactUs from "./ContactUs";
import MessagesPage from "./Components/NavbarPages/MessagesPage";
import NotificationsPage from "./Components/NavbarPages/NotificationPage";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout for pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="activity" element={<Activity />} />
          <Route path="taskcomplete" element={<TaskComplete />}></Route>
          <Route path="friends" element={<FriendsPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting/*" element={<Settings />} />
        </Route>

        <Route path="/convocationevent" element={<Event />}>
          {" "}
        </Route>
        {/* <Route path="/events/:slug" element={<EventDetails />}/> */}
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/ViewProfile" element={<ViewProfile />}></Route>
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/login" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
     
    </Router>
  );
}

export default App;
