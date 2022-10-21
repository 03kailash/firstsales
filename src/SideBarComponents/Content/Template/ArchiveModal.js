import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 444,
  height: 161,
  innerHeight: 171,
  boxShadow: 24,
  bgcolor: "background.paper",
  borderRadius: "4px",
  margin: "8px",
};

export const ArchiveModal = ({ isOpen, isClose }) => {
  return (
    <Modal keepMounted open={isOpen} onClose={isClose}>
      <Box sx={style}>
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
          style={{ fontWeight: "500", padding: "16px 24px" }}
        >
          Are you sure?
        </Typography>
        <Typography
          id="keep-mounted-modal-description"
          style={{
            padding: "20px 24px",
            paddingTop: "0px",
            color: " rgba(0, 0, 0, 0.6)",
          }}
        >
          Are you sure to archive y?
        </Typography>
        <Typography
          id="keep-mounted-modal-description"
          style={{ display: "flex", justifyContent: "end", padding: "8px" }}
        >
          <Button
            className=""
            style={{ textTransform: "none", color: "rgb(255 142 0)" }}
            size="small"
            onClick={isClose}
          >
            Cancel
          </Button>
          <Button
            className=""
            style={{ textTransform: "none", color: "rgb(255 142 0)" }}
            size="small"
          >
            Ok
          </Button>
        </Typography>
      </Box>
    </Modal>
  );
};
