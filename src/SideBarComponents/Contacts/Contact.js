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
import ContactDelete from "./ContactUpdate/ContactDelete";
import { Chip, IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContactDeleteAllModel from "./ContactUpdate/ContactDeleteAllModel";
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
  // const [ContactDeletePage, setContactContactDeletePage] = useState(false)
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const [active, setactive] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [SourceDropdown, setSourceDropdown] = useState([])
  const [ContactFilter, setContactFilter] = useState("")
  const [tagDropdown, setTagDropdown] = useState([])
  const [DeleteModelOpen, setDeleteModelOpen] = useState(false);
  const [DeleteAllModelOpen, setDeleteAllModelOpen] = useState(false);
  const [tableInfo, setTableInfo] = useState("")
  const [deleteIcon, setdeleteIcon] = useState("")
  const [selected, setSelected] = React.useState([]);
  // const [checkboxlist, setcheckboxlist] = useState([])
  const handleCloseDeleteModel = () => setDeleteModelOpen(false);
  const handleCloseDeleteAllModel = () => setDeleteAllModelOpen(false);
  const updateclose = () => {
    setContactupdatepage(false)
  }
  const [checked, setChecked] = useState([]);
  
  const FilterSearch = () => {
    fetch(`${ApiURL}/contact-search/${ContactFilter}`, {
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

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      FilterSearch()
    }
  };
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

  const fetchTagContact = () => {
    fetch(`${ApiURL}/get-tag`, {
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
        // setTagDropdown(res.data)
        console.log(res);
      });
  };
  useEffect(() => {
    fetchTagContact();
  }, [])

  const fetchSourceContact = () => {
    fetch(`${ApiURL}/csv-source`, {
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
        setSourceDropdown(res.data);
        // console.log(SourceDropdown);
      });
  };
  useEffect(() => {
    fetchSourceContact();
  }, [])

  const ContactSelect = (id) => {
    fetch(`${ApiURL}/contact-select/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("Response",res);
        // console.log("parsed data",JSON.parse(res.data.tags));
        // let splitedTags = JSON.parse(res.data.tags).split(',')
        // console.log("splitedTags",splitedTags);
        setTableInfo(res.data);
        if (res.status) {
          setContactupdatepage(true)
        }
      });
  };

  const Next = () => {
    localStorage.setItem("contact_id", (contactData))
  }
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
    {
      id: "Checkbox", label: <>
      <Checkbox {...label} /></>, minWidth: "89px"
    },
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
    id
  ) {
    return { Checkbox, NameandEmail, Status, SendReply, OpenClick, Delete, id };
  }
  const ContactRow = contactData.map((item) => {
    return ContactTable(
      <><Checkbox {...label} onClick={(e) => {
        e.stopPropagation()
        setChecked(item.id)
      }}/></>,
      <>
        <div className="EmailTableList">{item.email}</div>
        <div className="FirstAndLastName">{item.first_name} {item.last_name}</div>
        <div><Chip label={item.tags} variant="outlined" color="primary" size="small" /></div>
      </>,
      <Chip label="Cold" color="primary" size="small" />,
      "0/0",
      "0/0",
      <IconButton onClick={(e) => {
        setDeleteModelOpen(true)
        e.stopPropagation()
        setdeleteIcon(item.id)
      }}>
        <DeleteOutlineOutlinedIcon color="none" />

      </IconButton>,
      <>{item.id}</>
    )
  })
  // console.log(checked);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = ContactRow.map((n) => n.Checkbox);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Checkbox) => {
    const selectedIndex = selected.indexOf(Checkbox);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Checkbox);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (Checkbox) => selected.indexOf(Checkbox) !== -1;

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
                >0%</div>
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
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              setContactFilter(e.target.value);
            }}
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
                size="small"
                color="warning"
                value={Tags}
                onChange={handleeChange}
                input={<OutlinedInput label="Tags" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                notched
              >
                {tagDropdown && tagDropdown.map((item, i) =>
                  <MenuItem key={i} value={item.tags}>{item.tags}</MenuItem>
                )}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label" color="warning" shrink>Source</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                size="small"
                color="warning"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Source" color="warning" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
                notched
              >
                {SourceDropdown && SourceDropdown.map((item, i) =>
                  <MenuItem key={i} value={item.csv_source_name}>{item.csv_source_name}</MenuItem>
                )}
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
            // disabled
            onClick={() => {
              // setDeleteModelOpen(true)
              setDeleteAllModelOpen(true)
              // ContactAllDelete(item.id);
              // contactData()
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
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.Checkbox);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      return (
                        <TableRow
                          hover
                          // onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                          onClick={(event) => {
                            Next()
                            handleClick(event, row.Checkbox)
                            ContactSelect(row.id.props.children);
                          }}
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
                          {row.Checkbox}
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
      <ContactUpdate isopen={ContactUpdatepage} isclose={updateclose} tableInfo={tableInfo} />
      <ContactDelete isOpen={DeleteModelOpen} isClose={handleCloseDeleteModel} deleteIcon={deleteIcon} />
      <ContactDeleteAllModel open={DeleteAllModelOpen} close={setDeleteAllModelOpen} />
    </div>
  );
}

export default Contact;
