import React, { useState } from "react";
import "./Template.css";
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
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import TemplateBuilder from "./TemplateBuilder";
import Chip from "@mui/material/Chip";
import { IconButton } from "@mui/material";
import { CreateTemplate, FilterTemplate } from "../../../UserServices";
import { ApiURL } from "../../../ApiURL";
import { useEffect } from "react";

export default function Template() {
  const [chipData, setChipData] = React.useState([
    { label: "Author: Somil Kaushal" },
  ]);
  const [addtemplate, setAddtemplate] = useState("");
  const [filtertemplate, setFiltertemplate] = useState("");
  const [btn2, setBtn2] = React.useState(false);
  const [aut, setAut] = React.useState("");
  const [author, setAuthor] = useState(false);
  const [temppage, setTempPage] = React.useState(0);
  const [temprowsPerPage, setTempRowsPerPage] = React.useState(10);
  const [tempArchivepage, setTempArchivePage] = React.useState(0);
  const [tempArchiverowsPerPage, setTempArchiveRowsPerPage] =
    React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [chip, setChip] = useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [archivedata, setArchiveData] = useState([]);

  const handleClick = () => {
    setOpen(true);
    setSnackOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const TemphandleChangePage = (event, newPage) => {
    setTempPage(newPage);
  };

  const TemphandleChangeRowsPerPage = (event) => {
    setTempRowsPerPage(+event.target.value);
    setTempPage(0);
  };

  const TempArchivehandleChangePage = (event, newPage) => {
    setTempArchivePage(newPage);
  };

  const TempArchivehandleChangeRowsPerPage = (event) => {
    setTempArchiveRowsPerPage(+event.target.value);
    setTempArchivePage(0);
  };
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      const a = await FilterTemplate(filtertemplate);
      setData(a.data);
    }
  };

  const ViewTemplate = async () => {
    await fetch(`${ApiURL}/template-view`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        workspace_id: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    ViewTemplate();
  }, []);

  const ViewTemplateArchive = async () => {
    await fetch(`${ApiURL}/template-archive-view`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        workspace_id: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setArchiveData(res.data);
      });
  };

  useEffect(() => {
    ViewTemplateArchive();
  }, []);

  const Templatecolumns = [
    { id: "Template", label: "Template", minWidth: "532px" },

    {
      id: "Unsubscribe",
      label: "Unsubscribe",
      minWidth: 112,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "SendReply",
      label: "Send/Reply",
      minWidth: 105,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "OpenClick",
      label: "Open/Click",
      minWidth: 103,
      align: "center",
      format: (value) => value.toFixed(2),
    },
  ];

  function TempcreateData(Template, Unsubscribe, SendReply, OpenClick) {
    return { Template, Unsubscribe, SendReply, OpenClick };
  }

  const Temprows = data.map((item) => {
    return TempcreateData(
      <>
        <div className="titlename">{item.title}</div>
        <div className="titletime">{item.created_at}</div>
      </>,
      "0",
      "0/0",
      "0/0"
    );
  });
  const TemplateArchivecolumns = [
    { id: "Template", label: "Template", minWidth: "490px" },

    {
      id: "Unsubscribe",
      label: "Unsubscribe",
      minWidth: 112,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "SendReply",
      label: "Send/Reply",
      minWidth: 105,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "OpenClick",
      label: "Open/Click",
      minWidth: 103,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "Restore",
      label: "",
    },
  ];

  function TempArchivecreateData(
    Template,
    Unsubscribe,
    SendReply,
    OpenClick,
    Restore
  ) {
    return { Template, Unsubscribe, SendReply, OpenClick, Restore };
  }

  const TempArchiverows = archivedata.map((item) => {
    return TempArchivecreateData(
      <>
        <div className="titlename">
          <Chip
            label="Archived"
            size="small"
            style={{
              color: "rgb(255, 255, 255)",
              backgroundColor: "rgb(120, 144, 156)",
            }}
          />{" "}
          {item.title}
        </div>
        <div className="titletime">{item.deleted_at}</div>
      </>,
      "0",
      "0/0",
      "0/0",
      <IconButton>
        <UnarchiveIcon color="action" />
      </IconButton>
    );
  });
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div className="templatecontainer">
        <div className="containerdiv">
          <div className="contentdiv">
            <div className="contentsearchinputdiv">
              <input
                type="text"
                placeholder="Search"
                className="searchinput"
                onChange={(e) => {
                  setFiltertemplate(e.target.value);
                }}
                onKeyDown={handleKeyDown}
              />
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
                <Button className="templatebtn" onClick={() => setOpen2(true)}>
                  Create new template
                </Button>
                <Drawer
                  anchor={"right"}
                  open={open2}
                  onClose={() => setOpen2(false)}
                  className="newtempdrawer"
                >
                  <Box role="presentation">
                    <IconButton
                      style={{ margin: "8px" }}
                      onClick={() => setOpen2(false)}
                    >
                      <ClearOutlinedIcon color="action" />
                    </IconButton>
                    <br />
                    <div className="tempmaindiv">
                      <div className="newtemphead">Create new Template</div>

                      <TextField
                        label="Template Title"
                        type="text"
                        id="outlined-size-small"
                        color="warning"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"
                        className="titleinput"
                        onChange={(e) => {
                          setAddtemplate(e.target.value);
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "40px",
                        }}
                      >
                        {addtemplate == "" ? (
                          <Button className="newtemplatedisablebtn" disabled>
                            Create new Template
                          </Button>
                        ) : (
                          <Button
                            className="newtemplatebtn"
                            onClick={async () => {
                              if (await CreateTemplate(addtemplate)) {
                                handleClick();
                                setOpen2(false);
                              }
                            }}
                          >
                            Create new Template
                          </Button>
                        )}
                      </div>
                    </div>
                  </Box>
                </Drawer>
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
                  <> Back to templates </>
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
          {btn2 ? (
            <>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {TemplateArchivecolumns.map((column) => (
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
                      {TempArchiverows.slice(
                        tempArchivepage * tempArchiverowsPerPage,
                        tempArchivepage * tempArchiverowsPerPage +
                          tempArchiverowsPerPage
                      ).map((row) => {
                        return (
                          <TableRow
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {TemplateArchivecolumns.map((column) => {
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
                count={TempArchiverows.length}
                rowsPerPage={tempArchiverowsPerPage}
                page={tempArchivepage}
                onPageChange={TempArchivehandleChangePage}
                onRowsPerPageChange={TempArchivehandleChangeRowsPerPage}
              />
            </>
          ) : (
            <>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {Templatecolumns.map((tempcolumn) => (
                          <TableCell
                            key={tempcolumn.id}
                            align={tempcolumn.align}
                            style={{
                              minWidth: tempcolumn.minWidth,
                              padding: "6px 16px",
                            }}
                          >
                            {tempcolumn.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Temprows.slice(
                        temppage * temprowsPerPage,
                        temppage * temprowsPerPage + temprowsPerPage
                      ).map((row) => {
                        return (
                          <TableRow
                            style={{ cursor: "pointer" }}
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {Templatecolumns.map((column) => {
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
                count={Temprows.length}
                rowsPerPage={temprowsPerPage}
                page={temppage}
                onPageChange={TemphandleChangePage}
                onRowsPerPageChange={TemphandleChangeRowsPerPage}
              />
            </>
          )}
        </div>
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          message="Template created"
        />
        <TemplateBuilder
          isOpen={open}
          isClose={handleClose}
          addtemplate={addtemplate}
        />
      </div>
    </div>
  );
}
