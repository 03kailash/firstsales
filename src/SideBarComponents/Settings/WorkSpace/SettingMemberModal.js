import React from "react";
import "./SettingMemberModal.css";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";

export default function SettingMemberModal({ isOpen, isClose }) {
  return (
    <Drawer anchor={"right"} open={isOpen} onClose={isClose}>
      <Box role="presentation">
        <div style={{ width: "90vw", maxWidth: "600px" }}>
          <div style={{ padding: "40px" }}>
            <div className="teammemberhead">Team member settings</div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              color="warning"
              style={{ width: "100%", marginTop: "96px" }}
            />
            <div className="rolediv">Role</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "16px",
              }}
            >
              <Switch defaultChecked color="warning" />
              <span>Is Administrator</span>
            </div>

            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {" "}
              <div style={{ width: "75%", marginTop: "48px" }}>
                <Button className="SaveTeambtn">Save</Button>
              </div>
            </div>

            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "75%", marginTop: "16px" }}>
                <Button className="CancelTeambtn" onClick={isClose}>
                  Cancel
                </Button>
              </div>
            </div>
            <div
              style={{
                maxWidth: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "75%", marginTop: "64px" }}>
                <Button className="DisableTeambtn">Disable Member</Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
