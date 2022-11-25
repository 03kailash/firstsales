import React from "react";
import axios from "axios";
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
import { ApiURL } from "../../ApiURL";
import { useState } from "react";
import profileimg from "../../Images/profileimg.png";
import { useEffect } from "react";
import { Alert, InputLabel, MenuItem, Select, Snackbar } from "@mui/material";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Logout, ProfileUpdate } from "../../UserServices";

function Profile() {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const [Date, setDate] = useState("");
  const [timeZoneList, setTimeZoneList] = useState([]);
  const [timezonevalue, setTimezonevalue] = React.useState(timeZone);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [timezoneinfo, setTimezoneinfo] = useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const navigate = useNavigate();

  const [crop, setCrop] = useState({
    height: 365,
    unit: "px",
    width: 365,
    x: 4,
    y: 0,
  });
  const [image, setImage] = useState("");

  const uploadFiles = (e) => {
    document.getElementById("img").click();
  };

  const ProfileImgUpdate = () => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        token: localStorage.getItem("token"),
      },
    };
    const formData = new FormData();
    formData.append("id", localStorage.getItem("Workspace_id"));
    formData.append("profile_img", image);
    return axios
      .post(`${ApiURL}/profileImg-update`, formData, config)
      .then((res) => {
        if (res.status) {
          setImage("");
        }
      });
  };

  // setImage(URL.createObjectURL(e.target.files[0]))

  const [birthdate, setBirthdate] = React.useState(dayjs("2014-08-18"));
  const handleChange = (newValue) => {
    setBirthdate(newValue);
  };

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
  useEffect(() => {
    fetchTimeZone();
  }, []);
  const handleChange1 = (event) => {
    setTimezonevalue(event.target.value);
  };

  useEffect(() => {
    if (timezonevalue !== timeZone) {
      setTimezoneinfo(true);
    } else {
      setTimezoneinfo(false);
    }
  }, [timezonevalue]);

  const currentTime = () => {
    fetch(`${ApiURL}/current-time`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setDate(res.date));
  };
  useEffect(() => {
    currentTime();
  }, []);

  console.log(crop);
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
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            <div className="img_full">
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
          <ReactCrop
            crop={crop}
            onChange={(c) => {
              setCrop(c);
            }}
          >
            <img src={image} />
          </ReactCrop>
          <br />
          {image !== "" && (
            <div className="saveimgbtndiv">
              <Button
                className="cancelimgbtn"
                onClick={() => {
                  setImage("");
                }}
              >
                Cancel
              </Button>
              <Button
                className="saveimg"
                onClick={() => {
                  ProfileImgUpdate();
                }}
              >
                Save Image
              </Button>
            </div>
          )}
          <div className="FirstName">
            <TextField
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
                className="timebolte"
              >
                {timeZoneList &&
                  timeZoneList.map((op, i) => (
                    <MenuItem key={i} value={op.timezone} color="warning">
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
            onClick={async () => {
              if (await Logout()) {
                navigate("/Logoutscreen");
              }
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
              onClick={async () => {
                if (
                  await ProfileUpdate(
                    firstname,
                    lastname,
                    birthdate,
                    gender,
                    timezonevalue
                  )
                ) {
                  setSnackOpen(true);
                }
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Profile saved"
      />
    </div>
  );
}

export default Profile;
