import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firstsales from "../Images/firstsales.jpg";
import "./ChangePass.css";

export default function ChangePass(props) {
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
  const [newPass1, setNewPass1] = useState("");
  const [newPass2, setNewPass2] = useState("");

  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [len, setLen] = useState(false);
  const [match, setMatch] = useState(false);
  const [validations, setValidations] = useState(false);
  const [wrongOTP, setWrongOTP] = useState(false);
  const charAfter = props.location.state.Email.split("");
  let temp = 0;
  const email1 = props.location.state.Email[0];
  let email2 = "";
  charAfter.forEach((item, index) => {
    if (item === "@") temp++;
    else if (temp === 1) {
      email2 = item;
      temp = 0;
    }
  });
  useEffect(() => {
    if (newPass1 === newPass2) {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [newPass1, newPass2]);

  const Resetpwd = () => {
    fetch("http://firstsales.fareof.com/api/reset-password", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.location.state.Email,
      }),
    });
  };

  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        {wrongOTP && (
          <div className="invalidverifycode">
            Invalid verification code provided, please try again.
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="resethead">
            We have sent a password reset code by email to {email1}***@{email2}
            ***. Enter it below to reset your password.
          </div>
          <span className="codehead">Code</span>
          <input className="codeverify" type="password" required />
          <span className="codehead">New Password</span>
          <input
            className="codeverify"
            required
            type="password"
            onChange={(event) => {
              handleChange(event);
              setNewPass1(event.target.value);
              setValidations(true);
            }}
          />
          <span className="codehead">Enter New Password Again</span>
          <input
            className="codeverify"
            required
            type="password"
            onChange={(event) => {
              setNewPass2(event.target.value);
              setValidations(true);
            }}
          />
          {validations && (
            <div>
              <div className={lc ? "success" : "fail"}>
                {lc ? <span>✓</span> : <span>✖</span>} Password must contain a
                lower case letter
              </div>
              <div className={uc ? "success" : "fail"}>
                {uc ? <span>✓</span> : <span>✖</span>} Password must contain an
                upper case letter
              </div>
              <div className={num ? "success" : "fail"}>
                {num ? <span>✓</span> : <span>✖</span>} Password must contain a
                number
              </div>
              <div className={len ? "success" : "fail"}>
                {len ? <span>✓</span> : <span>✖</span>} Password must contain at
                least 9 characters
              </div>
              <div className={match ? "success" : "fail"}>
                {match ? <span>✓</span> : <span>✖</span>} Passwords must match
              </div>
            </div>
          )}{" "}
          <button className="changepassbtn" onClick={Resetpwd} type="submit">
            Change password
          </button>
        </form>
      </div>
    </div>
  );
}
