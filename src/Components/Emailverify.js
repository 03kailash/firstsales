import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ApiURL } from "../ApiURL";
import firstsales from "../Images/firstsales.jpg";
import { ResendOTP, VerifyOTP } from "../UserServices";
import "./Emailverify.css";

export default function Emailverify(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state.Email);
  const [otp, setOtp] = useState();
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
        <button
          className="confirmacbtn"
          onClick={async () => {
            if (!otp == "") {
              if (await VerifyOTP(otp, email)) {
                navigate("/Userdetail");
              } else {
                setWrongOTP(true);
              }
            }
          }}
        >
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
          <a
            className="newcode"
            onClick={() => {
              ResendOTP(email);
            }}
          >
            Send a new code
          </a>
        </div>
      </div>
    </div>
  );
}
