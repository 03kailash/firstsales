import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { IconButton, Tooltip } from "@mui/material";
import {
  CreateTemplate,
  FilterArchiveTemplate,
  FilterTemplate,
  RestoreArchiveTemplate,
  SelectTemplate,
} from "../../../UserServices";
import { ApiURL } from "../../../ApiURL";
import { useEffect } from "react";
import {
  ViewTemplateDataRequest,
  ViewTemplateDataSuccess,
} from "../../../Redux/Actions/ViewTemplateAction";
import {
  ViewTempArchiveDataRequest,
  ViewTempArchiveDataSuccess,
} from "../../../Redux/Actions/ViewTempArchiveAction";

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
  const [archivesnackOpen, setArchiveSnackOpen] = React.useState(false);

  const dispatch = useDispatch();

  const { ViewTemplatedata, ViewTemplateloading, ViewTemplateerror } =
    useSelector((state) => state.ViewTemplatereducer);

  const { ViewTempArchivedata, ViewTempArchiveloading, ViewTempArchiveerror } =
    useSelector((state) => state.ViewTempArchivereducer);

  const { CreateTemplatedata, CreateTemplateloading, CreateTemplateerror } =
    useSelector((state) => state.CreateTemplatereducer);

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
      const tempres = await FilterTemplate(filtertemplate);
      dispatch(ViewTemplateDataSuccess(tempres.data));
      console.log(tempres.data.length);
      const temparchiveres = await FilterArchiveTemplate(filtertemplate);
      dispatch(ViewTempArchiveDataSuccess(temparchiveres.data));
    }
  };

  // useEffect(() => {
  //   if (CreateTemplatedata.status) {
  //     localStorage.setItem("Template_id", CreateTemplatedata.data[0].id);
  //     handleClick();
  //     setOpen2(false);
  //     ViewTemplate();
  //     setAddtemplate("");
  //   }
  // }, [CreateTemplatedata]);

  const ViewTemplate = async () => {
    dispatch(ViewTemplateDataRequest());
    await fetch(`${ApiURL}/template-view`, {
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
        dispatch(ViewTemplateDataSuccess(res.data));
      });
  };

  useEffect(() => {
    ViewTemplate();
  }, []);

  const ViewTemplateArchive = async () => {
    dispatch(ViewTempArchiveDataRequest());
    await fetch(`${ApiURL}/template-archive-view`, {
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
        dispatch(ViewTempArchiveDataSuccess(res.data));
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
    {
      id: "Restore",
      label: "",
    },
  ];

  function TempcreateData(
    Template,
    Unsubscribe,
    SendReply,
    OpenClick,
    Restore,
    id
  ) {
    return { Template, Unsubscribe, SendReply, OpenClick, Restore, id };
  }

  const Temprows = ViewTemplatedata.map((item) => {
    return TempcreateData(
      <>
        <div className="titlename" key={item.id}>
          {item.title}
        </div>
        <div className="titletime">{item.updated_at}</div>
      </>,
      "0",
      "0/0",
      "0/0",
      "",
      <>{item.id}</>
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

  const TempArchiverows = ViewTempArchivedata.map((item) => {
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
      <Tooltip title="Restore item" arrow placement="top">
        <IconButton
          onClick={async () => {
            if (await RestoreArchiveTemplate(item.id)) {
              ViewTemplateArchive();
              ViewTemplate();
              setArchiveSnackOpen(true);
            }
          }}
        >
          <UnarchiveIcon color="action" />
        </IconButton>
      </Tooltip>
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
                onClick={async () => {
                  if (author) {
                    setAuthor(false);
                  } else {
                    setAuthor(true);
                  }
                  const res = await FilterTemplate(filtertemplate);
                  dispatch(ViewTemplateDataSuccess(res.data));
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
                        {addtemplate === "" ? (
                          <Button className="newtemplatedisablebtn" disabled>
                            Create new Template
                          </Button>
                        ) : (
                          <Button
                            className="newtemplatebtn"
                            onClick={async () => {
                              const res = await CreateTemplate(addtemplate);
                              localStorage.setItem(
                                "Template_id",
                                res.data[0].id
                              );
                              if (res.status) {
                                handleClick();
                                setOpen2(false);
                                ViewTemplate();
                                setAddtemplate("");
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
                  className="authorchip"
                />
              );
            })}
          </div>
        )}
        <div style={{ width: "100%" }}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Box sx={{ width: "90%", paddingTop: "64px" }}>
              {ViewTemplateloading && <LinearProgress color="warning" />}
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
                            onClick={async () => {
                              const res = await SelectTemplate(
                                row.id.props.children
                              );
                              if (res.status) {
                                localStorage.setItem(
                                  "Template_id",
                                  res.data.id
                                );
                                setOpen(true);
                              }
                            }}
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
        <Snackbar
          open={archivesnackOpen}
          autoHideDuration={4000}
          onClose={() => setArchiveSnackOpen(false)}
          message="Archived template restored"
        />
        <TemplateBuilder isOpen={open} isClose={handleClose} />
      </div>
    </div>
  );
}
