import React from "react";
import firstsales from "../Images/firstsales.jpg";
import "./Emailverify.css";
import { Link } from "react-router-dom";

export default function Emailverify() {
  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        <h3 className="confirmac">Confirm your account</h3>
        <br />
        <label className="resethead">
          We have sent a code by email to s***@g***. Enter it below to confirm
          your account.
        </label>
        <br />
        <br />
        <div style={{ paddingTop: "2px" }}>
          <span className="verifycodehead">Verification code</span>{" "}
          <input className="verifyinput" type="password" />
        </div>
        <button className="confirmacbtn">Confirm account</button>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "14px",
            marginTop: "3px",
          }}
        >
          <span className="receivedcode">Didn't receive a code?</span>
          <Link className="newcode">Send a new code</Link>
        </div>
      </div>
    </div>
  );
}
