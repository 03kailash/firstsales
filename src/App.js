import "./App.css";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import ForgotPass from "./Components/ForgotPass";
import Userdetail from "./UserDetails/Userdetail";
import Emailverify from "./Components/Emailverify";
import ChangePass from "./Components/ChangePass";
import SideBar from "./SideBar/SideBar";

function App() {
  return (
    <Routes>
      <Route path="/SignIn" element={<Signin />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/ForgotPass" element={<ForgotPass />} />
      <Route path="/Userdetail" element={<Userdetail />} />
      <Route path="/Emailverify" element={<Emailverify />} />
      <Route path="/ChangePass" element={<ChangePass />} />
      <Route path="/dashboard" element={<SideBar />} />
    </Routes>
  );
}

export default App;