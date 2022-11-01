import React, { useState } from "react";
import "./TemplateNewsubject.css";
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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TemplateEditsubject from "./TemplateEditsubject";

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

export default function TemplateNewsubject({ isopen, isclose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const Addplaceopen = Boolean(anchorEl);
  const handleClickAddplace = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAddplace = () => {
    setAnchorEl(null);
  };

  const [snackOpen, setSnackOpen] = React.useState(false);

  const [editsubject, setEditsubject] = useState(false);
  const closeEditsubject = () => {
    setEditsubject(false);
  };
  const [addplace, setAddplace] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");

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
        className="tempnewsubdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }} onClick={isclose}>
            <ClearOutlinedIcon color="action" />
          </IconButton>
          <br />
          <div className="tempnewsubmaindiv">
            <div className="tempbuilderhead">Create new Subject</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                label="Subject Line"
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
            <div>
              <Button
                style={{
                  textTransform: "initial",
                  color: "#000000DE",
                  marginTop: "10px",
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
                  borderColor: "#000000DE",
                  textTransform: "capitalize",
                  color: "black",
                }}
                onClick={() => {
                  setEditsubject(true);
                  isclose();
                  setSnackOpen(true);
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <TemplateEditsubject isopen={editsubject} isclose={closeEditsubject} />
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Subject created"
      />
    </React.Fragment>
  );
}
