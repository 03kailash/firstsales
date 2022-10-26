import React from "react";
import "./EmaildeleteModal.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";

export default function EmaildeleteModal({ isOpen, isClose }) {
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSnackOpen(true);
  };
  return (
    <React.Fragment>
      <Modal
        keepMounted
        open={isOpen}
        onClose={isClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box className="emaildelmodalbox">
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontWeight: "500",
              padding: "32px 16px",
              fontSize: "16px",
            }}
          >
            Are you sure to delete? No way back.
          </Typography>

          <Typography
            id="keep-mounted-modal-description"
            style={{ display: "flex", padding: "8px" }}
          >
            <Button
              className="newtemplatebtn"
              style={{ width: "77px" }}
              onClick={isClose}
            >
              Cancel
            </Button>
            <div
              style={{ display: "flex", justifyContent: "end", width: "100%" }}
            >
              <Button
                className="emaildeletebtn"
                onClick={() => {
                  handleClick();
                  isClose();
                }}
              >
                <DeleteIcon fontSize="small" style={{ marginRight: "10px" }} />{" "}
                Delete
              </Button>
            </div>
          </Typography>
        </Box>
      </Modal>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Removed warming config"
      />
    </React.Fragment>
  );
}
