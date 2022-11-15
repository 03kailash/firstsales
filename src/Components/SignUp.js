import React, { useEffect, useState } from "react";
import "./SignUp.css";
import firstsales from "../Images/firstsales.jpg";
import { useNavigate } from "react-router-dom";
import { SendOtp } from "../UserServices";

export function SignUp(props) {
  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [len, setLen] = useState(false);
  const [validations, setValidations] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <span className="spantext">Sign up with a new account</span>
          <label className="emailhead">Email</label>
          <input
            className="inputfield"
            placeholder="name@host.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
              setValidations(true);
            }}
            type="email"
          />
          <label className="emailhead">Password</label>
          <input
            placeholder="Password"
            required
            className="inputfield"
            type={"password"}
            onChange={(event) => {
              handleChange(event);
              setValidations(true);
            }}
          />
          <br />
          <br />
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
            </div>
          )}
          <button
            className={
              validations
                ? lc && uc && num && len
                  ? "signupbtn"
                  : "signupbtnDisable"
                : "signupbtn"
            }
            type="submit"
            onClick={async () => {
              if (lc && uc && num && len && (await SendOtp(email))) {
                localStorage.setItem("email", JSON.stringify(email));
                localStorage.setItem("password", JSON.stringify(password));
                navigate("/Emailverify", { state: { Email: email } });
              }
            }}
          >
            Sign up
          </button>
        </form>
        <div>
          <p className="lastp">
            <span>Already have an account?</span>&nbsp;
            <a
              className="signuplink"
              onClick={() => {
                navigate("/");
              }}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
