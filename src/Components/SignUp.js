import React, { useState } from "react";
import "./SignUp.css";
import firstsales from "../Images/firstsales.jpg";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [check, setCheck] = useState({
    lc: false,
    uc: false,
    num: false,
    len: false,
  });
  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        <span className="spantext">Sign up with a new account</span>
        <label className="emailhead">Email</label>
        <input className="inputfield" placeholder="name@host.com" />
        <label className="emailhead">Password</label>
        <input
          placeholder="Password"
          required
          className="inputfield"
          type={"password"}
          onChange={(event) => {
            if (event.target.value.length >= 9) {
              setCheck({ ...check, len: true });
            } else {
              setCheck({ ...check, len: false });
            }
          }}
        />
        <br />
        <br />

        <div className={check.lc ? "success" : "fail"}>
          {check.lc ? <span>✓</span> : <span>✖</span>} Password must contain a
          lower case letter
        </div>
        <div className={check.uc ? "success" : "fail"}>
          {check.uc ? <span>✓</span> : <span>✖</span>} Password must contain an
          upper case letter
        </div>
        <div className={check.num ? "success" : "fail"}>
          {check.num ? <span>✓</span> : <span>✖</span>} Password must contain a
          number
        </div>
        <div className={check.len ? "success" : "fail"}>
          {check.len ? <span>✓</span> : <span>✖</span>} Password must contain at
          least 9 characters
        </div>

        <button className="signupbtn">Sign up</button>
        <br />
        <div>
          <p className="lastp">
            <span>Already have an account?</span>&nbsp;
            <Link to="/SignIn" className="signuplink">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
