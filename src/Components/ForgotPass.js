import React, { useState } from "react";
import firstsales from "../Images/firstsales.jpg";
import "./ForgotPass.css";
import { ApiURL } from "../ApiURL";
import { useNavigate } from "react-router-dom";
import { Forgotpassword } from "../UserServices";

export default function Forgotpass(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  // const Forgotpassword = () => {
  //   fetch(`${ApiURL}/forgot-password`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: email,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.success) {
  //         navigate("/Changepass", { state: { Email: email } });
  //       }
  //     });
  // };
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
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button
            type="submit"
            className="resetpassbtn"
            onClick={async () => {
              if (email !== "") {
                const res = await Forgotpassword(email);
                if (res.success) {
                  navigate("/Changepass", { state: { Email: email } });
                }
              }
            }}
          >
            Reset my password
          </button>
        </form>
      </div>
    </div>
  );
}
