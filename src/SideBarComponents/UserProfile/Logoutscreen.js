import React from "react";
import firstsales from "../../Images/firstsales.jpg";
import "./Logoutscreen.css";
import { useNavigate } from "react-router-dom";

export default function Logoutscreen(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modelbody">
        <button
          className="signinasbtn"
          onClick={() => {
            navigate("/Dashboard/Profile");
          }}
        >
          Sign In as {localStorage.getItem("email")}
        </button>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "14px",
            marginTop: "3px",
          }}
        >
          <a
            className="difuser"
            onClick={() => {
              navigate("/");
              localStorage.removeItem("email");
            }}
          >
            Sign in as a different user?
          </a>
        </div>
      </div>
    </div>
  );
}
