import "./App.css";
import Signin from "./Components/Signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp } from "./Components/SignUp";
import ForgotPass from "./Components/ForgotPass";
import Userdetail from "./UserDetails/Userdetail";
import Emailverify from "./Components/Emailverify";
import ChangePass from "./Components/ChangePass";
import SideBar from "./SideBar/SideBar";
import Payment from "./SideBarComponents/Payment/Payment";
import Workshop from "./WorkshopModel/Workshop";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/ForgotPass" component={ForgotPass} />
        <Route path="/Userdetail" component={Userdetail} />
        <Route path="/Emailverify" component={Emailverify} />
        <Route path="/ChangePass" component={ChangePass} />
        <Route path="/Dashboard" component={SideBar} />
        <Route path="/payment" component={Payment} />
        <Route path="/workspace" component={Workshop} />
      </Switch>
    </Router>
  );
}

export default App;
