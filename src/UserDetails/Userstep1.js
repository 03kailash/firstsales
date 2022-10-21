import React from "react";
import "./Userstep1.css";
import TextField from "@mui/material/TextField";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Button from "@mui/material/Button";

export default function Userstep1(props) {
  return (
    <div style={{ padding: "0px 16px", maxWidth: "100%" }}>
      <div className="usercontainer">
        <div className="step1head">Tell us about yourself</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
            id="outlined-number"
            label="First Name"
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
            label="Last Name"
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
            label="TimeZone"
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
            alignItems: "center",
            paddingLeft: "145px",
          }}
        >
          <AccessTimeOutlinedIcon color="warning" style={{ opacity: "80%" }} />
          <span className="currenttime">
            Current time at selected timezone: October 5th, Wednesday, 3:20 pm
          </span>
        </div>
        <br />
        <br />
        <h6 className="createworkspace">Create your Workspace</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
            id="outlined-number"
            label="Workspace Name"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={props.handleNext} className="btnNext">
            <span>
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
