import React, { useEffect, useState } from "react";
import "./Userstep1.css";
import TextField from "@mui/material/TextField";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
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


export default function Userstep1(props) {
  useEffect(()=>{
    fetch("http://firstsales.fareof.com/api/timezone", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
  },[])

  const [FritName ,setFristName] = useState("");
  const [LastName ,setLastName] = useState("");
  const [Workspace ,setWorkspace ] = useState("");
  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    console.log(timeZone);
  }, [])
 console.log(FritName,LastName,Workspace)
  return (
    <div style={{ padding: "0px 16px", maxWidth: "100%" }}>
      <div className="usercontainer">
        <div className="step1head">Tell us about yourself</div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField 
            onChange={(event)=>{
              setFristName(event.target.value)
            }}
            id="outlined-number"
            label="First Name"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
           onChange={(event)=>{
            setLastName(event.target.value)
          }}
            id="outlined-number"
            label="Last Name"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <FormControl className="userinput">
            <InputLabel id="demo-multiple-name-label" color="warning" shrink>TimeZone</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              color="warning"
              multiple
           
              input={<OutlinedInput label="TimeZone" color="warning" />}
              MenuProps={MenuProps}
              notched
            >
              {/* { CountryList.map((CountryList) => (
                <MenuItem
                  key={CountryList}
                  value={CountryList}
                  style={getStyles(CountryList)}
                >
                  {CountryList}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "145px",
          }}
        >
          <AccessTimeOutlinedIcon color="warning" style={{ opacity: "80%" }} />
          <span className="currenttime">
            Current time at selected timezone: October 5th, Wednesday, 3:20 pm
          </span>
        </div>
        <div className="TimeZoneDiv">
        <Alert severity="info" className="TimezomeInfo">Your timezone: Asia/Calcutta</Alert>
        </div>
        <br />
        <br />
        <h6 className="createworkspace">Create your Workspace</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "16px 0px",
          }}
        >
          <TextField
           onChange={(event)=>{
            setWorkspace(event.target.value)
          }}
            id="outlined-number"
            label="Workspace Name"
            type="text"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
            className="userinput"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={props.handleNext} className="btnNext">
            <span>
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
