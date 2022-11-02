import { Box, Button, Modal, TextField } from "@mui/material";
import React from "react";
import "./ResetSMTPmodal.css";

export default function ResetSMTPmodal({ isOpen, isClose }) {
  return (
    <Modal
      keepMounted
      open={isOpen}
      onClose={isClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box className="resetsmtpmodalbox">
        <div className="resetsmtpmodhead">
          You are about to update SMTP credentials
        </div>
        <TextField
          id="outlined-basic"
          label="SMTP Username"
          variant="outlined"
          color="warning"
          fullWidth
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div style={{ padding: "16px 0px" }}>
          <TextField
            id="outlined-basic"
            label="SMTP Password"
            variant="outlined"
            color="warning"
            fullWidth
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            className="smtpmodcancelbtn"
            onClick={() => {
              isClose();
            }}
          >
            Cancel
          </Button>
          <Button className="smtpmodsavebtn">Save</Button>
        </div>
      </Box>
    </Modal>
  );
}
