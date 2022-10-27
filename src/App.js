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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ForgotPass" element={<ForgotPass />} />
      <Route path="/Userdetail" element={<Userdetail />} />
      <Route path="/Emailverify" element={<Emailverify />} />
      <Route path="/ChangePass" element={<ChangePass />} />
      <Route path="/Dashboard" element={<SideBar />} />
      <Route path='payment' element={<Payment/>}/>
      <Route path="workshop" element={<Workshop/>}/>
    </Routes>
  );
}

export default App;
