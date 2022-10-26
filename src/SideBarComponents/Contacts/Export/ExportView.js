import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 300,
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function ExportView(props) {
  return (
    <div>
      <Modal
        open={props.openView}
        onClose={props.handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ textAlign: "center" }}
            >
              Download Your Data
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{ fontSize: "13px" }}
            >
              Data is kept safe at private AWS S3 bucket. Data is always
              encrypted at rest & in transit. When you open this dialog, we make
              you a pre-signed URL to get the CSV. Link will expire in ±in 30
              minutes. Export will stay, you just need to refresh this dialog to
              get a new link after expire.
            </Typography>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#FF8E00",
                color: "#ffffff",
                marginLeft: "200px",
                marginTop: "10px",
                textTransform: "inherit"
              }}
            >
              Download Export
            </Button>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Button variant="outlined" color="warning"
              style={{ textTransform: "inherit" }}
            >
              Delete
            </Button>
            <Button
              color="warning"
              style={{ marginLeft: "350px", textTransform: "inherit" }}
              onClick={() => {
                props.handleCloseView();
              }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ExportView;
