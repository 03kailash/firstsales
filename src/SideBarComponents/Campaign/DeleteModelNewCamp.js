import React from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
function DeleteModelNewCamp({ isOpen, isClose }) {
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
            Delete this step?
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
      message="Sequence updated"
    />
  </React.Fragment>
  )
}

export default DeleteModelNewCamp
