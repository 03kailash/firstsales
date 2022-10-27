import React, { useEffect, useState } from "react";
import "./TemplateBuilder.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ErrorIcon from "@mui/icons-material/Error";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BarChartIcon from "@mui/icons-material/BarChart";
import Chip from "@mui/material/Chip";
import { ArchiveModal } from "./ArchiveModal";
import TemplateAddsubject from "./TemplateAddsubject";
import Switch from "@mui/material/Switch";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TemplateAddsignature from "./TemplateAddsignature";
import CachedIcon from "@mui/icons-material/Cached";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentVariDelModal from "./ContentVariation/ContentVariDelModal";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ConVarAddBody from "./ContentVariation/ConVarAddBody";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CreateIcon from "@mui/icons-material/Create";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import IconButton from "@mui/material/IconButton";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { InputAdornment } from "@mui/material";

const arr = [
  {
    subject: "somil",
    status: (
      <Chip
        label="Active"
        style={{
          backgroundColor: "rgb(76, 175, 80)",
          color: "rgb(255, 255, 255)",
          height: "24px",
        }}
      />
    ),
  },
  {
    subject: "hv",
    status: (
      <Chip
        label="Active"
        style={{
          backgroundColor: "rgb(76, 175, 80)",
          color: "rgb(255, 255, 255)",
          height: "24px",
        }}
      />
    ),
  },
];

export default function TemplateBuilder({ isOpen, isClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuclose = () => {
    setAnchorEl(null);
  };
  const [adcontentbody, setAdcontentbody] = useState(false);
  const closecontentbody = () => {
    setAdcontentbody(false);
  };
  const [contentdata, setContentdata] = useState(true);
  const [dark, setDark] = useState(true);
  const [blockview, setBlockview] = useState(true);
  const [letterview, setLetterview] = useState(false);
  const [alignment, setAlignment] = React.useState("web");

  const handleChange2 = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [adsubject, setadsubject] = useState(false);

  const handleclose2 = () => {
    setadsubject(false);
  };

  const [adsignature, setadsignature] = useState(false);

  const handleclose3 = () => {
    setadsignature(false);
  };

  const [state, setState] = useState({
    Subject: true,
    Contentvariation: false,
    Signature: false,
  });
  const [value, setValue] = React.useState(0);
  const [contentValue, setContentValue] = React.useState(0);
  const [sliderCount, setSliderCount] = React.useState(1);
  const [sliderArr, setSliderArr] = React.useState([
    `Content Variation ${sliderCount}`,
  ]);

  const [archiveModal, setArchiveModal] = React.useState(false);
  const handleClose = () => {
    setArchiveModal(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const contentHandleChange = (event, newValue) => {
    setContentValue(newValue);
  };

  const [contentdelModal, setContentdelModal] = React.useState(false);
  const contentvaridelete = () => {
    setContentdelModal(false);
  };

  useEffect(() => {
    if (sliderCount !== 1)
      setSliderArr((oldarray) => [
        ...oldarray,
        `Content Variation #${sliderCount}`,
      ]);
  }, [sliderCount]);

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={isClose}
        className="tempbuiltdrawer"
      >
        <Box role="presentation">
          <ClearOutlinedIcon
            color="action"
            className="closebtn"
            onClick={isClose}
          />
          <br />
          <div style={{ width: "100%", padding: "0px 48px" }}>
            <div className="tempbuilderhead">Template Builder</div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button className="Savetemplatebtn">Save template</Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TextField
                  type="text"
                  id="outlined-size-small"
                  color="warning"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="small"
                  className="titlefield"
                  placeholder="Template's Title"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton style={{ padding: "5px" }}>
                          <CreateOutlinedIcon color="action" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                className="movearchive"
                onClick={() => setArchiveModal(true)}
              >
                Move to archive
              </Button>
            </div>
            <hr
              style={{
                marginTop: "32px",
                marginBottom: "0px",
                borderBottom: "none",
              }}
            />
            <div style={{ display: "flex" }}>
              <div style={{ width: "715px" }}>
                <AppBar
                  position="static"
                  color="default"
                  style={{
                    boxShadow: "none",
                    backgroundColor: "transparent",
                    width: "715px",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    className="tabHead"
                  >
                    <Tab
                      label="SUBJECT "
                      className={value === 0 ? "active" : "inactive"}
                      onClick={() => {
                        setState({ Subject: true });
                      }}
                      icon={
                        <Tooltip title="No subject added" placement="top">
                          <ErrorIcon className="erroricon" />
                        </Tooltip>
                      }
                      iconPosition="end"
                    />
                    <Tab
                      label="CONTENT VARIATION"
                      className={value === 1 ? "active" : "inactive"}
                      onClick={() => {
                        setState({ Contentvariation: true });
                      }}
                      icon={
                        <Tooltip title="You need to add body" placement="top">
                          <ErrorIcon className="erroricon" />
                        </Tooltip>
                      }
                      iconPosition="end"
                    />
                    <Tab
                      label="SIGNATURE "
                      className={value === 2 ? "active" : "inactive"}
                      onClick={() => {
                        setState({ Signature: true });
                      }}
                      icon={
                        <Tooltip title="No signature added" placement="top">
                          <ErrorIcon className="erroricon" />
                        </Tooltip>
                      }
                      iconPosition="end"
                    />
                  </Tabs>
                </AppBar>
                <div className="subdata">
                  {state.Subject && (
                    <TableContainer
                      component={Paper}
                      style={{ padding: "24px" }}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ padding: "6px 16px", width: "410px" }}
                            >
                              Subject
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ padding: "6px 16px", width: "85px" }}
                            >
                              Status
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ padding: "6px 16px", width: "91px" }}
                            >
                              Analytics
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ padding: "6px 16px", width: "72px" }}
                            ></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {arr.map((row) => (
                            <TableRow
                              key={row.subject}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.subject}
                              </TableCell>
                              <TableCell align="center">{row.status}</TableCell>
                              <TableCell align="center">
                                {
                                  <IconButton>
                                    <Tooltip
                                      title="Coming soon"
                                      placement="top"
                                    >
                                      <BarChartIcon
                                        color="action"
                                        fontSize="small"
                                      />
                                    </Tooltip>
                                  </IconButton>
                                }
                              </TableCell>
                              <TableCell align="center">
                                {
                                  <IconButton onClick={handleClick}>
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                <Menu
                                  id="fade-menu"
                                  MenuListProps={{
                                    "aria-labelledby": "fade-button",
                                  }}
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={menuclose}
                                  style={{ boxShadow: "none" }}
                                >
                                  <MenuItem
                                    onClick={menuclose}
                                    style={{ gap: "12px" }}
                                  >
                                    <CreateIcon color="action" /> Edit subject
                                  </MenuItem>
                                  <MenuItem
                                    onClick={menuclose}
                                    style={{ gap: "12px" }}
                                  >
                                    <PauseCircleOutlineIcon color="action" />
                                    Pause subject
                                  </MenuItem>
                                  <MenuItem
                                    onClick={menuclose}
                                    style={{ gap: "12px" }}
                                  >
                                    <DeleteIcon color="action" /> Remove subject
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <hr
                        style={{
                          marginTop: "0px",
                          marginBottom: "32px",
                          color: "#e0e0e0",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          className="Savetemplatebtn"
                          onClick={() => {
                            setadsubject(true);
                          }}
                        >
                          <AddIcon
                            style={{ fontSize: "20px", marginRight: "7px" }}
                          />
                          Add subject
                        </Button>
                      </div>
                    </TableContainer>
                  )}
                  {state.Signature && (
                    <TableContainer
                      component={Paper}
                      style={{ padding: "24px" }}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{ padding: "6px 16px", width: "410px" }}
                            >
                              Signature
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ padding: "6px 16px", width: "85px" }}
                            >
                              Status
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ padding: "6px 16px", width: "91px" }}
                            >
                              Analytics
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ padding: "6px 16px", width: "72px" }}
                            ></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {arr.map((row) => (
                            <TableRow
                              key={row.subject}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.subject}
                              </TableCell>
                              <TableCell align="center">{row.status}</TableCell>
                              <TableCell align="center">
                                {
                                  <IconButton>
                                    <Tooltip
                                      title="Coming soon"
                                      placement="top"
                                    >
                                      <BarChartIcon
                                        color="action"
                                        fontSize="small"
                                      />
                                    </Tooltip>
                                  </IconButton>
                                }
                              </TableCell>
                              <TableCell align="center">
                                {
                                  <IconButton onClick={handleClick}>
                                    <MoreVertIcon />
                                  </IconButton>
                                }
                                <Menu
                                  id="fade-menu"
                                  MenuListProps={{
                                    "aria-labelledby": "fade-button",
                                  }}
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={menuclose}
                                >
                                  <MenuItem
                                    onClick={menuclose}
                                    style={{ gap: "12px" }}
                                  >
                                    <CreateIcon color="action" /> Edit signature
                                  </MenuItem>
                                  <MenuItem
                                    onClick={menuclose}
                                    style={{ gap: "12px" }}
                                  >
                                    <PauseCircleOutlineIcon color="action" />
                                    Pause signature
                                  </MenuItem>
                                  <MenuItem
                                    onClick={menuclose}
                                    style={{ gap: "12px" }}
                                  >
                                    <DeleteIcon color="action" /> Remove
                                    signature
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      <hr
                        style={{
                          marginTop: "0px",
                          marginBottom: "32px",
                          color: "#e0e0e0",
                        }}
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          className="Savetemplatebtn"
                          onClick={() => {
                            setadsignature(true);
                          }}
                        >
                          <AddIcon
                            style={{ fontSize: "20px", marginRight: "7px" }}
                          />
                          Add Signature
                        </Button>
                      </div>
                    </TableContainer>
                  )}
                  {state.Contentvariation && (
                    <Box
                      sx={{
                        maxWidth: { xs: 320, sm: 715 },
                        bgcolor: "background.paper",
                      }}
                    >
                      <Tabs
                        value={contentValue}
                        onChange={contentHandleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        style={{ padding: "0px 50px" }}
                        className="contentvariationtabs"
                      >
                        {sliderArr.map((item) => {
                          return (
                            <Tab
                              key={item}
                              label={item}
                              icon={
                                <Tooltip
                                  title="Body has no content"
                                  placement="top"
                                >
                                  <ErrorIcon className="erroricon" />
                                </Tooltip>
                              }
                              iconPosition="end"
                              onClick={() => {
                                setContentdata(true);
                              }}
                            />
                          );
                        })}
                        <Tab
                          onClick={() => {
                            setSliderCount(sliderCount + 1);
                          }}
                          label="Add Content Variation"
                          style={{ textTransform: "none" }}
                          icon={<AddIcon />}
                          iconPosition="start"
                        />
                      </Tabs>
                      {contentdata && (
                        <TableContainer
                          component={Paper}
                          style={{
                            padding: "8px 24px 24px",
                          }}
                        >
                          <Table
                            sx={{ minWidth: 667 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  style={{
                                    padding: "6px 16px",
                                    width: "13%",
                                  }}
                                  align="center"
                                >
                                  Position
                                </TableCell>
                                <TableCell
                                  style={{ padding: "6px 16px", width: "50%" }}
                                >
                                  Body-Block
                                </TableCell>
                                <TableCell
                                  style={{ padding: "6px 16px", width: "13%" }}
                                  align="center"
                                >
                                  Analytics
                                </TableCell>
                                <TableCell
                                  align="center"
                                  style={{ padding: "6px 16px", width: "10%" }}
                                ></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {arr.map((row) => (
                                <TableRow
                                  key={row.subject}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                  >
                                    <ArrowUpwardIcon
                                      color="action"
                                      style={{ opacity: "50%" }}
                                    />
                                    <ArrowDownwardIcon
                                      color="action"
                                      style={{ opacity: "50%" }}
                                    />
                                  </TableCell>
                                  <TableCell>
                                    {row.status}
                                    <WarningAmberRoundedIcon className="warningicon" />
                                    <div className="nocontent">
                                      The block doesn't have any content.{" "}
                                      <span
                                        style={{
                                          textDecoration: "underline",
                                          fontWeight: "600",
                                          cursor: "pointer",
                                        }}
                                      >
                                        View.
                                      </span>
                                    </div>
                                  </TableCell>
                                  <TableCell align="center">
                                    {
                                      <IconButton>
                                        <Tooltip
                                          title="Coming soon"
                                          placement="top"
                                        >
                                          <BarChartIcon
                                            color="action"
                                            fontSize="small"
                                          />
                                        </Tooltip>
                                      </IconButton>
                                    }
                                  </TableCell>
                                  <TableCell align="center">
                                    {
                                      <IconButton onClick={handleClick}>
                                        <MoreVertIcon />
                                      </IconButton>
                                    }
                                    <Menu
                                      id="fade-menu"
                                      MenuListProps={{
                                        "aria-labelledby": "fade-button",
                                      }}
                                      anchorEl={anchorEl}
                                      open={open}
                                      onClose={menuclose}
                                      style={{ boxShadow: "none" }}
                                    >
                                      <MenuItem
                                        onClick={menuclose}
                                        style={{ gap: "12px" }}
                                      >
                                        <CreateIcon color="action" /> Edit body
                                        block
                                      </MenuItem>
                                      <MenuItem
                                        onClick={menuclose}
                                        style={{ gap: "12px" }}
                                      >
                                        <CheckBoxIcon color="action" />
                                        Use as pre-text
                                      </MenuItem>
                                      <MenuItem
                                        onClick={menuclose}
                                        style={{ gap: "12px" }}
                                      >
                                        <PauseCircleOutlineIcon color="action" />
                                        Pause body block
                                      </MenuItem>
                                      <MenuItem
                                        onClick={menuclose}
                                        style={{ gap: "12px" }}
                                      >
                                        <DeleteIcon color="action" /> Archive
                                        subject
                                      </MenuItem>
                                    </Menu>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                          <hr
                            style={{
                              marginTop: "0px",
                              marginBottom: "32px",
                              color: "#e0e0e0",
                            }}
                          />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              className="Savetemplatebtn"
                              onClick={() => {
                                setAdcontentbody(true);
                              }}
                            >
                              <AddIcon
                                style={{ fontSize: "20px", marginRight: "7px" }}
                              />
                              Add Body Block
                            </Button>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Button
                              className="deletecontentbtn"
                              onClick={() => {
                                setContentdelModal(true);
                              }}
                            >
                              <DeleteIcon
                                fontSize="small"
                                style={{ marginRight: "10px" }}
                              />
                              Delete Content Variation
                            </Button>
                          </div>
                        </TableContainer>
                      )}
                    </Box>
                  )}
                </div>
              </div>
              <div style={{ width: "508px", marginLeft: "15px" }}>
                <div
                  style={{
                    height: "72px",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div className="emailpreview">Email Content Preview </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "180px",
                    }}
                  >
                    light
                    <Switch
                      color="warning"
                      onClick={() => {
                        if (dark) {
                          setDark(false);
                        } else {
                          setDark(true);
                        }
                      }}
                    />
                    dark
                  </div>
                </div>
                <div
                  style={{
                    minHeight: "400px",
                    width: "508",
                    background: "#f7f7f7",
                    padding: "16px 16px 32px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={alignment}
                      exclusive
                      onChange={handleChange2}
                      aria-label="Platform"
                      style={{ marginBottom: "16px" }}
                    >
                      <ToggleButton
                        value="BLOCK VIEW"
                        className="viewbtn"
                        onClick={() => {
                          setBlockview(true);
                          setLetterview(false);
                        }}
                      >
                        BLOCK VIEW
                      </ToggleButton>
                      <ToggleButton
                        value="LETTER VIEW"
                        className="viewbtn"
                        onClick={() => {
                          setBlockview(false);
                          setLetterview(true);
                        }}
                      >
                        LETTER VIEW
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <Button className="refreshbtn">
                      <CachedIcon
                        fontSize="small"
                        style={{ marginRight: "7px" }}
                      />
                      REFRESH
                    </Button>
                  </div>
                  {blockview && (
                    <>
                      <div className={dark ? "blockview" : "blockviewdark"}>
                        <div style={{ fontWeight: "600" }}>SUBJECT :</div>
                        <div className="noaddedyet">No subject added yet</div>
                      </div>
                      <div className={dark ? "blockview" : "blockviewdark"}>
                        <div style={{ fontWeight: "600" }}>BODY :</div>
                        <div className="noaddedyet">No content added yet</div>
                      </div>
                      <div
                        className={
                          dark ? "blockviewsignature" : "blockviewsignaturedark"
                        }
                      >
                        <div style={{ fontWeight: "600" }}>SIGNATURE :</div>
                        <div className="nosignatureadded">
                          No signature added yet
                        </div>
                      </div>
                    </>
                  )}
                  {letterview && (
                    <div
                      className={dark ? "letterviewdiv" : "letterviewdivdark"}
                    >
                      <div style={{ fontWeight: "600" }}>SUBJECT :</div>
                      <div className="noaddedyet">No subject added yet</div>
                      <div className="noaddedyet">No content added yet</div>
                      <div className="nosignatureadded">
                        No signature added yet
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Drawer>
      <ArchiveModal isOpen={archiveModal} isClose={handleClose} />
      <TemplateAddsubject open={adsubject} close={handleclose2} />
      <TemplateAddsignature open={adsignature} close={handleclose3} />
      <ContentVariDelModal
        isOpen={contentdelModal}
        isClose={contentvaridelete}
      />
      <ConVarAddBody open={adcontentbody} close={closecontentbody} />
    </React.Fragment>
  );
}
