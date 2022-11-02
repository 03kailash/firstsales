import React from "react";
import './DomainEditModel.css'
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { IconButton } from "@mui/material";
export default function DomainEditModal(props) {
  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.close}>
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
            <Button className="newtemplatebtn" style={{ width: "100%" }}>
              Save
            </Button>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
