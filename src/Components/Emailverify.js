import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./Emailverify.css";

export default function Emailverify(props) {
  const [otp, setOtp] = useState("");
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

  const VerifyOTP = () => {
    fetch("http://firstsales.fareof.com/public/api/verify-otp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        email: props.location.state.Email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setWrongOTP(!res.status);
        if (res.status) {
          props.history.push({
            pathname: "/Userdetail",
            state: { token: res.token },
          });
        }
      });
  };

  const ResendOTP = () => {
    fetch("http://firstsales.fareof.com/public/api/resend-otp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.location.state.Email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
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
        {wrongOTP && (
          <div className="invalidcode">
            Invalid verification code provided, please try again.
          </div>
        )}
        <br />
        <label className="resethead">
          We have sent a code by email to {email1}***@{email2}***. Enter it
          below to confirm your account.
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
          <a className="newcode" onClick={ResendOTP}>
            Send a new code
          </a>
        </div>
      </div>
    </div>
  );
}
