import React, { useState } from "react";
import "./Settings.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EmailDomain from "./Emails &domain/EmailDomain";
import Workspace from "./WorkSpace/Workspace";
import Billing from "./Billing/Billing";

export default function Settings() {
  const [state, setState] = useState({
    workspace: true,
    emaildomain: false,
    billing: false,
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{ backgroundColor: "#fafbfb", minHeight: "100vh", width: "100%" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="setdiv">
          <div className="sethead">Settings</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div>
              <AppBar
                position="static"
                color="default"
                style={{
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className="SettingHead"
                >
                  <Tab
                    label="Workspace"
                    className={value === 0 ? "setactiveTab" : "setinactiveTab"}
                    onClick={() => {
                      setState({ workspace: true });
                    }}
                  />
                  <Tab
                    label="Emails & Domains"
                    className={value === 1 ? "setactiveTab" : "setinactiveTab"}
                    onClick={() => {
                      setState({ emaildomain: true });
                    }}
                  />
                  <Tab
                    label="Billing"
                    className={value === 2 ? "setactiveTab" : "setinactiveTab"}
                    onClick={() => {
                      setState({ billing: true });
                    }}
                  />
                </Tabs>
              </AppBar>
            </div>
          </div>
          <hr
            style={{
              margin: "0px 0px 40px",
              borderColor: "rgba(0, 0, 0, 0.12",
              borderStyle: "solid",
              borderWidth: "0px 0px thin",
            }}
          />
          {state.workspace && <Workspace />}
          {state.emaildomain && <EmailDomain />}
          {state.billing && <Billing />}
        </div>
      </div>
    </div>
  );
}
