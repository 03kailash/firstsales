import React from "react";
import "./DomainEditModel.css";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { IconButton } from "@mui/material";
import { useState } from "react";
import ResetSMTPmodal from "./ResetSMTPmodal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip"
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function DomainEditModal(props) {
  const [resetsmtpmod, setResetsmtpmod] = useState(false);
  const closeresetsmtpmodal = () => {
    setResetsmtpmod(false);
  };
  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.close}>
      <Box role="presentation" className="SmtpEditModel">
        <div>
          <IconButton style={{ Margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={props.close} />
          </IconButton>
        </div>
        <div className="SmtpEditModelHead">
      
            <div>
              <Alert severity="warning">
                <AlertTitle>DMARC has issues</AlertTitle>
                Please check DMARC Settings.
              </Alert>
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
            <Button className="newtemplatebtn">Show Sending Schedule</Button>
          </div>
          <div className="AccountstatusText">Account status</div>
          <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
            <Switch color="warning" />
            Enable account
          </div>
          <div className="AccountstatusText">Account Auto Rate Limiting</div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              id="outlined-basic"
              label="24H sending limit"
              variant="outlined"
              type="Number"
              color="warning"
              size="small"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="emailsperTextDiv">
            <span className="emailsperText">
              This mail account may send up to 99 emails per 24 hours
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "48px 0px",
            }}
          >
            <Button
              className="newtemplatebtn"
              onClick={() => {
                setResetsmtpmod(true);
              }}
            >
              Reset SMTP credentials
            </Button>
          </div>
          <div className="AddFromBtN">
            <div className="AccountstatusText" style={{ margin: "0px" }}>
              Sent emails from
            </div>
            <Button className="newtemplatebtn">
              <AddIcon />
              Add From
            </Button>
          </div>
          <div className="MoreVertIconBtn">
            <div style={{ display: "flex" }}>
              <div>
                <MailOutlineIcon color="warning" />
              </div>

              <div>
                <Chip label="Active" color="success" size="small" />
              </div>
            </div>

            <div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </Box>
      <ResetSMTPmodal isOpen={resetsmtpmod} isClose={closeresetsmtpmodal} />
    </Drawer>
  );
}
