import React from "react";
import "./Userstep3.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link } from "react-router-dom";

export default function Userstep3(props) {
  return (
    <div style={{ padding: "0px 16px", maxWidth: "100%" }}>
      <div className="usercontainerstep3">
        <div className="step3head">Add Gmail mail account</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
            id="outlined-number"
            label="Send email from Name"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
            id="outlined-number"
            label="Your Email"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
            id="outlined-number"
            label="Google App Password"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Alert severity="info" style={{ width: "460px" }}>
            <AlertTitle
              style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: "500" }}
            >
              Google App Passwords
            </AlertTitle>
            With Gmail, you need to create App Password and use it instead of
            your Google Account password.{" "}
            <a
              href="https://support.google.com/accounts/answer/185833"
              className="applipass"
            >
              Application Passwords
            </a>
          </Alert>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <Link
            to="/Dashboard"
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              width: "100%",
            }}
          >
            <Button onClick={props.handleNext} className="btnNext">
              <span>
                {props.activeStep === props.steps.length - 1
                  ? "Finish"
                  : "Next"}
              </span>
            </Button>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <Link to="/Dashboard">
            <button className="laterbtn">I'll do it later</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
