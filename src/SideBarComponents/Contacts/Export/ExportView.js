import React from "react";
import './ExportViwe.css'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function ExportView(props) {
  return (
    <div>
      <Modal
        open={props.openView}
        onClose={props.handleCloseView}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}

      >
        <Box className='ExportViweMainDiv'>
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
          <div style={{display:'flex',justifyContent:'center'}}>
            <Button  className="DownloadBtn">
              Download Export
            </Button>
          </div>
          <div style={{ paddingTop: "30px",display:'flex',justifyContent:'space-between'}}>
            <div>
            <Button variant="outlined" color="warning"
              style={{ textTransform: "inherit" }}
            >
              Delete
            </Button>
            </div>
            <div>
            <Button
              color="warning"
              style={{ textTransform: "inherit" }}
              onClick={() => {
                props.handleCloseView();
              }}
            >
              Cancel
            </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ExportView;
