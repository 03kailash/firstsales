import React, { useState } from "react";
import "./Userstep3.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ApiURL } from "../ApiURL";
export default function Userstep3(props) {
  // const [Register,setRegister] = useState("");
 console.log(localStorage.getItem("Crm"))

   const RegisterApi=()=>{
    fetch(`${ApiURL}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
          email:localStorage.getItem("email",JSON.stringify("email")),
          password:localStorage.getItem("password",JSON.stringify("password")),
          first_name:localStorage.getItem(JSON.stringify("FirstName")),
          last_name:localStorage.getItem(JSON.stringify("LastName")),
          timezone:localStorage.getItem(JSON.stringify("Timezone")),
          workspace_name:localStorage.getItem(JSON.stringify("Workspace")),
          who_using_firstsale:localStorage.getItem(JSON.stringify("marketing")),
          crm:localStorage.getItem(JSON.stringify("yes")),
          crm_id:localStorage.getItem(JSON.stringify("id")),
          team_id:localStorage.getItem(JSON.stringify("id")),
          insdusty_id:localStorage.getItem(JSON.stringify("id")),
          // email:"nerta@gmail.com",
          // password:'123456789',
          // first_name:"neeta",
          // last_name:"Bopche",
          // timezone:"india",
          // workspace_name:"yhn",
          // who_using_firstsale:"j",
          // crm:"yes",
          // crm_id:1,
          // team_id:2,
          // insdusty_id:1,
         }),
       })
         .then((res) => res.json())
         .then((res) => {console.log(res)
        
        });
    }
    console.log(localStorage.getItem("email"))
    console.log(localStorage.getItem("password"))
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
            <Button onClick={props.handleNext} className="btnNext">
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
            onClick={()=>{
              RegisterApi();
            }}>I'll do it later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
