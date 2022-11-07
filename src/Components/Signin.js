import React, { useState } from "react";
import "./Signin.css";
import firstsales from "../Images/firstsales.jpg";
import { useEffect } from "react";

export default function Signin(props) {
  const [wrongmessage, setWrongmessage] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  const Login = async () => {
    await fetch("http://firstsales.fareof.com/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          localStorage.setItem("token", res.token);
        } else {
          localStorage.removeItem("token");
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
              props.history.push("/ForgotPass");
            }}
          >
            Forgot your password?
          </a>
          <button
            className="signinbtn"
            type="submit"
            onClick={async () => {
              if (email !== "" && password !== "") {
                await Login();
                setWrongmessage(true);
                if (localStorage.getItem("token") !== null) {
                  props.history.push("/Dashboard/Profile");
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
                props.history.push("/SignUp");
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
