import "./App.css";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import ForgotPass from "./Components/ForgotPass";
import Userdetail from "./UserDetails/Userdetail";
import Emailverify from "./Components/Emailverify";
import ChangePass from "./Components/ChangePass";
import SideBar from "./SideBar/SideBar";
import Payment from "./SideBarComponents/Payment/Payment";
import Workshop from "./WorkshopModel/Workshop";
import Profile from "./SideBarComponents/UserProfile/Profile";
import Contact from "./SideBarComponents/Contacts/Contact";
import Content from "./SideBarComponents/Content/Content";
import Campaign from "./SideBarComponents/Campaign/Campaign";
import EmailWarm from "./SideBarComponents/Email Warm Up/EmailWarm";
import Analytics from "./SideBarComponents/Analytics/Analytics";
import Settings from "./SideBarComponents/Settings/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPass" element={<ForgotPass />} />
      <Route path="/Userdetail" element={<Userdetail />} />
      <Route path="/Emailverify" element={<Emailverify />} />
      <Route path="/ChangePass" element={<ChangePass />} />
      <Route path="/Dashboard" element={<SideBar />}>
        <Route path="Profile" element={<Profile />} />
        <Route path="Contacts" element={<Contact />} />
        <Route path="Content" element={<Content />} />
        <Route path="Campaigns" element={<Campaign />} />
        <Route path="EmailWarmUp" element={<EmailWarm />} />
        <Route path="Analytics" element={<Analytics />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/workspace" element={<Workshop />} />
    </Routes>
  );
}

export default App;
