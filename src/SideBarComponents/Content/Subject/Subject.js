import React, { useState } from "react";
import "./Subject.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Chip from "@mui/material/Chip";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Subjectedit from "./Subjectedit";
import { IconButton, InputAdornment, Menu } from "@mui/material";
import { CreateSubject } from "../../../UserServices";
import { ApiURL } from "../../../ApiURL";
import { useEffect } from "react";

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

export default function Subject() {
  const [addsubject, setAddsubject] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const Addplaceopen = Boolean(anchorEl);
  const handleClickAddplace = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAddplace = (e) => {
    setAddsubject(addsubject + e.target.innerText);
    setAnchorEl(null);
  };

  const [Subjectedits, setSubjectedits] = useState(false);
  const closeSubjectedit = () => {
    setSubjectedits(false);
  };

  const [emoji, setEmoji] = useState(false);
  const [chipData, setChipData] = React.useState([
    { label: "Author: Somil Kaushal" },
  ]);

  const [btn2, setBtn2] = React.useState(false);
  const [aut, setAut] = React.useState("");
  const [author, setAuthor] = useState(false);
  const [subjectpage, setSubjectPage] = React.useState(0);
  const [subrowsPerPage, setSubRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const [chip, setChip] = useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSubjectedits(true);
    setSnackOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setSubjectPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setSubRowsPerPage(+event.target.value);
    setSubjectPage(0);
  };

  const ViewSubject = async () => {
    await fetch(`${ApiURL}/subject-view`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        workspace_id: localStorage.getItem("Workspace_id"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setSubjectData(res.data);
      });
  };

  useEffect(() => {
    ViewSubject();
  }, []);

  const Subjectcolumn = [
    { id: "Subject", label: "Subject", minWidth: "532px" },

    {
      id: "Unsubscribe",
      label: "Unsubscribe",
      minWidth: 112,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "SendReply",
      label: "Send/Reply",
      minWidth: 105,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "OpenClick",
      label: "Open/Click",
      minWidth: 103,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "Restore",
      label: "",
    },
  ];

  function SubcreateData(Subject, Unsubscribe, SendReply, OpenClick, Restore) {
    return { Subject, Unsubscribe, SendReply, OpenClick, Restore };
  }

  const Subjectrows = subjectData.map((item) => {
    return SubcreateData(
      <>
        <div className="titlename">{item.title}</div>
        <div className="titletime">{item.updated_at}</div>
      </>,
      "0",
      "0/0",
      "0/0",
      "",
      <>{item.id}</>
    );
  });

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div style={{ maxwidth: "900px" }} className="templatecontainer">
        <div className="containerdiv">
          <div className="contentdiv">
            <div className="contentsearchinputdiv">
              <input type="text" placeholder="Search" className="searchinput" />
              <IconButton
                onClick={() => {
                  if (author) {
                    setAuthor(false);
                  } else {
                    setAuthor(true);
                  }
                }}
              >
                <TuneOutlinedIcon color="action" />
              </IconButton>
            </div>
            <div className="twobtn">
              <React.Fragment>
                <Button className="templatebtn" onClick={() => setOpen(true)}>
                  Create new subject
                </Button>
                <Drawer
                  anchor={"right"}
                  open={open}
                  onClose={handleClose}
                  className="newtempdrawer"
                >
                  <Box role="presentation">
                    <IconButton style={{ margin: "8px" }} onClick={handleClose}>
                      <ClearOutlinedIcon color="action" />
                    </IconButton>
                    <br />
                    <div className="submaindiv">
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
                          value={addsubject}
                          onChange={(e) => setAddsubject(e.target.value)}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          right: "50px",
                          zIndex: "1000",
                        }}
                      >
                        {emoji && (
                          <Picker
                            data={data}
                            onEmojiSelect={(item) =>
                              setAddsubject(addsubject + item.native)
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
                            marginTop: "8px",
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
                        <Button
                          className="Savetemplatebtn"
                          onClick={async () => {
                            const res = await CreateSubject(addsubject);
                            if (res.status) {
                              handleClick();
                              setOpen(false);
                              ViewSubject();
                            }
                          }}
                        >
                          Create new Subject
                        </Button>
                      </div>
                    </div>
                  </Box>
                </Drawer>
                <Subjectedit isopen={Subjectedits} isclose={closeSubjectedit} />
              </React.Fragment>

              <Button
                variant="outlined"
                className="archivebtn"
                onClick={() => {
                  if (btn2) {
                    setBtn2(false);
                  } else {
                    setBtn2(true);
                  }
                }}
              >
                {btn2 ? (
                  <> Back to subjects </>
                ) : (
                  <>
                    <Inventory2OutlinedIcon className="archivelogo" /> Show
                    archive
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {author && (
          <FormControl
            sx={{ mt: 1, mb: 1 }}
            size="small"
            className="authorinput"
          >
            <InputLabel id="demo-select-small" color="warning" shrink>
              Author
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={aut}
              label="Author"
              color="warning"
              notched
            >
              {/* <MenuItem value="">
            <em></em>
          </MenuItem> */}
              <MenuItem
                value={"somil"}
                onClick={() => {
                  setChip(true);
                }}
              >
                Somil Kaushal
              </MenuItem>
            </Select>
          </FormControl>
        )}
        {chip && (
          <div
            sx={{
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {chipData.map((data, index) => {
              return (
                <Chip
                  key={index}
                  label={data.label}
                  onDelete={() => {
                    setChip(false);
                  }}
                  style={{
                    backgroundColor: "#673ab7",
                    color: "#fafbfb ",
                    height: "24px",
                    width: "163px ",
                    marginTop: "12px",
                    maxWidth: "100%",
                    fontSize: " 12px",
                  }}
                />
              );
            })}
          </div>
        )}
        <div style={{ width: "100%" }}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Box sx={{ width: "90%", paddingTop: "64px" }}>
              <LinearProgress color="warning" />
            </Box>
          </div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {Subjectcolumn.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          padding: "6px 16px",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Subjectrows.slice(
                    subjectpage * subrowsPerPage,
                    subjectpage * subrowsPerPage + subrowsPerPage
                  ).map((row) => {
                    return (
                      <TableRow
                        style={{ cursor: "pointer" }}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {Subjectcolumn.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ padding: "6px 16px " }}
                            >
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
            count={Subjectrows.length}
            rowsPerPage={subrowsPerPage}
            page={subjectpage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            color="warning"
          />
        </div>
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          message="Subject created"
        />
      </div>
    </div>
  );
}
