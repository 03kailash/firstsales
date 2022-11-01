import React, { useState } from "react";
import "./TemplateNewsignature.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment, Snackbar } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import TemplateEditsignature from "./TemplateEditsignature";

export default function TemplateNewsignature({ isopen, isclose }) {
  const [editsignature, setEditsignature] = useState(false);
  const closeEditsignature = () => {
    setEditsignature(false);
  };
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="TempNewsignaturedrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }} onClick={isclose}>
            <ClearOutlinedIcon color="action" />
          </IconButton>
          <br />
          <div className="TempNewsignmaindiv">
            <div className="tempbuilderhead">Create new Signature</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Signature Title"
                type="text"
                id="outlined-size-small"
                color="warning"
                InputLabelProps={{
                  shrink: true,
                }}
                size="small"
                className="titleinput"
                value={selectedEmoji}
                onChange={(e) => setSelectedEmoji(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ padding: "5px" }}
                        onClick={() => {
                          if (emoji) {
                            setEmoji(false);
                          } else {
                            setEmoji(true);
                          }
                        }}
                      >
                        <EmojiEmotionsIcon
                          color="action"
                          style={{
                            opacity: "50%",
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
                  setEditsignature(true);
                  isclose();
                  setSnackOpen(true);
                }}
              >
                Create new Signature
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <TemplateEditsignature
        isopen={editsignature}
        isclose={closeEditsignature}
      />
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Signature created"
      />
    </React.Fragment>
  );
}
