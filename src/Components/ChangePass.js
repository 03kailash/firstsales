import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./ChangePass.css";

export default function ChangePass() {
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
        <div className="resethead">
          We have sent a password reset code by email to s***@g***. Enter it
          below to reset your password.
        </div>
        <span className="codehead">Code</span>
        <input className="codeverify" type="password" />
        <span className="codehead">New Password</span>
        <input className="codeverify" type="password" />
        <span className="codehead">Enter New Password Again</span>
        <input
          className="codeverify"
          type="password"
          onChange={(event) => {
            if (event.target.value.length >= 9) {
              setCheck({ ...check, len: true });
            } else {
              setCheck({ ...check, len: false });
            }

            if (
              event.nativeEvent.data === event.nativeEvent.data.toUpperCase()
            ) {
              setCheck({ ...check, uc: true });
            } else {
              setCheck({ ...check, uc: false });
            }

            console.log(event.nativeEvent.data.toUpperCase());
          }}
        />

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
        <div className={check.len ? "success" : "fail"}>
          {check.len ? <span>✓</span> : <span>✖</span>} Passwords must match
        </div>

        <button className="changepassbtn">Change password</button>
      </div>
    </div>
  );
}
