import React from "react";
import './DomainEditModel.css'
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
<<<<<<< Updated upstream
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { IconButton } from "@mui/material";
=======
import { useState } from "react";
import ResetSMTPmodal from "./ResetSMTPmodal";
import { IconButton } from "@mui/material";

>>>>>>> Stashed changes
export default function DomainEditModal(props) {
  const [resetsmtpmod, setResetsmtpmod] = useState(false);
  const closeresetsmtpmodal = () => {
    setResetsmtpmod(false);
  };
  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.close}>
<<<<<<< Updated upstream
      <Box role="presentation" className="SmtpEditModel">
        <div>
          <IconButton style={{ Margin: '8px' }}>
            <ClearOutlinedIcon
              color="action"
              onClick={props.close}
            />
          </IconButton>
        </div>
        <div className="SmtpEditModelHead">
          <div>
            <div>
              <Alert severity="warning">
                <AlertTitle>DMARC has issues</AlertTitle>
                Please check DMARC Settings.
              </Alert>
            </div>
=======
      <Box sx={{ width: 385 }} role="presentation">
        <IconButton onClick={props.close} style={{ padding: "8px" }}>
          <ClearOutlinedIcon color="action" className="closebtn" />
        </IconButton>
        <br />
        <div style={{ width: "100%", padding: "0px 32px" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "56px" }}>
            Edit email warm up
>>>>>>> Stashed changes
          </div>
          <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
            <Switch color="warning" />
            Running
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Button
              className="newtemplatebtn"
              style={{ width: "100%" }}
              onClick={() => {
                setResetsmtpmod(true);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </Box>
      <ResetSMTPmodal isOpen={resetsmtpmod} isClose={closeresetsmtpmodal} />
    </Drawer>
  );
}
