import React, { useState } from "react";
import "./Signin.css";
import firstsales from "../Images/firstsales.jpg";
import { useEffect } from "react";
import { ApiURL } from "../ApiURL";
import { useNavigate } from "react-router-dom";
import { Login } from "../UserServices";

export default function Signin(props) {
  const [wrongmessage, setWrongmessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        <span className="spantext">Sign in with your email and password</span>
        {localStorage.getItem("token") === null && wrongmessage && (
          <div className="incorrectmessage">
            Incorrect username or password.
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="emailhead">Email</label>
          <input
            className="inputfield"
            placeholder="name@host.com"
            type="email"
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <label className="emailhead">Password</label>
          <input
            placeholder="Password"
            required
            className="inputfield"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <a
            className="forgotpass"
            onClick={() => {
              navigate("/ForgotPass");
            }}
          >
            Forgot your password?
          </a>
          <button
            className="signinbtn"
            type="submit"
            onClick={async () => {
              if (email !== "" && password !== "") {
                const res = await Login(email, password);
                if (res.status) {
                  if (res.status) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("email", email);
                    if (localStorage.getItem("token") !== null) {
                      navigate("/workspace");
                    }
                  } else {
                    localStorage.removeItem("token");
                  }
                } else {
                  setWrongmessage(true);
                }
              }
            }}
          >
            Sign in
          </button>
        </form>
        <div>
          <p className="lastp">
            <span>Need an account?</span>&nbsp;
            <a
              onClick={() => {
                navigate("/SignUp");
              }}
              className="signuplink"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
