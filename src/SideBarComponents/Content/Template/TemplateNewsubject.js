import React, { useState } from "react";
import "./TemplateNewsubject.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import { Button, IconButton, InputAdornment, Snackbar } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import TemplateEditsubject from "./TemplateEditsubject";

export default function TemplateNewsubject({ isopen, isclose }) {
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
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={isclose} />
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
                  marginTop: "10px",
                }}
                onAbort={() => {
                  setAddplace(false);
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
                onClose={() => {
                  setAddplace(false);
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
