import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}
export default function Subjectedit({ isopen, isclose }) {
  const [addplace, setAddplace] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  return (
    <React.Fragment>
      <Drawer anchor={"right"} open={isopen} onClose={isclose}>
        <Box sx={{ width: 662 }} role="presentation">
          <ClearOutlinedIcon
            color="action"
            className="closebtn"
            onClick={isclose}
          />
          <br />
          <div style={{ width: "100%", padding: "0px 32px" }}>
            <div className="tempbuilderhead" style={{ marginBottom: "40px" }}>
              Subject editing
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Subject"
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
            <div>
              <Button
                style={{
                  textTransform: "initial",
                  color: "#000000DE",
                  marginTop: "5px",
                }}
                onClick={() => {
                  if (addplace) {
                    setAddplace(false);
                  } else {
                    setAddplace(true);
                  }
                }}
              >
                <ControlPointIcon
                  style={{ marginRight: "8px", fontSize: "20px" }}
                />{" "}
                Add personalisation placeholder
              </Button>
            </div>
            {addplace && (
              <Box
                sx={{
                  width: 253,
                  height: 268,
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                style={{
                  zIndex: "1000",
                  borderRadius: " 4px",
                  boxShadow:
                    "rgb(0 0 0 / 31%) 0px 0px 1px 0px, rgb(0 0 0 / 25%) 0px 6px 12px -4px ",
                  position: "absolute",
                }}
              >
                <FixedSizeList
                  height={268}
                  width={253}
                  itemSize={35}
                  itemCount={14}
                  overscanCount={5}
                >
                  {renderRow}
                </FixedSizeList>
              </Box>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "48px",
                gap: "15px",
              }}
            >
              <Button
                variant="outlined"
                className="archivebtn"
                style={{ padding: "5px 35px" }}
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
    </React.Fragment>
  );
}
