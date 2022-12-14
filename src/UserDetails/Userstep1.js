import React, { useEffect, useState } from "react";
import "./Userstep1.css";
import TextField from "@mui/material/TextField";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import { ApiURL } from "../ApiURL";

export default function Userstep1(props) {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const [FirstName, setFristName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Workspace, setWorkspace] = useState("");
  const [Date, setDate] = useState("");
  const [age, setAge] = useState('');
  const [timeZoneList, setTimeZoneList] = useState([]);
  const [timezoneinfo, setTimezoneinfo] = useState(false);
  const [timezonevalue, setTimezonevalue] = useState(timeZone);


  useEffect(() => {
    fetch(`${ApiURL}/current-time`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDate(res.date));
  }, [])

  useEffect(() => {
    if (timezonevalue !== timeZone) {
      setTimezoneinfo(true);
    } else {
      setTimezoneinfo(false);
    }
  }, [timezonevalue]);

  const Next = () => {
    localStorage.setItem("FirstName", (FirstName))
    localStorage.setItem("LastName", (LastName))
    localStorage.setItem(" Workspace", (Workspace))
    localStorage.setItem("Timezone", (timezonevalue))
  }
  const fetchTimeZone = () => {
    fetch(`${ApiURL}/timezone`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setTimeZoneList(res.data);
        }
      });
  }
  useEffect(() => {
    fetchTimeZone();
  }, [])

  const handleChange = (event) => {
    setTimezonevalue(event.target.value);
  };
  return (
    <div style={{ padding: "0px 16px", maxWidth: "618px", width: "100%" }}>
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
            onChange={(event) => {
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
            onChange={(event) => {
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
          <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label" color="warning" shrink >TimeZone</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={timezonevalue}
              color="warning"
              onChange={handleChange}
              label="Timezone"
              notched
              className="Timezonelist"
            >
              {timeZoneList && timeZoneList.map((op, i) =>
                <MenuItem key={i} value={op.timezone}>{op.timezone}</MenuItem>
              )}
            </Select>

          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "16px",
          }}
        >
          <AccessTimeOutlinedIcon color="warning" style={{ opacity: "80%" }} />
          <span className="currenttime">
            Current time at selected timezone:<br />{Date}
          </span>
        </div>
        {timezoneinfo && <div className="TimeZoneDiv">
          <Alert severity="info" className="TimezomeInfo">
            <div className="TimeZoneinnerDiv">Your timezone:<br />{timeZone} </div>
            <div><Button onClick={() => {
              setTimezonevalue(timeZone);
              setTimezoneinfo(false);
            }}>Use it</Button></div></Alert>
        </div>}
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
            onChange={(event) => {
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
          <Button onClick={() => {
            props.handleNext();
            Next();
          }} className="btnNext">
            <span>
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
