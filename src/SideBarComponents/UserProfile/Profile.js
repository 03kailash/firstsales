import React from "react";
import "./Profile.css";
import Stack from "@mui/material/Stack";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function Profile() {
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ width: "100%", backgroundColor: "#fafbfb " }}>
      <div className="top_Div">
        <div className="Profile_Container">
          <div className="img_full">
            <Avatar
              src="/broken-image.jpg"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
          <div className="select_img">
            <Button color="warning">Select Image</Button>
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
              style={{ maxWidth: "370px",width:'100%' }}
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
              style={{ maxWidth: "370px",width:"100%" }}
            />
          </div>
          <br />
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="BirthDay"
                  backgroundColor="warning"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <br />
          <div className="RedioBtn">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" style={{color:'#ff8e00'}}>Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Rather not Say"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <br />
          <div>
            <div>
              <TextField
                id="outlined-number"
                label="Timezone"
                type="text"
                color="warning"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ MaxWidth: "370px",width:"100%" }}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <div style={{ width: "400px", display: "flex" }}>
          <Button variant="outlined" color="warning" style={{textTransform:"inherit"}}>
            logout
          </Button>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <Button
              style={{ backgroundColor: "#ff8e00", textTransform:"inherit"}}
              variant="contained"
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
