import React, { useState } from "react";
import "./TemplateDataEditsignture.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Alert from "@mui/material/Alert";

export default function TempDataEditsignature({ isopen, isclose }) {
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="TempEditsigndrawer"
      >
        <Box role="presentation">
          <ClearOutlinedIcon
            color="action"
            className="closebtn"
            onClick={isclose}
          />
          <br />
          <div className="TempEditsignmaindiv">
            <div className="tempbuilderhead">Signature editing</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Title"
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
                style={{ margin: "16px 0px" }}
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

            <div className="Savetempeditsignbtndiv">
              <Button className="Savecopyeditsignbtn">Save a copy</Button>
              <Button variant="outlined" className="Savetempeditsignbtn">
                Save
              </Button>
            </div>
            <Alert severity="info" style={{ marginBottom: "48px" }}>
              <div style={{ marginLeft: "16px" }}>
                <ul style={{ margin: "0px", padding: "0px" }}>
                  <li>
                    Press SAVE if you want to save changes for all emails where
                    this content is used.
                  </li>
                  <li>
                    Press SAVE A COPY if you want to create and save a new
                    element for this template.
                  </li>
                </ul>
              </div>
            </Alert>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
