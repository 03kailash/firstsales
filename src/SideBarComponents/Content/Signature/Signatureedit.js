import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./Signatureedit.css";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Snackbar from "@mui/material/Snackbar";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export default function Signatureedit({ isopen, isclose }) {
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSnackOpen(true);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="signeditdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={isclose} />
          </IconButton>
          <br />
          <div className="signeditmaindiv">
            <div className="tempbuilderhead" style={{ marginBottom: "40px" }}>
              Signature editing
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Title"
                type="text"
                id="outlined-size-small"
                color="warning"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton style={{ padding: "5px" }}>
                        <EmojiEmotionsIcon
                          color="action"
                          style={{
                            opacity: "50%",
                          }}
                          onClick={() => {
                            if (emoji) {
                              setEmoji(false);
                            } else {
                              setEmoji(true);
                            }
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                size="small"
                className="titleinput"
                value={selectedEmoji}
                onChange={(e) => setSelectedEmoji(e.target.value)}
              />
            </div>
            <div
              style={{ position: "absolute", right: "50px", zIndex: "1000" }}
            >
              {emoji && (
                <Picker
                  data={data}
                  onEmojiSelect={(item) =>
                    setSelectedEmoji(selectedEmoji + item.native)
                  }
                  sets="apple"
                />
              )}
            </div>

            <div className="signedittwobtndiv">
              <Button
                variant="outlined"
                className="archivebtnsignedit"
                style={{ padding: "5px 35px" }}
                onClick={() => {
                  handleClick();
                  isclose();
                }}
              >
                <Inventory2OutlinedIcon className="archivelogo" /> Move to
                Archive
              </Button>

              <Button className="Savetemplatebtn" style={{ width: "205px" }}>
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Signature archived"
      />
    </React.Fragment>
  );
}
