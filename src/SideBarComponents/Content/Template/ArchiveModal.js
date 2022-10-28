import React from "react";
import "./ArchiveModal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";

export const ArchiveModal = ({ isOpen, isClose, close }) => {
  const [snackOpen, setSnackOpen] = React.useState(false);

  return (
    <React.Fragment>
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
        <Box className="temparchivemodalbox">
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
              className="builderarchiveCancelbtn"
              size="small"
              onClick={isClose}
            >
              Cancel
            </Button>
            <Button
              className="builderarchiveOkbtn"
              style={{ textTransform: "none", color: "rgb(255 142 0)" }}
              size="small"
              onClick={() => {
                close();
                isClose();
                setSnackOpen(true);
              }}
            >
              Ok
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Template archived"
      />
    </React.Fragment>
  );
};
