import React, { useState } from "react";
import "./ContentNewBody.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ContentEditbody from "./ContentEditbody";

export default function ContentNewBody({ isopen, isclose }) {
  const [conEditbody, setConEditbody] = useState(false);
  const closeConEditbody = () => {
    setConEditbody(false);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="ContentNewBodydrawer"
      >
        <Box role="presentation">
          <ClearOutlinedIcon
            color="action"
            className="closebtn"
            onClick={isclose}
          />
          <br />
          <div className="ContentNewBodymaindiv">
            <div className="tempbuilderhead">Create new Body Block</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Body Block Title"
                type="text"
                id="outlined-size-small"
                color="warning"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                className="titleinput"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                className="Savetemplatebtn"
                style={{ width: "210px" }}
                onClick={() => {
                  setConEditbody(true);
                  isclose();
                }}
              >
                Create new Body Block
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <ContentEditbody isopen={conEditbody} isclose={closeConEditbody} />
    </React.Fragment>
  );
}
