import React, { useState } from "react";
import "./WarmUpAnalyticsModal.css";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Chip from "@mui/material/Chip";
import { FormControl, IconButton, InputLabel, Select } from "@mui/material";

export default function WarmUpAnalyticsModal({ open, close }) {
  const [timerange, setTimerange] = useState("l7d");
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={close}
        className="warmupanadrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={close} />
          </IconButton>
          <br />
          <div className="warmupanamaindiv">
            <div style={{ fontSize: "1.5rem", marginBottom: "56px" }}>
              Warm up analytics: <strong>somilkaushal89@gmail.com</strong>{" "}
              <Chip label="Running" className="warmupanachip" size="small" />
            </div>
            <div style={{ maxWidth: "261px" }}>
              <FormControl size="small" color="warning" fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Time range
                </InputLabel>
                <Select
                  native
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  label="Time range"
                  value={timerange}
                  onChange={(event) => {
                    setTimerange(event.target.value);
                  }}
                >
                  <option value={"l7d"}>Last 7 days</option>
                  <option value={"l14d"}>Last 14 days</option>
                  <option value={"l30d"}>Last 30 days</option>
                  <option value={"l90d"}>Last 90 days</option>
                  <option value={"lw"}>Last week</option>
                  <option value={"l6w"}>Last 6 week</option>
                  <option value={"mtd"}>Month to date</option>
                  <option value={"lm"}>Last month</option>
                  <option value={"l3m"}>Last 3 month</option>
                  <option value={"l6m"}>Last 6 month</option>
                  <option value={"l12m"}>Last 12 month</option>
                  <option value={"ytd"}>Year to date</option>
                  <option value={"ly"}>Last year</option>
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                margin: "32px 0px",
                maxWidth: "1013px",
                width: "100%",
                height: "300px",
                backgroundColor: "#fafbfb",
                borderRadius: "5px",
              }}
            ></div>
            <div className="lastfourdatadiv">
              <p style={{ margin: "0px" }}>
                <strong>Email Warm up started: </strong>October 26, 2022
              </p>
              <p style={{ margin: "0px" }}>
                <strong>Total sent: </strong>2
              </p>
              <p style={{ margin: "0px" }}>
                <strong>Total landed in inbox: </strong>2
              </p>
              <p style={{ margin: "0px" }}>
                <strong>Total moved to Inbox From Spam: </strong>0
              </p>
            </div>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
