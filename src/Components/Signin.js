import React, { useState } from "react";
import "./Signin.css";
import firstsales from "../Images/firstsales.jpg";
import { Link } from "react-router-dom";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    fetch("http://firstsales.fareof.com/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
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
        <span className="spantext">Sign in with your email and password</span>
        <label className="emailhead">Email</label>
        <input
          className="inputfield"
          placeholder="name@host.com"
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <label className="emailhead">Password</label>
        <input
          placeholder="Password"
          required
          className="inputfield"
          type={"password"}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Link to="/ForgotPass" className="forgotpass">
          Forgot your password?
        </Link>
        {/* <Link to="/Dashboard/Profile"> */}
        <button className="signinbtn" onClick={Login}>
          Sign in
        </button>
        {/* </Link> */}
        <br />
        <div>
          <p className="lastp">
            <span>Need an account?</span>&nbsp;
            <Link to="/Signup" className="signuplink">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
