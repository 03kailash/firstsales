import React from "react";
import "./SettingMemberModal.css";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";

export default function SettingMemberModal({ isOpen, isClose }) {
  return (
    <Drawer anchor={"right"} open={isOpen} onClose={isClose}>
      <Box sx={{ width: 600 }} role="presentation">
        <div style={{ padding: "40px" }}>
          <div className="teammemberhead">Team member settings</div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "100%", marginTop: "96px" }}
          />
          <div className="rolediv">Role</div>
          <Switch defaultChecked color="warning" />
        </div>
      </Box>
    </Drawer>
  );
}
