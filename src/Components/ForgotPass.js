import React from "react";
import firstsales from "../Images/firstsales.jpg";
import "./ForgotPass.css";

export default function Forgotpass() {
  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        <h1 className="forgotpasshead">Forgot your password?</h1>
        <label className="resethead">
          Enter your Email below and we will send a message to reset your
          password
        </label>
        <br />
        <br />
        <input className="emailverify" placeholder="Email" type={"email"} />

        <button className="resetpassbtn">Reset my password</button>
      </div>
    </div>
  );
}
