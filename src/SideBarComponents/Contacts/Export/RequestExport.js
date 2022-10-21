import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 191,
  width: 444,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function RequestExport(props) {
  return (
    <div>
      <Modal
        open={props.openEx}
        onClose={props.handleCloseEx}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormGroup>
            <div style={{ width: "444px", height: "90px" }}>
              <FormControlLabel
                color="warning"
                control={<Switch defaultUnChecked />}
                label="Filter out by active filters"
              />
              <p>±0 items to be exported</p>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <Button
                color="warning"
                right="13px"
                onClick={() => {
                  props.handleCloseEx();
                }}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="warning"
                style={{ marginLeft: "157px" }}
              >
                Request Export
              </Button>
            </div>
          </FormGroup>
        </Box>
      </Modal>
    </div>
  );
}

export default RequestExport;
