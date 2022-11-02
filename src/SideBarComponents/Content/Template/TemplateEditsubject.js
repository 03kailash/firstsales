import React, { useState } from "react";
import "./TemplateEditsubject.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import {
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Snackbar,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const options = [
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
];

export default function TemplateEditsubject({ isopen, isclose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Addplaceopen = Boolean(anchorEl);
  const handleClickAddplace = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAddplace = (e) => {
    setSubjectline(subjectline + e.target.innerText);
    setAnchorEl(null);
  };

  const [emoji, setEmoji] = useState(false);
  const [subjectline, setSubjectline] = useState("");
  const [snackOpen, setSnackOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="tempeditsubdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }} onClick={isclose}>
            <ClearOutlinedIcon color="action" />
          </IconButton>
          <br />
          <div className="tempeditsubmaindiv">
            <div className="tempbuilderhead">Subject editing</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "16px",
              }}
            >
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
                value={subjectline}
                onChange={(e) => setSubjectline(e.target.value)}
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
                    setSubjectline(subjectline + item.native)
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
                  marginTop: "4px",
                }}
                aria-label="more"
                id="long-button"
                aria-controls={Addplaceopen ? "long-menu" : undefined}
                aria-expanded={Addplaceopen ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClickAddplace}
              >
                <ControlPointIcon
                  style={{ marginRight: "8px", fontSize: "20px" }}
                />{" "}
                Add personalisation placeholder
              </Button>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={Addplaceopen}
                onClose={handleCloseAddplace}
                PaperProps={{
                  style: {
                    maxHeight: 268,
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem
                    key={option}
                    selected={option === "Pyxis"}
                    onClick={handleCloseAddplace}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <div className="tempeditsubtwobtndiv">
              <Button
                variant="outlined"
                className="archivetempeditsubbtn"
                onClick={() => {
                  isclose();
                  setSnackOpen(true);
                }}
              >
                <Inventory2OutlinedIcon className="archivelogo" /> Move to
                Archive
              </Button>

              <Button variant="outlined" className="Savetempeditsubbtn">
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
