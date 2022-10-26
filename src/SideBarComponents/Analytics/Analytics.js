import React, { useState } from "react";
import "./Analytics.css";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Reports from "./Reports/Reports";
import SentAnalytics from "./Sent Analytics/SentAnalytics";
import EventStream from "./EventsStream/EventStream";

export default function Analytics() {
  const [state, setState] = useState({
    report: true,
    sent: false,
    eventstream: false,
  });
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "112px",
        backgroundColor: "#fafbfb",
      }}
    >
      <div className="analyticsmaindiv2">
        <div className="emailtabs">
          <div
            style={{
              paddingTop: "32px",
              display: "flex",
              justifyContent: "center",
              overflowX: "auto",
            }}
          >
            <div>
              <AppBar
                position="static"
                color="default"
                style={{
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  marginBottom: "32px",
                }}
              >
                <Tabs value={value} onChange={handleChange} className="tabHead">
                  <Tab
                    label="Reports"
                    className={value === 0 ? "activeTab" : "inactiveTab"}
                    onClick={() => {
                      setState({ report: true });
                    }}
                  />
                  <Tab
                    label="Sent"
                    className={value === 1 ? "activeTab" : "inactiveTab"}
                    onClick={() => {
                      setState({ sent: true });
                    }}
                  />
                  <Tab
                    label="Events Stream"
                    className={value === 2 ? "activeTab" : "inactiveTab"}
                    onClick={() => {
                      setState({ eventstream: true });
                    }}
                  />
                </Tabs>
              </AppBar>
            </div>
          </div>
        </div>
        {state.report && <Reports />}
        {state.sent && <SentAnalytics />}
        {state.eventstream && <EventStream />}
      </div>
    </div>
  );
}
