import React from "react";
import "./DomainEditModel.css";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { IconButton } from "@mui/material";
import { useState } from "react";
import ResetSMTPmodal from "./ResetSMTPmodal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chip from "@mui/material/Chip";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddFromModel from "./AddFromModel";

export default function DomainEditModal(props) {
  const [resetsmtpmod, setResetsmtpmod] = useState(false);
  const closeresetsmtpmodal = () => {
    setResetsmtpmod(false);
  };
  const [Deletemod, setDeletemod] = useState(false);
  const [EditDetial, setEditDetial] = useState(true);
  const [AddFrom, setAddFrom] = useState(false);
  const CloseAddFrom =()=>{
    setAddFrom(false);
  }

  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.close}>
      <Box role="presentation" className="SmtpEditModel">
        <div>
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={props.close} />
          </IconButton>
        </div>

        {EditDetial && (
          <div className="SmtpEditModelHead">
            <div className="MailAccountText">Mail Account</div>
            <div>
              <Alert severity="warning">
                <AlertTitle>DMARC has issues</AlertTitle>
                Please check DMARC Settings.
              </Alert>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "16px 0px",
              }}
            >
              <div style={{ padding: "16px", backgroundColor: "#f7f7f7" }}>
                <div className="ProfileSection">
                  <AccountCircleIcon
                    color="warning"
                    style={{ fontSize: "40px" }}
                  />
                  <span>somilkaushal89@gmail.com</span>
                </div>
                <Alert severity="success">
                  <AlertTitle>Mail Account is available for use</AlertTitle>
                  Emails may be sent from this account. Inbox will be
                  continuously checked for incoming replies.
                </Alert>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "32px 0px",
              }}
            >
              <Button className="newtemplatebtn">Show Sending Schedule</Button>
            </div>
            <div className="AccountstatusText">Account status</div>
            <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
              <Switch color="warning" />
              Enable account
            </div>
            <div className="AccountstatusText" style={{ marginTop: "16px" }}>
              Account Auto Rate Limiting
            </div>
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
              <div
                className="AccountstatusText"
                style={{ margin: "0px", padding: "0px" }}
              >
                Sent emails from
              </div>
              <Button className="newtemplatebtn"
              onClick={()=>{
                  setAddFrom(true);
              }}
              >
                <AddIcon />
                Add From
              </Button>
            </div>
            <div className="MoreVertIconBtnMaindiv">
              <div className="MoreVertIconBtn">
                <div style={{ display: "flex", gap: "15px" }}>
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
              <div className="fromMailtext">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="FromText">From: </span>
                  <div className="gmailText">bb-somilkaushal89@gmail.com</div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="FromText">Reply to:</span>
                  <div className="gmailText">bb-somilkaushal89@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="DeleteAccountButton">
              <Button
                variant="outlined"
                className="DeleteDomainModel"
                onClick={() => {
                  setDeletemod(true);
                  setEditDetial(false);
                }}
              >
                <DeleteIcon /> Delete Account
              </Button>
            </div>
          </div>
        )}
        {Deletemod && (
          <>
            <div className="SmtpEditModelHead">
              <div className="MailAccounthead">Mail Account</div>
              <div>
                <Alert severity="error">
                  <AlertTitle>Sure to remove? No way back.</AlertTitle>
                  somilkaushal@123{" "}
                </Alert>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "40px",
                  padding:"0px 10px"
                }}
              >
                <Button
                  style={{
                    backgroundColor: " rgb(244, 67, 54)",
                    color: "#ffffff",
                    textTransform: "inherit",
                  }}
                >
                  <DeleteIcon /> Delete Account
                </Button>

                <Button
                  style={{
                    backgroundColor: "#ff8e00",
                    color: "#ffffff",
                    textTransform: "inherit",
                  }}
                  onClick={() => {
                    setEditDetial(true);
                    setDeletemod(false);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </>
        )}
      </Box>
      <ResetSMTPmodal isOpen={resetsmtpmod} isClose={closeresetsmtpmodal} />
      <AddFromModel  isopen ={AddFrom} isclose ={CloseAddFrom}/>
    </Drawer>
  );
}
