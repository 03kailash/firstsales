import React from "react";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function TrakingEditModal(props) {
  return (
    <Drawer anchor={"right"} open={props.Open} onClose={props.Close}>
      <Box sx={{ width: 600 }} role="presentation">
        <IconButton style={{margin:"8px"}}>
        <ClearOutlinedIcon
          color="action"
          className="closebtn"
          onClick={props.Close}
        />
        </IconButton>
        <br />
        <div style={{ width: "100%", padding: "0px 32px" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "56px" }}>
            <div className='SmtpBox'>Add Custom Domain</div>
            <div>
              <p className='textDoaminlist' style={{ paddingTop: '0px' }}>Follow these steps to add new custom domain:</p>
              <p className='textDoaminlist'>1. In your domain's DNS settings point <strong>CNAME</strong> record to  <strong>redirector.clikk2.link</strong></p>
              <p className='textDoaminlist'>2. Add your domain or subdomain which you pointed to <strong> redirector.clikk2.link</strong> here</p>
              <p className='textDoaminlist' style={{ paddingBottom: '24px' }}>3. Wait till DNS will be confirmed.</p>
            </div>
            <div style={{ paddingTop: '20px' }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                }}
              >
                <TextField fullWidth label="Domain pointed to redirector.clikk2.link" id="Link" color="warning" size='small' InputLabelProps={{
                  shrink: true,
                }}
                  style={{ width: "100%" }} />
              </Box>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Button style={{ width: "70%", color: '#ffffff', backgroundColor: '#ff8e00' }}>
              Save
            </Button>

          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button variant="outlined" color="warning" style={{ width: "70%" }}
             onClick={props.Close}
            >
              Cancel
            </Button>

          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Button style={{ width: "70%", backgroundColor: ' rgb(244, 67, 54)', color: '#ffffff' }}>
            <DeleteIcon color="none" /> Delete
            </Button>

          </div>

        </div>
      </Box>
    </Drawer>
  );
}
