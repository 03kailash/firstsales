import React from "react";
import firstsales from ".../Images/firstsales.jpg";
import "./Logoutscreen.css";

export default function Logoutscreen() {
  return (
    <div className="container">
      <div className="imagediv">
        <center>
          <img src={firstsales} alt="logo" className="firstlogo" />
        </center>
      </div>
      <div className="modalbody">
        <button className="confirmacbtn">Confirm account</button>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "14px",
            marginTop: "3px",
          }}
        >
          <a className="newcode">Send a new code</a>
        </div>
      </div>
    </div>
  );
}
