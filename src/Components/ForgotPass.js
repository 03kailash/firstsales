import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./ForgotPass.css";
import { ApiURL } from "../ApiURL";

export default function Forgotpass(props) {
  const [email, setEmail] = useState("");
  const Forgotpassword = () => {
    fetch(`${ApiURL}/forgot-password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          props.history.push("/Changepass");
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
        <h1 className="forgotpasshead">Forgot your password?</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="resethead">
            Enter your Email below and we will send a message to reset your
            password
          </label>
          <br />
          <br />
          <input
            className="emailverify"
            placeholder="Email"
            required
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          {/* <Link to="/Changepass"> */}
          <button
            type="submit"
            className="resetpassbtn"
            onClick={() => {
              email !== "" && Forgotpassword();
            }}
          >
            Reset my password
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}
