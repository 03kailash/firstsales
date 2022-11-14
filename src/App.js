import "./App.css";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { SignUp } from "./Components/SignUp";
import ForgotPass from "./Components/ForgotPass";
import Userdetail from "./UserDetails/Userdetail";
import Emailverify from "./Components/Emailverify";
import ChangePass from "./Components/ChangePass";
import SideBar from "./SideBar/SideBar";
import Payment from "./SideBarComponents/Payment/Payment";
import Workshop from "./WorkshopModel/Workshop";
import Logoutscreen from "./SideBarComponents/UserProfile/Logoutscreen";
import Profile from "./SideBarComponents/UserProfile/Profile";
import Contact from "./SideBarComponents/Contacts/Contact";
import Content from "./SideBarComponents/Content/Content";
import EmailWarm from "./SideBarComponents/Email Warm Up/EmailWarm";
import Analytics from "./SideBarComponents/Analytics/Analytics";
import Settings from "./SideBarComponents/Settings/Settings";
import Campaign from "./SideBarComponents/Campaign/Campaign";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPass" element={<ForgotPass />} />
      <Route path="/Userdetail" element={<Userdetail />} />
      <Route path="/Emailverify" element={<Emailverify />} />
      <Route path="/ChangePass" element={<ChangePass />} />
      <Route spath="/Dashboard" element={<SideBar />}>
        <Route path="/Dashboard/Profile" element={<Profile />} />
        <Route path="/Dashboard/Contacts" element={<Contact />} />
        <Route path="/Dashboard/Content" element={<Content />} />
        <Route path="/Dashboard/Campaigns" element={<Campaign />} />
        <Route path="/Dashboard/EmailWarmUp" element={<EmailWarm />} />
        <Route path="/Dashboard/Analytics" element={<Analytics />} />
        <Route path="/Dashboard/Settings" element={<Settings />} />
      </Route>
      <Route path="/payment" element={<Payment />} />
      <Route path="/workspace" element={<Workshop />} />
      <Route path="/Logoutscreen" element={<Logoutscreen />} />
    </Routes>
  );
}

export default App;
