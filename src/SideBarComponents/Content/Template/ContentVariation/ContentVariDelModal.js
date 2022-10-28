import React from "react";
import "./ContentVariDelModal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ContentVariDelModal({ isOpen, isClose }) {
  return (
    <Modal
      keepMounted
      open={isOpen}
      onClose={isClose}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="contentvaridelmodalbox">
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
          style={{ fontWeight: "500", padding: "16px 24px" }}
        >
          Delete this content variation?
        </Typography>

        <Typography
          id="keep-mounted-modal-description"
          style={{ display: "flex", justifyContent: "end", padding: "8px" }}
        >
          <Button
            className="varidelmodalCancelbtn"
            size="small"
            onClick={isClose}
          >
            Cancel
          </Button>
          <Button className="varidelmodalOkbtn" size="small">
            Ok
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
}
