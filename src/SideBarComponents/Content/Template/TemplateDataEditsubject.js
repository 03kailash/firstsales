import React, { useState } from "react";
import "./TemplateDataEditsubject.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment, Snackbar } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Alert from "@mui/material/Alert";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export default function TemplateDataEditsubject({ isopen, isclose }) {
  const [emoji, setEmoji] = useState(false);
  const [addplace, setAddplace] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

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
        className="TempEditsubdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={isclose} />
          </IconButton>
          <br />
          <div className="TempEditsubmaindiv">
            <div className="tempbuilderhead">Subject editing</div>
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
                style={{ margin: "16px 0px 4px" }}
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
            <div>
              <Button
                style={{
                  textTransform: "initial",
                  color: "#000000DE",
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
            <div className="Savetempeditsubbtndiv">
              <Button
                className="Savecopyeditsubbtn"
                onClick={() => {
                  setSnackOpen(true);
                }}
              >
                Save a copy
              </Button>
              <Button variant="outlined" className="Savetempeditdatasubbtn">
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
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Subject created"
      />
    </React.Fragment>
  );
}
