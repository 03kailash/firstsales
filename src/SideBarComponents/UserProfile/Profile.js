import React from "react";
import "./Profile.css";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { ApiURL } from "../../ApiURL";
import { useState } from "react";
import profileimg from "../../Images/profileimg.png";
import { useEffect } from "react";
import { Alert, InputLabel, MenuItem, Select } from "@mui/material";

function Profile(props) {
  const [Time, setTime] = useState(false);
  const [Date, setDate] = useState("");
  const [timeZoneList, setTimeZoneList] = useState([]);
  const [timezonevalue, setTimezonevalue] = React.useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [profilepic, setProfilepic] = useState();
  const [timezoneinfo, setTimezoneinfo] = useState(false);

  const uploadFiles = () => {
    document.getElementById("img").click();
  };

  const Logout = () => {
    fetch(`${ApiURL}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          props.history.push("/Logoutscreen");
        }
      });
  };

  const ProfileUpdate = () => {
    fetch(`${ApiURL}/profile-update`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        id: 7,
        first_name: "f8uh8htcfrt6y",
        last_name: "guggugg",
        dob: "2000 - 03 - 11",
        gender: 1,
        timezone: "Asia/calcutta",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };
  console.log(localStorage.getItem("token"));
  const [birthdate, setBirthdate] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );
  const handleChange = (newValue) => {
    setBirthdate(newValue);
  };
  useEffect(() => {
    fetchTimeZone();
  }, []);
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
  };
  const handleChange1 = (event) => {
    setTimezonevalue(event.target.value);
    if (timezonevalue !== timeZone) {
      setTimezoneinfo(true);
    } else {
      setTimezoneinfo(false);
    }
  };

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
  }, []);

  useEffect(() => {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    setTimeZone(timeZone);
  }, []);

  return (
    <div style={{ width: "100%", backgroundColor: "#fafbfb " }}>
      <div className="top_Div">
        <div className="Profile_Container">
          <div>
            <input
              type="file"
              accept="image/*"
              id="img"
              style={{ display: "none" }}
            />
            <div className="img_full">
              {/* <Avatar
                onClick={uploadFiles.bind()}
                src="/broken-image.jpg"
                style={{ width: "100%", height: "100%", maxWidth: "90px" }}
              /> */}
              <img
                src={profileimg}
                onClick={uploadFiles.bind()}
                alt="ProfileImg"
                className="profileimg"
              />
            </div>
            <div className="select_img">
              <Button
                color="warning"
                style={{ textTransform: "inherit" }}
                onClick={uploadFiles.bind()}
              >
                Select Image
              </Button>
            </div>
          </div>
          <br />
          <div className="FirstName">
            <TextField
              size="mediu"
              id="outlined-number"
              label="First Name"
              type="text"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ maxWidth: "370px", width: "100%" }}
              value={firstname}
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
            <br />
            <br />
            <TextField
              id="outlined-number"
              label="Last Name"
              type="text"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
              style={{ maxWidth: "370px", width: "100%" }}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="BirthDay"
                  inputFormat="MM/DD/YYYY"
                  value={birthdate}
                  onChange={handleChange}
                  renderInput={(params) => (
                    <TextField {...params} className="dob" color="warning" />
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <br />
          <div className="RedioBtn">
            <FormControl>
              <FormLabel
                id="demo-radio-buttons-group-label"
                style={{ color: "#ff8e00" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              >
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel value="1" control={<Radio />} label="Male" />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Rather not Say"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "16px 0px",
            }}
          >
            <FormControl style={{ width: "100%" }}>
              <InputLabel
                id="demo-simple-select-autowidth-label"
                color="warning"
                shrink
              >
                TimeZone
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={timezonevalue}
                color="warning"
                onChange={handleChange1}
                label="Timezone"
                notched
              >
                {timeZoneList &&
                  timeZoneList.map((op, i) => (
                    <MenuItem key={i} value={op.timezone}>
                      {op.timezone}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <AccessTimeOutlinedIcon
              color="warning"
              style={{ opacity: "80%" }}
            />
            <span className="currenttime">
              Current time at selected timezone:
              <br />
              {Date}
            </span>
          </div>
          {timezoneinfo && (
            <Alert severity="info" className="timeinfo">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Your timezone: {timeZone}
                <Button
                  onClick={() => {
                    setTimezonevalue(timeZone);
                    setTimezoneinfo(false);
                  }}
                  className="useitbtn"
                >
                  Use it
                </Button>
              </div>
            </Alert>
          )}
        </div>
      </div>
      <br />
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <div style={{ width: "400px", display: "flex" }}>
          <Button
            variant="outlined"
            color="warning"
            style={{ textTransform: "inherit" }}
            onClick={() => {
              Logout();
            }}
          >
            Logout
          </Button>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <Button
              variant="contained"
              className="profilesavebtn"
              onClick={() => {
                ProfileUpdate();
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
