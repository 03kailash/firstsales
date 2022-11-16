import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Userstep3.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ApiURL } from "../ApiURL";

export default function Userstep3(props) {
  const navigate = useNavigate();
  const [Workspace, setWorkspace] = useState("");


  const WorkspaceApi = () => {
    fetch(`${ApiURL}/createWorkspace`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      },
      body: JSON.stringify({
        first_name: localStorage.getItem("FirstName"),
        last_name: localStorage.getItem("LastName"),
        timezone: localStorage.getItem("Timezone"),
        workspace_name: localStorage.getItem(" Workspace"),
        who_using_firstsale: localStorage.getItem("who_use_First_sales"),
        crm: localStorage.getItem("crm"),
        crm_id: localStorage.getItem("Crm_id"),
        team_id: localStorage.getItem("Teamsize"),
        insdusty_id: localStorage.getItem("Industry"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
       if(res.status){
        navigate("/Dashboard/Profile");
       }
      });
  }

  const RegisterApi = () => {
    fetch(`${ApiURL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
        first_name: localStorage.getItem("FirstName"),
        last_name: localStorage.getItem("LastName"),
        timezone: localStorage.getItem("Timezone"),
        workspace_name: localStorage.getItem(" Workspace"),
        who_using_firstsale: localStorage.getItem("who_use_First_sales"),
        crm: localStorage.getItem("crm"),
        crm_id: localStorage.getItem("Crm_id"),
        team_id: localStorage.getItem("Teamsize"),
        insdusty_id: localStorage.getItem("Industry"),
      }),
    })  
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          navigate("/Dashboard/Profile"); 
          localStorage.setItem("token",res.token);
          setWorkspace(res.Workspace);
        }
      });
  }

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
          <div
            to="/Dashboard/Profile"
            style={{
              display: "flex",
              justifyContent: "center",
              textDecoration: "none",
              width: "100%",
            }}
          >
            <Button onClick={() => {
              WorkspaceApi();
            }} className="btnNext">
              <span>
                {props.activeStep === props.steps.length - 1
                  ? "Finish"
                  : "Next"}
              </span>
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <div

            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="laterbtn"
              onClick={() => {
                RegisterApi();
                // WorkspaceApi();
              }}>I'll do it later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
