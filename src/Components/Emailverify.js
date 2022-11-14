import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiURL } from "../ApiURL";
import firstsales from "../Images/firstsales.jpg";
import "./Emailverify.css";

export default function Emailverify(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [wrongOTP, setWrongOTP] = useState(false);
  const charAfter = location.state.Email.split("");
  let temp = 0;
  const email1 = location.state.Email[0];
  let email2 = "";
  charAfter.forEach((item, index) => {
    if (item === "@") temp++;
    else if (temp === 1) {
      email2 = item;
      temp = 0;
    }
  });

  const VerifyOTP = () => {
    fetch(`${ApiURL}/verify-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        email: location.state.Email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setWrongOTP(!res.status);
        if (res.status) {
          navigate("/Userdetail");
        }
      });
  };

  const ResendOTP = () => {
    fetch(`${ApiURL}/send-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: location.state.Email,
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
