import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function Editsignature({ isopen, isclose }) {
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  return (
    <React.Fragment>
      <Drawer anchor={"right"} open={isopen} onClose={isclose}>
        <Box sx={{ width: 860 }} role="presentation">
          <ClearOutlinedIcon
            color="action"
            className="closebtn"
            onClick={isclose}
          />
          <br />
          <div style={{ width: "100%", padding: "0px 32px" }}>
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
              />
              <EmojiEmotionsIcon
                color="action"
                style={{ position: "absolute", right: "50px", opacity: "50%" }}
                onClick={() => {
                  if (emoji) {
                    setEmoji(false);
                  } else {
                    setEmoji(true);
                  }
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
                marginTop: "36px",
              }}
            >
              <Button className="Savetemplatebtn">
                Save and Add to Template
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  width: "205px",
                  border: "1px solid rgba(255, 142, 0, 0.5)",
                  textTransform: "capitalize",
                  color: "rgb(255, 142, 0)",
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
