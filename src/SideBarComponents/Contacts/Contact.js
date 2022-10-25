import React, { useState } from "react";
import "./Contact.css";
import Export from "./Export/Export";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

import { DataGrid } from "@mui/x-data-grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import AddContact from "./AddContact/AddContact";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const columns = [
  { field: "Name And Email", headerName: "Name And Email", width: 342 },
  { field: "Status", headerName: "Status", width: 94 },
  { field: "Send/Reply", headerName: "Send/Reply", type: "number", width: 131 },
  { field: "Open/Click", headerName: "Open/Click", width: 134 },
];

const rows = [];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Ignored",
  "Interrested",
  "Lost",
  "won",
  "Is Cold",
  "Is Warm",
  "Got Email",
  "Is Unsubscribed",
  "Is Bounced",
  "In Campaign",
  "Is Paused",
  "Has Opend",
  "has Clicked",
  "Has Replied",
];

function Contact() {
  const [personName, setPersonName] = React.useState([]);
  const [contact, setcontact] = React.useState([]);
  const [Tags, setTags] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [active, setactive] = useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handlleChange = (event) => {
    const {
      target: { value },
    } = event;
    setcontact(typeof value === "string" ? value.split(",") : value);
  };
  const handleeChange = (event) => {
    const {
      target: { value },
    } = event;
    setTags(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div className="contactHead">
      <div className="contactBody">
        <div>
          <h5 className="ContactText">Contacts</h5>
        </div>
        <hr className="Hr" />
        <div className="BoxBody">
          <div className="BoxHead">
            <p className="p_Tag">Total contact: 0</p>
            <p className="p_Tag1">Naver used yet in any compaign: 0 (0%)</p>
            <p className="p_Tag1">Last Submission: Not yet</p>
            <LinearProgress color="warning" />
          </div>
          <div className="BoxHead0">
            <div className=" BoxHead1">
              <h6 className="InnerDiv">Cold</h6>
              <h5 className="InnerDiv0">0</h5>
              <div className="block0">0%</div>
            </div>

            <div className=" BoxHead1">
              <h4 className="InnerDiv">Warm</h4>
              <h2 className="InnerDiv0">0</h2>
              <div className="block1">0%</div>
            </div>

            <div className=" BoxHead1">
              <h4 className="InnerDiv">Unsubscribed</h4>
              <h2 className="InnerDiv0">0</h2>
              <div className="block2">0%</div>
            </div>

            <div className=" BoxHead1">
              <h4 className="InnerDiv">Bounced</h4>
              <h2 className="InnerDiv0">0</h2>
              <div className="block3">0%</div>
            </div>
          </div>
        </div>
        <div className="status_div">
          <p className="status">status Update</p>
        </div>

        <div className="SearchHead">
          <input
            type="text"
            placeholder="Search"
            className="searchinputcontact"
          />
          <TuneOutlinedIcon
            color="action"
            className="icon_1"
            onClick={() => {
              if (active) {
                setactive(false);
              } else {
                setactive(true);
              }
            }}
          />

          <div className="btnn">
            <div>
              <Button
                variant="outlined"
                color="warning"
                className="btn11"
                onClick={handleOpen}
              >
                Export
              </Button>
            </div>
            <div>
              <Button color="warning" className="btn2" onClick={handleOpenAdd}>
                <AddOutlinedIcon fontSize="20px" />
                Add Contact
              </Button>
            </div>
          </div>
        </div>

        {active && (
          <div style={{ display: "flex" }}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Contact State/Action
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                multiple
                color="warning"
                value={contact}
                onChange={handlleChange}
                input={<OutlinedInput label="Contact State/Action" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Tags</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                multiple
                color="warning"
                value={Tags}
                onChange={handleeChange}
                input={<OutlinedInput label="Tags" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Source</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                multiple
                color="warning"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Source" color="warning" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}

        <div className="group">
          <div>Group action :</div>
          <Button
          size="small"
            variant="outlined"
            style={{
              textTransform: "capitalize",
              color: "#707070",
              borderColor: "#707070",
            }}
          >
            <DeleteOutlineIcon
              className="DeleteIcon"
              color="action"
              fontSize="15px"
            />
            Delete
          </Button>
        </div>
        <div style={{ marginTop: "15px" }}>
          <LinearProgress color="warning" />
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
      <Export open={open} handleClose={handleClose} />
      <AddContact openAdd={openAdd} handleCloseAdd={handleCloseAdd} />
    </div>
  );
}

export default Contact;
