import React, { useState } from "react";
import './RequestExport.css'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Button } from "@mui/material";

function RequestExport(props) {
  const [filter, setfilter] = useState(false);
  return (
    <div>
      <Modal
        open={props.openEx}
        onClose={props.handleCloseEx}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}

      >
        <Box className='RequestMainDiv'>
          <FormGroup>
            <div>
              <FormControlLabel
                color="warning"
                control={<Switch defaultUnChecked color="warning" onClick={() => {
                  setfilter(true)
                }} />}
                label="Filter out by active filters"
              />
              {filter &&
                <p>±0 items to be exported</p>
              }
            </div>
            <div style={{ paddingTop: "20px", display: 'flex', justifyContent: "space-between" }}>
              <div>
                <Button
                  color="warning"
                  onClick={() => {
                    props.handleCloseEx();
                  }}
                >
                  Cancel
                </Button>
              </div>
              <div>
                <Button
                  variant="outlined"
                  color="warning"
                  style={{textTransform:"inherit"}}
                  onClick={() => {
                    props.handleCloseEx();
                  }}
                >
                  Request Export
                </Button>
              </div>
            </div>
          </FormGroup>
        </Box>
      </Modal>
    </div>
  );
}

export default RequestExport;
