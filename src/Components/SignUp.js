import React, { useEffect, useState } from "react";
import "./SignUp.css";
import firstsales from "../Images/firstsales.jpg";
import { Link } from "react-router-dom";

export function SignUp() {
  const [lc, setLc] = useState(false);
  const [uc, setUc] = useState(false);
  const [num, setNum] = useState(false);
  const [len, setLen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const callApi = () => {
    fetch("http://firstsales.fareof.com/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: "vvhbhv",
        last_name: "Bopche",
        dob: "2000-03-16",
        email: "abcd@gmail.com",
        gender: "0",
        image: "image",
        timezone: "Asiya",
        crm_id: "1",
        team_id: "1",
        insdusty_id: "1",
        workspace_name: "xyz",
        is_admin: "1",
        password: 123456,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const SendOtp = ()=>{
    fetch("http://firstsales.fareof.com/api/send-otp",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       email:email
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
   
  }

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
        <form>
          <span className="spantext">Sign up with a new account</span>
          <label className="emailhead">Email</label>
          <input
            className="inputfield"
            placeholder="name@host.com"
            required
            onChange={(e) => {
              setEmail(e.target.value);
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
            }}
          />
          <br />
          <br />

          <div className={lc ? "success" : "fail"}>
            {lc ? <span>✓</span> : <span>✖</span>} Password must contain a lower
            case letter
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

          {/* <Link
            to={
              email !== "" &&
              password !== "" &&
              lc &&
              uc &&
              num &&
              len &&
              "/Userdetail"
            }
          > */}
          <button className="signupbtn" type="submit"
          onClick={()=>{
            SendOtp();
          }}
          >
            Sign up
          </button>
          {/* </Link> */}
        </form>
        <br />
        <div>
          <p className="lastp">
            <span>Already have an account?</span>&nbsp;
            {/* <Link to="/" className="signuplink"> */}
            <a
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              Sign in
            </a>
            {/* </Link> */}
          </p>
        </div>
      </div>
    </div>
  );
}
