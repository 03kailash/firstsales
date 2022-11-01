import React, { useState } from "react";
import "./NewCampaign.css";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ArchiveRoundedIcon from '@mui/icons-material/ArchiveRounded';
import DeviceHubRoundedIcon from '@mui/icons-material/DeviceHubRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import AddEmailModal from "./AddEmailModel";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MailIcon from '@mui/icons-material/Mail';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AddIcon from '@mui/icons-material/Add';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForkRightIcon from '@mui/icons-material/ForkRight';
const columns = [
  { id: "Mail Account", label: "Mail Account", minWidth: "150px" },
  {
    id: "Status",
    label: "Status",
    minWidth: 112,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
];
const steps = ["Campaign", "Contacts", "Schedule", "Sequence"];
function createData(EmailAccount, Status) {
  return { EmailAccount, Status };
}

const rows = [createData("EmailAccount", "Status")];
function NewCampaign(props) {
  const [AndAdd, setAndAdd] = useState(false);
  // const [addOR,setaddOR] =useState(false);
  const [, setRender] = useState({});
  const reRender = () => setRender({});
  const [add, setadd] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [Tags, setTags] = React.useState("");
  const handleChangeee = (event) => {
    setTags(event.target.value);
  };
  const [Filter, setFilter] = React.useState("");
  const handleChhangeee = (event) => {
    setFilter(event.target.value);
  };

  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChangeeee = (newValue) => {
    setValue(newValue);
  };
  const [openAddModel, setOpenAddModel] = React.useState(false);
  const handleOpenAddModel = () => setOpenAddModel(true);
  const handleCloseAddModel = () => setOpenAddModel(false);

  return (
    <div>
      <React.Fragment>
        <div>
          <Drawer
            anchor={"right"}
            open={props.Newopen}
            onClose={props.handleNewclose}
            className='AddCampaignDrawer'
          >
            <div>
              <Box role="presentation">
                <IconButton style={{ margin: '8px' }}>
                  <ClearOutlinedIcon
                    color="action"
                    onClick={props.handleNewclose}
                  />
                </IconButton>
                <div>
                  <Box
                    sx={{
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "1300px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className='Steper'
                    >
                      <Stepper activeStep={activeStep} className="steppers">
                        {steps.map((label, index) => {
                          const stepProps = {};
                          const labelProps = {};
                          return (
                            <Step key={label} {...stepProps}>
                              <StepLabel {...labelProps} className="steps">
                                {label}{" "}
                              </StepLabel>
                            </Step>
                          );
                        })}
                      </Stepper>
                    </div>
                    {activeStep === steps.length ? (
                      <React.Fragment></React.Fragment>
                    ) : (
                      <React.Fragment>
                        {activeStep === 0 && (
                          <>
                            <div className="CampaignName">
                              <div className="CampaignName1">Campaign Name</div>
                              <div className="Inputfeild">
                                <TextField
                                  type="text"
                                  id="outlined-size-small"
                                  color="warning"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  size="small"
                                  className="CampaignInput"
                                />
                              </div>
                              <div className="TextActtachad">
                                Attached mail accounts
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <div style={{ width: "624px" }}>
                                  <Paper
                                    sx={{ overflow: "hidden" }}
                                  >
                                    <TableContainer sx={{ maxHeight: 440 }}>
                                      <Table
                                        stickyHeader
                                        aria-label="sticky table"
                                      >
                                        <TableHead style={{ padding: "0px" }}>
                                          <TableRow>
                                            {columns.map((column) => (
                                              <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                  maxWidth: column.minWidth,
                                                }}
                                              >
                                                {column.label}
                                              </TableCell>
                                            ))}
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>
                                          {rows
                                            .slice(
                                              page * rowsPerPage,
                                              page * rowsPerPage + rowsPerPage
                                            )
                                            .map((row) => {
                                              return (
                                                <TableRow
                                                  hover
                                                  role="checkbox"
                                                  tabIndex={-1}
                                                  key={row.code}
                                                >
                                                  {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                      <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                      >
                                                        {column.format &&
                                                          typeof value === "number"
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
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                  />
                                </div>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Button
                                  variant="outlined"
                                  color="warning"
                                  className="AddBtnn"
                                  onClick={() => {
                                    handleOpenAddModel();
                                    setOpenAddModel(true);
                                  }}

                                >
                                  <AddOutlinedIcon fontSize="22px " /> Add mail
                                  Account to campaign
                                </Button>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <p className=" TextnoMail">
                                  If no mail account added to campaign, campaign
                                  will use any mail account available on workspace
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                        {activeStep === 1 && (
                          <>
                            <div className="TextContact">
                              <p>Contacts Filtering</p>
                            </div>
                            <div style={{ display: "flex" }} className="ContactBlockDiv">
                              <div className="divContainer">
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  {add === false && (
                                    <div className="divContainer1">
                                      <Alert severity="info">
                                        <AlertTitle>
                                          No contact filters
                                        </AlertTitle>
                                        Add some filters to filter out which
                                        contacts will be used to run this campaign
                                      </Alert>
                                    </div>
                                  )}
                                  {add && (
                                    <div className="DeleteDiv1">
                                      <div style={{ display: "flex" }}>
                                        <div
                                          style={{ padding: "16px 0px 0px 16px" }}
                                        >
                                          <div className="If">IF</div>
                                        </div>
                                        <div style={{ width: '100%' }}>
                                          <div
                                            style={{
                                              padding: "16px 0px 0px 16px",
                                              display: "flex",
                                              justifyContent: "space-between"
                                            }}
                                          >
                                            <FormControl
                                              sx={{ m: 1, maxWidth: 200, width: '100%' }}
                                              size="small"
                                            >
                                              <InputLabel id="demo-select-small" color="warning" >
                                                Filter
                                              </InputLabel>
                                              <Select
                                                labelId="demo-select-small"
                                                id="demo-select-small"
                                                value={Filter}
                                                label="   Filter"
                                                color="warning"
                                                onChange={handleChhangeee}
                                                InputLabelProps={{
                                                  shrink: true,
                                                }}
                                              >
                                                <MenuItem value="">
                                                  <em>None</em>
                                                </MenuItem>
                                              </Select>
                                            </FormControl>
                                            <div
                                              style={{
                                                display: "flex",
                                                justifyContent: "end",
                                                width: "100%",
                                              }}
                                            >
                                              <IconButton>
                                                <DeleteIcon />
                                              </IconButton>

                                            </div>
                                          </div>
                                          {AndAdd && (
                                            <div>
                                              <div
                                                style={{
                                                  padding: "16px 0px 0px 16px",
                                                }}
                                              >
                                                {" "}
                                                <Chip
                                                  label="AND"
                                                  className="chipAnd"
                                                />
                                              </div>

                                              <div
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  padding: "16px 0px 0px 16px",
                                                }}
                                              >
                                                <div>
                                                  <FormControl
                                                    sx={{ m: 1, minWidth: 200 }}
                                                    size="small"
                                                  >
                                                    <InputLabel id="demo-select-small" color="warning">
                                                      Filter
                                                    </InputLabel>
                                                    <Select
                                                      labelId="demo-select-small"
                                                      id="demo-select-small"
                                                      value={Filter}
                                                      label=" Filter"
                                                      color="warning"
                                                      onChange={handleChhangeee}
                                                      InputLabelProps={{
                                                        shrink: true,
                                                      }}
                                                    >
                                                      <MenuItem value="">
                                                        <em>None</em>
                                                      </MenuItem>
                                                    </Select>
                                                  </FormControl>
                                                </div>
                                                <div>
                                                  <FormControl
                                                    sx={{ m: 1, minWidth: 200 }}
                                                    size="small"
                                                  >
                                                    <InputLabel id="demo-select-small" color="warning">
                                                      Tags
                                                    </InputLabel>
                                                    <Select
                                                      labelId="demo-select-small"
                                                      id="demo-select-small"
                                                      value={Tags}
                                                      label="Tags"
                                                      color="warning"
                                                      onChange={handleChangeee}
                                                      InputLabelProps={{
                                                        shrink: true,
                                                      }}
                                                    >
                                                      <MenuItem value="">
                                                        <em>None</em>
                                                      </MenuItem>
                                                    </Select>
                                                  </FormControl>
                                                </div>
                                                <div>
                                                  <LocalizationProvider
                                                    dateAdapter={AdapterDayjs}
                                                  >
                                                    <DateTimePicker
                                                      label="Date&Time picker"
                                                      value={value}
                                                      onChange={handleChangeeee}
                                                      renderInput={(params) => (
                                                        <TextField
                                                          {...params}
                                                          className="timePiker"
                                                          size="small"
                                                          color="warning"
                                                        />
                                                      )}
                                                    />
                                                  </LocalizationProvider>
                                                </div>

                                                <IconButton onClick={() => {
                                                  setAndAdd(false)
                                                }}>
                                                  <DeleteIcon />
                                                </IconButton>

                                              </div>
                                            </div>
                                          )}
                                          <br />
                                          <div
                                            style={{
                                              padding: "16px 0px 0px 16px",
                                            }}
                                          >
                                            <Button
                                              variant="outlined"
                                              className="ADDnadBtn"
                                              onClick={() => {
                                                if (AndAdd) {
                                                  setAndAdd(false);
                                                } else {
                                                  setAndAdd(true);
                                                }
                                              }}
                                            >
                                              {" "}
                                              <AddOutlinedIcon />
                                              Add AND
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  <br />
                                </div>
                                <Button
                                  className="ADDORBTN"
                                  onClick={() => setadd(true)}
                                  style={{ marginTop: "52px" }}
                                >
                                  <AddOutlinedIcon fontSize="35px" />
                                  Add OR
                                </Button>
                              </div>

                              <div className="SideDiv">
                                <p className="p">Filtered contacts preview</p>
                                <div className="Side1">
                                  <Table
                                    sx={{ minWidth: 400 }}
                                    aria-label="simple table"
                                  >
                                    <TableHead>
                                      <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell align="left">Name</TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {rows.map((row) => (
                                        <TableRow
                                          key={row.name}
                                          sx={{
                                            "&:last-child td, &:last-child th": {
                                              border: 0,
                                            },
                                          }}
                                        >
                                          <TableCell component="th" scope="row">
                                            {row.Email}
                                          </TableCell>
                                          <TableCell align="right">
                                            {row.name}
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {activeStep === 2 && (
                          <>
                            <div
                              className="TextContact"
                              style={{ marginTop: "32px", marginBottom: "0px", textTransform: 'inherit' }}
                            >
                              Sending Schedule Options
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button variant="outlined" className="CreateBtn">
                                Create Schedule Option
                              </Button>
                            </div>
                          </>
                        )}
                        {activeStep === 3 && (
                          <>
                            <div className="SequenceHeadDiv" >
                              <div style={{ width: '33.33%' }}>
                              </div>
                              <div className="SequenceChipText">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
                                  <div>Sequence</div>
                                  <Chip label="New" variant="outlined" size="small" />
                                  <Chip label="Beta" variant="outlined" size="small" />
                                </div>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '33.33%', gap: '6px' }} className>
                                <div>
                                  <Button variant="outlined" size="small" style={{ minWidth: '0px' }}>
                                    <ArchiveRoundedIcon />
                                  </Button>
                                </div>
                                <div>
                                  <Button variant="outlined" size="small" disabled style={{ minWidth: '0px' }}>
                                    <PauseCircleOutlineRoundedIcon />
                                  </Button>
                                </div>
                                <div>
                                  <Button style={{ backgroundColor: '#ff8e00', color: '#ffffff' }}>
                                    Start Campaign <PlayCircleOutlineRoundedIcon color="none" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="SequenceBodyBlock">
                              <div style={{ width: '381px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <div className="DeviceHubRoundedIcon">
                                    <DeviceHubRoundedIcon />
                                  </div>
                                  <div className="DeviceHubSequence">Sequence</div>
                                </div>
                                <div className="MoreVertIconDiv">
                                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <div>Sequence #1</div>
                                    <IconButton>
                                      <MoreVertIcon />
                                    </IconButton>
                                  </div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                  <Button variant="outlined" style={{ color: '#ff8e00', borderColor: '#ff8e00' }} >Add Sequence</Button>
                                </div>
                              </div>
                              <div style={{ width: '360px', padding: '32px', backgroundColor: "#f7f7f7" }}>
                                <div>
                                  <ToggleButtonGroup
                                    color="primary"
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                    aria-label="Platform"
                                    style={{ width: "100%" }}
                                  >
                                    <ToggleButton className="ToggleButtonBasicMode">Basic Mode</ToggleButton>
                                    <ToggleButton disabled style={{ width: '50%' }}>Advance Mode</ToggleButton>

                                  </ToggleButtonGroup>
                                </div>
                                <div style={{ margin: '20px 0px' }}>
                                  <Button variant="outlined" className="mailIconButn">
                                    <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: "center", gap: "6px " }}>
                                      <div className="mailIcon">
                                        < MailIcon color="action" />
                                      </div>
                                      <div>
                                        <span className="sandEmailText">Send Mail</span>
                                      </div>
                                      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        <ErrorOutlineIcon style={{ color: 'rgb(244, 67, 54)' }} />
                                      </div>
                                    </div>
                                    <div style={{ textTransform: 'inherit' }}>
                                      <Chip label="starting step" variant="outlined" size="small" style={{ textTransform: "initial" }} />
                                    </div>
                                  </Button>

                                  <Button variant="outlined" className="mailIconButn">
                                    <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: "center", gap: "6px " }}>
                                      <div className="mailIcon">
                                        < AccessTimeIcon color="action" />
                                      </div>
                                      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        <ErrorOutlineIcon style={{ color: 'rgb(244, 67, 54)' }} />
                                      </div>
                                    </div>
                                   
                                  </Button>

                                  <Button variant="outlined" className="mailIconButn">
                                    <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: "center", gap: "6px " }}>
                                      <div className="mailIcon">
                                        <  ForkRightIcon color="action" />
                                      </div>
                                      <div>
                                        <span className="sandEmailText">Connection</span>
                                      </div>
                                      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        <ErrorOutlineIcon style={{ color: 'rgb(244, 67, 54)' }} />
                                      </div>
                                    </div>
                                   
                                  </Button>

                                  <Button variant="outlined" className="mailIconButn">
                                    <div style={{ display: 'flex', justifyContent: "flex-start", alignItems: "center", gap: "6px " }}>
                                      <div className="mailIcon">
                                        < ForkRightIcon  color="action" />
                                      </div>
                                     
                                      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                        <ErrorOutlineIcon style={{ color: 'rgb(244, 67, 54)' }} />
                                      </div>
                                    </div>
                                  </Button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                  <Button variant="outlined" style={{ color: '#ff8e00', borderColor: '#ff8e00' }}><AddIcon style={{ marginRight: '8px' }} /> Add step</Button>
                                </div>
                              </div>
                              <div className='BobyLastDiv'>
                                <div className='EmailTextIconBtn'>
                                  <div className="mailIcon">
                                    < MailIcon color="action" />
                                  </div>
                                  <div>
                                    <span className="sandEmailText2" >Send Mail</span>
                                  </div>
                                </div>
                                <div style={{ width: '100%', padding: '20px 32px 10px', backgroundColor: '#ffffff' }}>
                                  <p className="templateText">Send email using template:</p>
                                  <div className="DashedDiv">
                                    <p className="NumberoftempText">No sending templates yet</p>
                                  </div>
                                </div>
                                <div style={{ marginBottom: '48px' }}>
                                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="outlined" className="CreateNewTamplatebtn">change template</Button>
                                  </div>
                                  <p style={{ display: 'flex', justifyContent: 'center', margin: '5px 0px' }}>or</p>
                                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="outlined" className="CreateNewTamplatebtn">Create a new template</Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "60px",
                            marginBottom: "40px",
                            marginTop: '40px'
                          }}
                        >
                          <Button
                            variant="outlined"
                            style={{ width: "150px", height: "40px", textTransform: 'inherit' }}
                          >
                            Save
                          </Button>
                          <Button className="NextBTn" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                          </Button>
                        </div>
                      </React.Fragment>
                    )}
                  </Box>
                </div>
              </Box>
            </div>
          </Drawer>
        </div>
      </React.Fragment>
      <AddEmailModal openAddModel={openAddModel} handleCloseAddModel={handleCloseAddModel} />
    </div>
  );
}

export default NewCampaign;
