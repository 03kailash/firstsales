import React, { useState } from "react";
import "./Content.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Template from "./Template/Template";
import Subject from "./Subject/Subject";
import Signature from "./Signature/Signature";
import Bodyblock from "./Bodyblock/Bodyblock";

export default function Content() {
  const [state, setState] = useState({
    Template: true,
    Subject: false,
    Body: false,
    Signature: false,
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#fafbfb" }}>
      <div style={{ padding: "0px 8px" }}>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AppBar
              position="static"
              color="default"
              style={{
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <Tabs value={value} onChange={handleChange} className="tabHead">
                <Tab
                  label="TEMPLATE"
                  className={value === 0 ? "activeTab" : "inactiveTab"}
                  onClick={() => {
                    setState({ Template: true });
                  }}
                />
                <Tab
                  label="SUBJECT"
                  className={value === 1 ? "activeTab" : "inactiveTab"}
                  onClick={() => {
                    setState({ Subject: true });
                  }}
                />
                <Tab
                  label="BODY BLOCKS"
                  className={value === 2 ? "activeTab" : "inactiveTab"}
                  onClick={() => {
                    setState({ Body: true });
                  }}
                />
                <Tab
                  label="SIGNATURE"
                  className={value === 3 ? "activeTab" : "inactiveTab"}
                  onClick={() => {
                    setState({ Signature: true });
                  }}
                />
              </Tabs>
            </AppBar>
          </div>
        </div>
        {state.Template && <Template />}
        {state.Subject && <Subject />}
        {state.Body && <Bodyblock />}
        {state.Signature && <Signature />}
      </div>
    </div>
  );
}
