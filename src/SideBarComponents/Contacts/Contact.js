import React, { useEffect, useState } from "react";
import "./Contact.css";
import Export from "./Export/Export";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import AddContact from "./AddContact/AddContact";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import ContactUpdate from "./ContactUpdate/ContactUpdate";
import { ApiURL } from "../../ApiURL";
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
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
  const [snackOpen, setSnackOpen] = useState(false)
  const [personName, setPersonName] = React.useState([]);
  const [contact, setcontact] = React.useState([]);
  const [Tags, setTags] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [pages, setPages] = React.useState(0);
  const [rowsPerPages, setRowsPerPages] = React.useState(10);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [ContactUpdatepage, setContactupdatepage] = useState(false)
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const [active, setactive] = useState(false);
  const [contactData, setContactData] = useState([]);

  const fetchViweContact = () => {
    fetch(`${ApiURL}/contact-view`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      },
      body: JSON.stringify({
        workspace_id: localStorage.getItem("Workspace_id")
      })
    })
      .then((res) => res.json())
      .then((res) => {
        setContactData(res.data);
      });
  };


  useEffect(() => {
    fetchViweContact();
  }, [])

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

  const handleChangePage = (event, newPage) => {
    setPages(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPages(+event.target.value);
    setPages(0);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const Contactcolumns = [
    { id: "Checkbox", label: <><Checkbox {...label} /></>, minWidth: "89px" },

    { id: "NameandEmail", label: " Name and email", minWidth: "343px" },
    {
      id: "Status",
      label: "Status",
      minWidth: 94,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "SendReply",
      label: "Send/Reply",
      minWidth: 131,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "OpenClick",
      label: "Open/Click",
      minWidth: 134,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "Delete",
      label: "",
      minWidth: 91,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    }
  ];
  function ContactTable(
    Checkbox,
    NameandEmail,
    Status,
    SendReply,
    OpenClick,
    Delete,
  ) {
    return { Checkbox, NameandEmail, Status, SendReply, OpenClick, Delete };
  }
  const ContactRow = contactData.map((item) => {
    return ContactTable(
      <> <Checkbox {...label} /></>,
      <>
        <div>{item.email}</div>
        <div>{item.Tags}</div>
      </>,
      "0",
      "0/0",
      "0/0",
      <IconButton>
        <DeleteOutlineOutlinedIcon color="none" />
      </IconButton>
    )
  })
  return (
    <div className="contactHead">
      <div className="contactBody">
        <div>
          <h5 className="ContactText">Contacts</h5>
        </div>
        <hr className="HrDiv" />
        <div className="BoxBody">
          <div className="BoxHead">
            <p className="p_Tag">Total contact: 0</p>
            <p className="p_Tag1">Naver used yet in any compaign: 0 (0%)</p>
            <p className="p_Tag1">Last Submission: Not yet</p>
            <LinearProgress color="warning" />
          </div>
          <div className="BoxHead0">
            <div style={{ display: 'flex' }}>
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
            </div>
            <div style={{ display: 'flex' }} >
              <div className=" BoxHead1">
                <h4 className="InnerDiv">Unsubscribed</h4>
                <h2 className="InnerDiv0">0</h2>
                <div className="block2">0%</div>
              </div>

              <div className=" BoxHead1">
                <h4 className="InnerDiv">Bounced</h4>
                <h2 className="InnerDiv0">0</h2>
                <div className="block3"
                  onClick={() => {
                    setContactupdatepage(true);
                  }}>0%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="status_div">
          <span className="status">Stats update:</span>
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
                <AddOutlinedIcon style={{ fontSize: "20px", marginRight: '10px' }} />
                Add Contact
              </Button>
            </div>
          </div>
        </div>

        {active && (
          <div style={{ display: "flex", marginTop: '8px' }}>
            <FormControl sx={{ m: 1, width: 300 }} className='SelectFeildBox'>
              <InputLabel id="demo-multiple-checkbox-label" color="warning" shrink>
                Contact State/Action
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                multiple
                size="small"
                color="warning"
                value={contact}
                onChange={handlleChange}
                input={<OutlinedInput label="Contact State/Action" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                notched
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label" color="warning" shrink>Tags</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                multiple
                size="small"
                color="warning"
                value={Tags}
                onChange={handleeChange}
                input={<OutlinedInput label="Tags" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                notched
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label" color="warning" shrink>Source</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                multiple
                size="small"
                color="warning"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Source" color="warning" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                notched
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

        <div className="group"
        >
          <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>Group action : </div>
          <Button
            size="small"
            variant="outlined"
            style={{
              textTransform: "capitalize",
              color: "#707070",
              borderColor: "#707070",
            }}
            disabled
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
        <div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxWidth: "100%", overflow: 'auto' }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {Contactcolumns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, padding: "6px 16px", }}

                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ContactRow
                    .slice(pages * rowsPerPages, pages * rowsPerPages + rowsPerPages)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {Contactcolumns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}
                                style={{ padding: "6px 16px " }}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={ContactRow.length}
            rowsPerPage={rowsPerPages}
            page={pages}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          message=" Add Campaign"
        />
      </div>
      <Export open={open} handleClose={handleClose} />
      <AddContact openAdd={openAdd} handleCloseAdd={handleCloseAdd} />
      <ContactUpdate isopen={ContactUpdatepage} />
    </div>
  );
}

export default Contact;
