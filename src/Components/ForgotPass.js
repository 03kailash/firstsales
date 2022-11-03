import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./ForgotPass.css";
import { Link } from "react-router-dom";

export default function Forgotpass() {
  const [forgotpassword, setForgotPassword] = useState("");
  const Forgotpassword = () => {
    fetch("http://firstsales.fareof.com/public/api/forgot-password", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": "true",
      },
      body: {
        forgotpassword: forgotpassword,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
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
        <input
          className="emailverify"
          placeholder="Email"
          type={"email"}
          onChange={(event) => {
            setForgotPassword(event.target.value);
          }}
        />

        {/* <Link to="/Changepass"> */}
        <button className="resetpassbtn" onClick={Forgotpassword}>
          Reset my password
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}
