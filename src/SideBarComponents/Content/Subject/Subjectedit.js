import React, { useState } from "react";
import "./Subjectedit.css";
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
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Snackbar from "@mui/material/Snackbar";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import { ArchiveSubject } from "../../../UserServices";

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

export default function Subjectedit({ isopen, isclose }) {
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

  const handleClick = () => {
    setSnackOpen(true);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isopen}
        onClose={isclose}
        className="subeditdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }} onClick={isclose}>
            <ClearOutlinedIcon color="action" />
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
                size="small"
                className="titleinput"
                value={subjectline}
                onChange={(e) => setSubjectline(e.target.value)}
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
            <div className="subedittwobtndiv">
              <Button
                variant="outlined"
                className="archivebtnsubedit"
                style={{ padding: "5px 35px" }}
                onClick={async () => {
                  if (await ArchiveSubject()) {
                    handleClick();
                    isclose();
                  }
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
