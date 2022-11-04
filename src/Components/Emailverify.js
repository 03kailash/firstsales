import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./Emailverify.css";

export default function Emailverify(props) {
  const [otp, setOtp] = useState("");

  const VerifyOTP = () => {
    fetch("http://firstsales.fareof.com/api/verify-otp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        id: props.location.state.verifyID,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          props.history.push("/Userdetail");
        }
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
          <input
            className="verifyinput"
            required
            type="password"
            onChange={(event) => {
              setOtp(event.target.value);
            }}
          />
        </div>
        <button className="confirmacbtn" onClick={VerifyOTP}>
          Confirm account
        </button>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "14px",
            marginTop: "3px",
          }}
        >
          <span className="receivedcode">Didn't receive a code?</span>
          <a className="newcode">Send a new code</a>
        </div>
      </div>
    </div>
  );
}
