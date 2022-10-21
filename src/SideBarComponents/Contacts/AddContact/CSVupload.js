import React from "react";
import "./CSVupload.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

const modalWrapper = {
  overflow: "auto",
  maxHeight: "100vh",
  display: "flex",
};

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 1000,
  width: 900,
  bgcolor: "background.paper",
  mt: 20,
  boxShadow: 24,
  p: 4,
  padding: "0px 24px",
  background: "#fff",
  mb: 3,
  borderRadius: "10px",
};
function createData(Email, Contact) {
  return { Email, Contact };
}
const rows = [
  createData("kailash03choudhary@mail.com", 9575542300),
  createData("kailash03choudhary@mail.com", 9575542300),
];

const steps = ["Option", "Mapping"];
function CSVupload(props) {
  const [value, setValue] = React.useState("Only Add new");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  console.log("activeStep", activeStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="OuterDiv">
      <div className="OuterLayer">
        <div className="Contenair">
          <Modal
            open={props.openUP}
            sx={modalWrapper}
            onClose={props.handleCloseUP}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalContentStyle}>
              <h5 className="h2">CSV import</h5>
              <div className="BlockDiv1">
                <div className="Div2">
                  <Stepper
                    activeStep={activeStep}
                    style={{ width: "400px", marginLeft: "200px" }}
                  >
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};

                      return (
                        <Step key={label} {...stepProps} color="warning">
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  {activeStep === steps.length ? (
                    <React.Fragment></React.Fragment>
                  ) : (
                    <React.Fragment>
                      {activeStep === 0 ? (
                        <>
                          <div className="Table">
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 786 }}
                                size="small"
                                aria-label="a dense table"
                              >
                                <TableHead className="th">
                                  <TableRow>
                                    <TableCell className="Trow">
                                      Email
                                    </TableCell>
                                    <TableCell className="Trow1" align="left">
                                      Contacts
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody
                                  style={{ width: "756px", height: "96.05px" }}
                                >
                                  {rows.map((row) => (
                                    <TableRow
                                      className="Tablerow"
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
                                      <TableCell align="left">
                                        {row.Contact}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <div className="stack1">
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="success" fontSize="22px">
                                  <div className="massage">
                                    Total rows in your CSV file 2. You can
                                    preview some in table above.
                                  </div>
                                </Alert>
                              </Stack>
                            </div>
                          </div>
                          <div className="RedioColl">
                            <div className="Text11">
                              Strategy when importing fields
                            </div>
                            <div className="Text2">
                              If contact exists already, append any new data to
                              it but leave existing data as it.
                            </div>
                          </div>
                          <div className="redioBtndiv">
                            <div className="redioBtndiv1">
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-controlled-radio-buttons-group"
                                  name="controlled-radio-buttons-group"
                                  value={value}
                                  onChange={handleChange}
                                >
                                  <FormControlLabel
                                    value="Only Add new"
                                    control={<Radio />}
                                    label="Only Add new"
                                  />
                                  <FormControlLabel
                                    value="Full Update"
                                    control={<Radio />}
                                    label="Full Update"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div className="div1">
                            <div className="div2">
                              <div className="textdiv1">
                                Contacts Source name
                              </div>
                              <div className="textdiv2">
                                You will be able to filter contacts by this
                              </div>
                            </div>
                          </div>
                          <div style={{ marginTop: "16px" }}>
                            <FormControl
                              sx={{ width: "320px" }}
                              color="warning"
                            >
                              <OutlinedInput />
                            </FormControl>
                          </div>
                          <div
                            className="textdiv1"
                            style={{ margin: "36px 0px 0px" }}
                          >
                            Tags
                          </div>
                          <pre
                            className="textdiv2"
                            style={{ margin: "16px 0px 0px" }}
                          >
                            You will be able to filter contacts by this. You can
                            add up to 5 tags.
                            <br />
                            These will be applied to all contacts from this CSV.
                          </pre>
                          <div style={{ marginTop: "8px" }}>
                            <TextField
                              id="outlined-number"
                              label="Tags"
                              type="text"
                              color="warning"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              style={{ width: "300px" }}
                            />
                            <Button
                              variant="outlined"
                              style={{ marginLeft: "20px" }}
                            >
                              Add
                            </Button>
                          </div>
                          <br />
                        </>
                      ) : (
                        <>
                          <div className="Table">
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 786 }}
                                size="small"
                                aria-label="a dense table"
                              >
                                <TableHead className="th">
                                  <TableRow>
                                    <TableCell className="Trow">
                                      Email
                                    </TableCell>
                                    <TableCell className="Trow1" align="left">
                                      Contacts
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody
                                  style={{ width: "756px", height: "96.05px" }}
                                >
                                  {rows.map((row) => (
                                    <TableRow
                                      className="Tablerow"
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
                                      <TableCell align="left">
                                        {row.Contact}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <div className="stack1">
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="success" fontSize="22px">
                                  <div className="massage">
                                    Total rows in your CSV file 2. You can
                                    preview some in table above.
                                  </div>
                                </Alert>
                              </Stack>
                            </div>
                          </div>
                          <p style={{ marginBottom: "0px" }}>Email</p>
                          <FormControl sx={{ width: "320px" }} color="warning">
                            <OutlinedInput />
                          </FormControl>

                          <div style={{ marginTop: "32px", fontSize: "18px" }}>
                            Custom Fields
                          </div>
                          <p style={{ marginBottom: "0px" }}>Email Id</p>
                          <div style={{ display: "flex" }}>
                            <FormControl
                              sx={{ width: "320px" }}
                              color="warning"
                            >
                              <OutlinedInput />
                            </FormControl>
                            <CloseOutlinedIcon className="closeIcon" />
                          </div>

                          <p style={{ marginBottom: "0px" }}>Contact no.</p>
                          <div style={{ display: "flex" }}>
                            <FormControl
                              className="css-11qfo8z-MuiInputBase-root-MuiOutlinedInput-root"
                              color="warning"
                            >
                              <OutlinedInput />
                            </FormControl>
                            <CloseOutlinedIcon className="closeIcon" />
                          </div>
                          <br />
                        </>
                      )}
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button className="ConfirmBtn" onClick={handleNext}>
                          {activeStep === steps.length - 1
                            ? "Upload Content"
                            : "Comfirm option"}
                        </Button>
                      </Box>
                      <Button
                        variant="outlined"
                        style={{ width: "234px", marginLeft: "250px" }}
                      >
                        Cancel
                      </Button>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default CSVupload;
