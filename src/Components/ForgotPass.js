import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./ForgotPass.css";
import { Link } from "react-router-dom";

export default function Forgotpass() {
  const [email, setEmail] = useState("");
  const Forgotpassword = () => {
    fetch("http://firstsales.fareof.com/api/forgot-password", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: {
        email: email,
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
          required
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
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
