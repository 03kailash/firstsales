import React, { useState } from "react";
import "./Subjectedit.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import Snackbar from "@mui/material/Snackbar";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export default function Subjectedit({ isopen, isclose }) {
  const [addplace, setAddplace] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSnackOpen(true);
  };

  function renderRow(props) {
    const { index, style, data } = props;
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton
          onClick={() => {
            setSelectedEmoji(selectedEmoji + data[index]);
            setAddplace(false);
          }}
        >
          <ListItemText primary={`${data[index]}`} />
        </ListItemButton>
      </ListItem>
    );
  }
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="subeditdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={isclose} />
          </IconButton>
          <br />
          <div className="subeditmaindiv">
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
                  itemCount={16}
                  overscanCount={5}
                  itemData={[
                    "{{contact.email}}",
                    "{{contact.emailNormalized}}",
                    "{{contact.firstName}}",
                    "{{contact.lastName}}",
                    "{{contact.gender}}",
                    "{{contact.organization}}",
                    "{{contact.website}}",
                    "{{contact.title}}",
                    "{{contact.phoneNumber}}",
                    "{{contact.address}}",
                    "{{contact.city}}",
                    "{{contact.state}}",
                    "{{contact.country}}",
                    "{{contact.zipCode}}",
                    "{{contact.Contact No}}",
                    "{{contact.Email Id}}",
                  ]}
                >
                  {renderRow}
                </FixedSizeList>
              </Box>
            )}
            <div className="subedittwobtndiv">
              <Button
                variant="outlined"
                className="archivebtnsubedit"
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
        message="Subject archived"
      />
    </React.Fragment>
  );
}
