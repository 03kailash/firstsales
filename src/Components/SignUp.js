import React, { useState } from "react";
import "./SignUp.css";
import firstsales from "../Images/firstsales.jpg";
import { Link } from "react-router-dom";

export default function SignUp() {
  const handleChange = (event) => {
    var pass = event.target.value;
    var regLc = /(?=.*?[a-z])/;
    var regUc = /(?=.*?[A-Z])/;
    var regNum = /(?=.*?[0-9])/;
    var regLen = /.{9,}/;

    if (regLc.test(pass)) {
      setLc(true);
    } else {
      setLc(false);
    }

    if (regUc.test(pass)) {
      setUc(true);
    } else {
      setUc(false);
    }
    if (regNum.test(pass)) {
      setNum(true);
    } else {
      setNum(false);
    }

    if (regLen.test(pass)) {
      setLen(true);
    } else {
      setLen(false);
    }
  };

  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [len, setLen] = useState(false);

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
            handleChange(event);
          }}
        />
        <br />
        <br />

        <div className={lc ? "success" : "fail"}>
          {lc ? <span>✓</span> : <span>✖</span>} Password must contain a lower
          case letter
        </div>
        <div className={uc ? "success" : "fail"}>
          {uc ? <span>✓</span> : <span>✖</span>} Password must contain an upper
          case letter
        </div>
        <div className={num ? "success" : "fail"}>
          {num ? <span>✓</span> : <span>✖</span>} Password must contain a number
        </div>
        <div className={len ? "success" : "fail"}>
          {len ? <span>✓</span> : <span>✖</span>} Password must contain at least
          9 characters
        </div>

        <Link to="/Userdetail">
          <button className="signupbtn">Sign up</button>
        </Link>
        <br />
        <div>
          <p className="lastp">
            <span>Already have an account?</span>&nbsp;
            <Link to="/" className="signuplink">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
