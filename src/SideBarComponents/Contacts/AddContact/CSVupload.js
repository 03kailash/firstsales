import React, { useState } from "react";
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
import { IconButton } from "@mui/material";
import CsvImportDone from "./CsvImportDone";

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
  const [opencsvDone, setOpencsvDone] = React.useState(false);
  const handleClosecsvDone = () => setOpencsvDone(false);

  const [feild, setfield] = useState(false)
  const [value, setValue] = React.useState("Only Add new");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [activeStep, setActiveStep] = React.useState(0);

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
          // style={{display:"flex",justifyContent:"center",alignItems:"center"}}

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
                        <Step key={label} {...stepProps} >
                          <StepLabel {...labelProps} className="steps">{label}</StepLabel>
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
                                    <tr>
                                      {props.tableRows.map((rows, index) => {
                                        return <th key={index}>{rows}</th>;
                                      })}
                                    </tr>
                                  </TableRow>
                                </TableHead>
                                <TableBody
                                  style={{ width: "756px", height: "96.05px" }}
                                >
                                  {props.values.map((value, index) => {
                                    return (
                                      <tr key={index}>
                                        {value.map((val, i) => {
                                          return <td key={i}>{val}</td>;
                                        })}
                                      </tr>
                                    );
                                  })}
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
                              sx={{ width: "260px" }}
                              color="warning"
                              size="small"
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
                              size="small"
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
                                  <tr>
                                      {props.tableRows.map((rows, index) => {
                                        return <th key={index}>{rows}</th>;
                                      })}
                                    </tr>
                                  </TableRow>
                                </TableHead>
                                <TableBody
                                  style={{ width: "756px", height: "96.05px" }}
                                >
                                  {props.values.map((value, index) => {
                                    return (
                                      <tr key={index}>
                                        {value.map((val, i) => {
                                          return <td key={i}>{val}</td>;
                                        })}
                                      </tr>
                                    );
                                  })}
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
                          <div style={{ display: 'flex', gap: '20px' }}>
                            <TextField
                              id="outlined-select-currency"
                              select
                              onChange={handleChange}
                              size='small'
                              color="warning"
                              style={{ width: "300px", maxWidth: '300px' }}
                            >
                            </TextField>
                            <div>
                              {feild === false && <Button onClick={() => {
                                setfield(true)
                              }} className='ShowFieldText'>Show unused default feilds</Button>}
                            </div>
                          </div>
                          {feild && <div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>First Name</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Last Name</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Gender</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Orgnizition</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>website</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Title</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Phone number</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Address</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>City</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Status / Region</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Country</div>
                              <TextField
                                id="outlined-select-currency"
                                select
                                onChange={handleChange}
                                size='small'
                                color="warning"
                                style={{ width: "300px", maxWidth: '300px' }}
                              >
                              </TextField>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>ZipCode</div>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                <TextField
                                  id="outlined-select-currency"
                                  select
                                  onChange={handleChange}
                                  size='small'
                                  color="warning"
                                  style={{ width: "300px", maxWidth: '300px' }}
                                >
                                </TextField>
                                <Button className='HideFieldText' onClick={() => {
                                  setfield(false)
                                }}>hide unused default feilds</Button>
                              </div>
                            </div>
                          </div>
                          }

                          <div className='customFielText'>
                            Custom Fields
                          </div>
                          <p style={{ marginBottom: "0px" }}>Email Id</p>
                          <div style={{ display: "flex", gap: '5px' }}>
                            <TextField
                              id="outlined-select-currency"
                              select
                              onChange={handleChange}
                              size='small'
                              color="warning"
                              style={{ width: "300px", maxWidth: '300px' }}
                            >
                            </TextField>
                            <IconButton>
                              <CloseOutlinedIcon />
                            </IconButton>
                          </div>

                          <p style={{ marginBottom: "0px" }}>Contact no.</p>
                          <div style={{ display: "flex", gap: '5px' }}>
                            <TextField
                              id="outlined-select-currency"
                              select
                              onChange={handleChange}
                              size='small'
                              color="warning"
                              style={{ width: "300px", maxWidth: '300px' }}
                            >
                            </TextField>
                            <IconButton>
                              <CloseOutlinedIcon />
                            </IconButton>
                          </div>
                          <br />
                        </>
                      )}
                      <Box
                        sx={{ display: "flex", flexDirection: "row", pt: 2 }}
                      >
                        <Button className="ConfirmBtn" onClick={() => {
                          { activeStep === 0 && handleNext(); }
                          { activeStep === 1 && setOpencsvDone(true); }
                        }}>
                          {activeStep === steps.length - 1
                            ? "Upload Contacts"
                            : "Comfirm Options"}
                        </Button>
                      </Box>
                      <Button
                        variant="outlined"
                        style={{ width: "234px", marginLeft: "250px", textTransform: "inherit" }}
                        onClick={() => {
                          props.handleCloseUP();
                        }}
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
      <CsvImportDone open={opencsvDone} close={handleClosecsvDone} isclose={props.handleCloseUP} />
    </div>
  );
}
export default CSVupload;
