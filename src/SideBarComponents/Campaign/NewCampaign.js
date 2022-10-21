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
import Tooltip from "@mui/material/Tooltip";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import PrismaZoom from "react-prismazoom";
import Draggable from "react-draggable";
import Xarrow from "react-xarrows";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

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
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const handleChangeeee = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <React.Fragment>
        <div>
          <Drawer
            anchor={"right"}
            open={props.Newopen}
            onClose={props.handleNewclose}
          >
            <Box sx={{ width: 1300 }} role="presentation">
              <ClearOutlinedIcon
                color="action"
                className="closebtn"
                onClick={props.handleNewclose}
              />
              <div>
                <Box
                  sx={{
                    width: "1300px",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "1300px",
                      display: "flex",
                      justifyContent: "center",
                    }}
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
                                  sx={{ width: "642px", overflow: "hidden" }}
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
                                                minWidth: column.minWidth,
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
                          <div style={{ display: "flex" }}>
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
                                      <div>
                                        <div
                                          style={{
                                            padding: "16px 0px 0px 16px",
                                            display: "flex",
                                          }}
                                        >
                                          <TextField
                                            type="text"
                                            label="Filter"
                                            id="outlined-size-small"
                                            color="warning"
                                            InputLabelProps={{
                                              shrink: true,
                                            }}
                                            size="small"
                                          />
                                          <div
                                            style={{
                                              display: "flex",
                                              justifyContent: "end",
                                              width: "100%",
                                            }}
                                          >
                                            <Tooltip title="Delete">
                                              <IconButton>
                                                <DeleteIcon />
                                              </IconButton>
                                            </Tooltip>
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
                                                <TextField
                                                  type="text"
                                                  label="Filter"
                                                  id="outlined-size-small"
                                                  color="warning"
                                                  InputLabelProps={{
                                                    shrink: true,
                                                  }}
                                                  size="small"
                                                />
                                              </div>
                                              <div>
                                                <FormControl
                                                  sx={{ m: 1, minWidth: 200 }}
                                                  size="small"
                                                >
                                                  <InputLabel id="demo-select-small">
                                                    Tags
                                                  </InputLabel>
                                                  <Select
                                                    labelId="demo-select-small"
                                                    id="demo-select-small"
                                                    value={Tags}
                                                    label="Tags"
                                                    onChange={handleChangeee}
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
                                                      />
                                                    )}
                                                  />
                                                </LocalizationProvider>
                                              </div>
                                              <Tooltip title="Delete">
                                                <IconButton>
                                                  <DeleteIcon />
                                                </IconButton>
                                              </Tooltip>
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
                            style={{ marginTop: "32px", marginBottom: "0px" }}
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
                          <div
                            className="TextContact"
                            style={{ marginTop: "32px", marginBottom: "40px" }}
                          >
                            Sequence Building
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Alert severity="error" style={{ width: "545px" }}>
                              Template must be selected on all nodes
                            </Alert>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "20px",
                              padding: "20px 0px",
                            }}
                          >
                            <Button
                              variant="outlined"
                              color="warning"
                              style={{
                                width: "150px",
                                height: "40px",
                                textTransform: "inherit",
                              }}
                            >
                              Add Sequence
                            </Button>
                            <Button
                              variant="outlined"
                              disabled
                              className="Button"
                              style={{ width: "160px", height: "40px" }}
                            >
                              Resume Sequence
                            </Button>
                            <Button
                              variant="outlined"
                              className="Button"
                              style={{ width: "165px", height: "40px" }}
                            >
                              Duplicate Sequence
                            </Button>
                            <Button
                              variant="outlined"
                              className="Button1"
                              style={{
                                width: "147px",
                                height: "40px",
                                textTransform: "inherit",
                              }}
                            >
                              Achive Sequence
                            </Button>
                          </div>

                          <div
                            style={{
                              width: "1200px",
                              height: "700px",
                              backgroundColor: "#fafbfb ",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <PrismaZoom minZoom={1} scrollVelocity={0.2}>
                              <div className="App">
                                <Xarrow start="1" end="2" />
                                <Xarrow start="1" end="3" />
                                <Xarrow start="1" end="4" />

                                <Draggable
                                  defaultPosition={{ x: 60, y: 60 }}
                                  grid={[20, 20]}
                                  onStop={reRender}
                                  onDrag={reRender}
                                >
                                  <div id="1" className="square">
                                    <div className="squareDiv">
                                      <p className="SquareChildDiv">
                                        Sand Email
                                      </p>
                                      <p className="rootID">id:root</p>
                                    </div>
                                    <p className="change">Change Template</p>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: "20px",
                                      }}
                                    >
                                      <Button
                                        variant="outlined"
                                        color="warning"
                                      >
                                        Time
                                      </Button>
                                      <Button
                                        variant="outlined"
                                        color="warning"
                                      >
                                        Event
                                      </Button>
                                    </div>
                                  </div>
                                </Draggable>

                                <Draggable
                                  defaultPosition={{ x: 300, y: 300 }}
                                  grid={[20, 20]}
                                  onStop={reRender}
                                  onDrag={reRender}
                                >
                                  <div id="2" className="square">
                                    <div
                                      className="squareDiv"
                                      style={{
                                        backgroundColor: "rgb(79, 195, 247)",
                                      }}
                                    >
                                      <p className="SquareChildDiv">Time</p>
                                      <p
                                        className="rootID"
                                        style={{ fontSize: "12px" }}
                                      >
                                        Sequence Will Continue after waiting 4
                                        Days
                                      </p>
                                      <p className="rootID">id:root</p>
                                    </div>
                                    <div
                                      style={{
                                        margin: "20px 0px",
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <Box sx={{ minWidth: 250 }}>
                                        <FormControl fullWidth>
                                          <InputLabel
                                            variant="standard"
                                            htmlFor="uncontrolled-native"
                                            style={{
                                              color: "rgba(0, 0, 0, 0.6);",
                                            }}
                                          >
                                            Wait for a day
                                          </InputLabel>
                                          <NativeSelect
                                            defaultValue={3}
                                            inputProps={{
                                              name: "days",
                                              id: "uncontrolled-native",
                                            }}
                                          >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                            <option value={16}>16</option>
                                            <option value={17}>17</option>
                                            <option value={18}>18</option>
                                            <option value={19}>19</option>
                                            <option value={20}>20</option>
                                            <option value={21}>21</option>
                                            <option value={22}>22</option>
                                            <option value={23}>23</option>
                                            <option value={24}>24</option>
                                            <option value={25}>25</option>
                                            <option value={26}>26</option>
                                            <option value={27}>27</option>
                                            <option value={28}>28</option>
                                            <option value={29}>29</option>
                                            <option value={30}>30</option>
                                          </NativeSelect>
                                        </FormControl>
                                      </Box>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: "50px",
                                      }}
                                    >
                                      <Button
                                        variant="outlined"
                                        color="warning"
                                      >
                                        Condition
                                      </Button>
                                      <Button
                                        variant="outlined"
                                        color="warning"
                                      >
                                        Email
                                      </Button>
                                      <Button
                                        variant="outlined"
                                        style={{
                                          color: "rgb(244, 67, 54)",
                                          borderColor: "rgb(244, 67, 54)",
                                        }}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  </div>
                                </Draggable>

                                <Draggable
                                  defaultPosition={{ x: 60, y: 60 }}
                                  grid={[20, 20]}
                                  onStop={reRender}
                                  onDrag={reRender}
                                >
                                  <div id="3" className="square">
                                    <div
                                      className="squareDiv"
                                      style={{
                                        backgroundColor: "rgb(206, 147, 216)",
                                      }}
                                    >
                                      <p className="SquareChildDiv">Event</p>
                                      <p className="rootID">id:root</p>
                                    </div>
                                    <div className=" toggle">
                                      <ToggleButtonGroup
                                        color="warning"
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                        className="Tooglebtn"
                                      >
                                        <ToggleButton
                                          value="web"
                                          style={{ textTransform: "inherit" }}
                                        >
                                          Opened
                                        </ToggleButton>
                                        <ToggleButton
                                          value="android"
                                          style={{ textTransform: "inherit" }}
                                        >
                                          Clicked
                                        </ToggleButton>
                                      </ToggleButtonGroup>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <p
                                        className="SquareChildDiv"
                                        style={{
                                          padding: "10px 0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        Sand email
                                      </p>
                                    </div>
                                    <div>
                                      {" "}
                                      <p
                                        className="change"
                                        style={{ margin: "0px" }}
                                      >
                                        Select Template
                                      </p>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: "20px",
                                      }}
                                    >
                                      <Button
                                        variant="outlined"
                                        style={{
                                          color: "rgb(244, 67, 54)",
                                          borderColor: "rgb(244, 67, 54)",
                                        }}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  </div>
                                </Draggable>

                                <Draggable
                                  defaultPosition={{ x: 300, y: 300 }}
                                  grid={[20, 20]}
                                  onStop={reRender}
                                  onDrag={reRender}
                                >
                                  <div id="4" className="square">
                                    <div
                                      className="squareDiv"
                                      style={{
                                        backgroundColor: "rgb(144, 164, 174)",
                                      }}
                                    >
                                      <p className="SquareChildDiv">
                                        Condition
                                      </p>
                                      <p className="rootID">id:root</p>
                                    </div>
                                    <div className=" toggle">
                                      <ToggleButtonGroup
                                        color="warning"
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                        className="Tooglebtn"
                                      >
                                        <ToggleButton
                                          value="web"
                                          style={{ textTransform: "inherit" }}
                                        >
                                          Opened
                                        </ToggleButton>
                                        <ToggleButton
                                          value="android"
                                          style={{ textTransform: "inherit" }}
                                        >
                                          Clicked
                                        </ToggleButton>
                                      </ToggleButtonGroup>
                                    </div>
                                    <div className=" toggle">
                                      <ToggleButtonGroup
                                        color="warning"
                                        value={alignment}
                                        exclusive
                                        onChange={handleChange}
                                        aria-label="Platform"
                                        className="Tooglebtn"
                                      >
                                        <ToggleButton
                                          value="web"
                                          style={{ textTransform: "inherit" }}
                                        >
                                          Previous only
                                        </ToggleButton>
                                        <ToggleButton
                                          value="android"
                                          style={{ textTransform: "inherit" }}
                                        >
                                          Any mail in campaign
                                        </ToggleButton>
                                      </ToggleButtonGroup>
                                    </div>
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: "20px",
                                      }}
                                    >
                                      <Button
                                        variant="outlined"
                                        color="warning"
                                      >
                                        Email
                                      </Button>
                                      <Button
                                        variant="outlined"
                                        style={{
                                          color: "rgb(244, 67, 54)",
                                          borderColor: "rgb(244, 67, 54)",
                                        }}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                  </div>
                                </Draggable>
                              </div>
                            </PrismaZoom>
                          </div>
                        </>
                      )}

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "60px",
                          marginBottom: "40px",
                        }}
                      >
                        <Button
                          variant="outlined"
                          style={{ width: "150px", height: "40px" }}
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
          </Drawer>
        </div>
      </React.Fragment>
    </div>
  );
}

export default NewCampaign;
