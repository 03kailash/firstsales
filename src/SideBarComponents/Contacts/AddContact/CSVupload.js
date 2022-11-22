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
import { Chip, IconButton, MenuItem, Select } from "@mui/material";
import CsvImportDone from "./CsvImportDone";
import axios from "axios";
import { ApiURL } from "../../../ApiURL"
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
const steps = ["Option", "Mapping"];
function CSVupload(props) {
  const [opencsvDone, setOpencsvDone] = useState(false);
  const handleClosecsvDone = () => setOpencsvDone(false);
  const [feild, setfield] = useState(false);
  const [Update, setFullUpdate] = useState(false);
  const [contact, setContact] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [title, setTitle] = useState("");
  const [number, setnumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [region, setRegion] = useState("");
  const [orgnizition, setOrgnizition] = useState("");
  const [website, setwebsite] = useState("");
  const [value, setValue] = useState("Only Add new");
  const [file, setFile] = useState("");
  const [TagChip, setTagChip]= useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const Next = () => {
    localStorage.setItem("Update", (Update))
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDelete = (chipToDelete) => () => {
    setTagChip((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const uploadCsvFile = () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem("token"),
      },
    };
    const formData = new FormData();
    formData.append("import_csv",props.Filess);
    formData.append("workspace_id", localStorage.getItem("Workspace_id"));
    formData.append("tags",TagChip);
    formData.append("Csv_file_Name", props.CsvFile);
    return axios
      .post(`${ApiURL}/import-csv`, formData, config)
      .then((res) => {
        if(res.status){
          setFile();
        }
      });
  }
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
                              <Table>
                                <TableHead className="th">
                                  <TableRow>
                                    {props.tableRows.map((rows, index) => {
                                      return <TableCell style={{ padding: "4px 14px" }} key={index}>{rows}</TableCell>;
                                    })}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {props.values.map((value, index) => {
                                    return (
                                      <TableRow key={index}>
                                        {value.map((val, i) => {
                                          return <TableCell style={{ padding: "4px 16px" }} key={i}>{val}</TableCell>;
                                        })}
                                      </TableRow>
                                    );
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <div className="stack1">
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="success" fontSize="22px">
                                  <div className="massage">
                                    Total rows in your CSV file {props.values.length}. You can
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
                                    onClick={() => {
                                      setFullUpdate(true)
                                    }}
                                  />
                                  <FormControlLabel
                                    value="Full Update"
                                    control={<Radio />}
                                    label="Full Update"
                                    onClick={() => {
                                      setFullUpdate(false)
                                    }}
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
                              <OutlinedInput 
                              value={props.CsvFile}>  
                              </OutlinedInput>
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
                              onChange={(event)=>{ setTagChip(event.target.value);}}
                              value={TagChip}
                            >
                            <Chip label={TagChip} onDelete={handleDelete} />
                            </TextField>

                            <Button
                              variant="outlined"
                              style={{ marginLeft: "20px" }}
                              // onClick={()=>{
                              //   setTagChip();
                              // }}
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
                              <Table>
                                <TableHead className="th">
                                  <TableRow>
                                    {props.tableRows.map((rows, index) => {
                                      return <TableCell style={{ padding: "4px 14px" }} key={index}>{rows}</TableCell>;
                                    })}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {props.values.map((value, index) => {
                                    return (
                                      <TableRow key={index}>
                                        {value.map((val, i) => {
                                          return <TableCell style={{ padding: "4px 16px" }} key={i}>{val}</TableCell>;
                                        })}
                                      </TableRow>
                                    );
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                            <div className="stack1">
                              <Stack sx={{ width: "100%" }} spacing={2}>
                                <Alert severity="success" fontSize="22px">
                                  <div className="massage">
                                    Total rows in your CSV file {props.values.length}. You can
                                    preview some in table above.
                                  </div>
                                </Alert>
                              </Stack>
                            </div>
                          </div>
                          <p style={{ marginBottom: "0px" }}>Email</p>
                          <div style={{ display: 'flex', gap: '20px' }}>
                            <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                color="warning"
                                value={email}
                                onChange={(event) => { setValue(event.target.value); }}
                              >
                                {props.values.map((value, index) => {
                                  return (
                                    <MenuItem key={index} value={value}>
                                      {value[1]}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                            <div>
                              {feild === false && <Button onClick={() => {
                                setfield(true)
                              }} className='ShowFieldText'>Show unused default feilds</Button>}
                            </div>
                          </div>
                          {feild && <div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>First Name</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={first}
                                  onChange={(event) => { setFirst(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Last Name</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={last}
                                  onChange={(event) => { setLast(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Gender</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={gender}
                                  onChange={(event) => { setGender(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Orgnizition</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={orgnizition}
                                  onChange={(event) => { setOrgnizition(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>website</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={website}
                                  onChange={(event) => { setwebsite(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Title</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={title}
                                  onChange={(event) => { setTitle(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Phone number</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={number}
                                  onChange={(event) => { setnumber(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Address</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={address}
                                  onChange={(event) => { setAddress(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>City</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={city}
                                  onChange={(event) => { setCity(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Status / Region</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={region}
                                  onChange={(event) => { setRegion(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>Country</div>
                              <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  size="small"
                                  color="warning"
                                  value={country}
                                  onChange={(event) => { setCountry(event.target.value); }}
                                >
                                </Select>
                              </FormControl>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                              <div>ZipCode</div>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size="small"
                                    color="warning"
                                    value={zipcode}
                                    onChange={(event) => { setZipCode(event.target.value); }}
                                  >
                                  </Select>
                                </FormControl>
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
                            <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                color="warning"
                                value={email}
                                onChange={(event) => { setEmail(event.target.value); }}
                              >
                                {props.values.map((value, index) => {
                                  return (
                                    <MenuItem key={index} value={value}>
                                      {value[1]}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
                            <IconButton>
                              <CloseOutlinedIcon />
                            </IconButton>
                          </div>

                          <p style={{ marginBottom: "0px" }}>Contact no.</p>
                          <div style={{ display: "flex", gap: '5px' }}>
                            <FormControl style={{ width: "300px", maxWidth: '300px' }}>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                size="small"
                                color="warning"
                                value={contact}
                                onChange={(event) => { setContact(event.target.value); }}
                              >
                                {props.values.map((value, index) => {
                                  return (
                                    <MenuItem key={index} value={value}>
                                      {value[2]}
                                    </MenuItem>
                                  );
                                })}
                              </Select>
                            </FormControl>
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
                          Next();
                          { activeStep === 0 && handleNext(); }
                          { activeStep === 1 && setOpencsvDone(true);
                            uploadCsvFile(); }
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
