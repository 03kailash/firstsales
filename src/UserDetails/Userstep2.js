import React, { useState } from "react";
import "./Userstep2.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";

export default function Userstep2(props) {
  const [value, setValue] = React.useState("female");
  const [age, setAge] = React.useState("");
  const [crm, setCrm] = useState(false);
  const [toggle, setToggle] = useState({
    sales: false,
    marketing: false,
    recrutiers: false,
    agency: false,
    others: false,
  });

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{ padding: "0px 16px", maxWidth: "100%" }}>
      <div className="usercontainerstep2">
        <div className="step2head">Tell us a bit more</div>

        <div className="usingfirst">
          <div style={{ maxWidth: "fit-content", marginLeft: "20%" }}>
            <span className="usingsales">Who will be using First Sales?</span>
            <br />
            <Button
              className={toggle.sales ? "tooglebtnActive" : "tooglebtn"}
              onClick={() => setToggle({ sales: true })}
              style={{ margin: "16px 8px 8px 0px" }}
            >
              Sales Team
            </Button>
            <Button
              className={toggle.marketing ? "tooglebtnActive" : "tooglebtn"}
              style={{ margin: " 16px 8px 8px" }}
              onClick={() => setToggle({ marketing: true })}
            >
              Marketing Team
            </Button>
            <Button
              className={toggle.recrutiers ? "tooglebtnActive" : "tooglebtn"}
              onClick={() => setToggle({ recrutiers: true })}
              style={{ margin: "8px 8px 8px 0px" }}
            >
              Recrutiers
            </Button>
            <Button
              className={toggle.agency ? "tooglebtnActive" : "tooglebtn"}
              onClick={() => setToggle({ agency: true })}
              style={{ margin: "8px" }}
            >
              Agency Team
            </Button>
            <Button
              className={toggle.others ? "tooglebtnActive" : "tooglebtn"}
              onClick={() => setToggle({ others: true })}
              style={{ marginTop: "8px" }}
            >
              Other
            </Button>
            <br></br>
            <FormControl style={{ marginTop: "16px" }}>
              <FormLabel className="formlabel">
                Are you currently using a CRM?
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-Buttons-group"
                name="controlled-radio-Buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Yes"
                  control={<Radio />}
                  label="Yes"
                  style={{ marginTop: "10px" }}
                  onClick={() => {
                    setCrm(true);
                  }}
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="No"
                  onClick={() => {
                    setCrm(false);
                  }}
                />
              </RadioGroup>
            </FormControl>

            {crm && (
              <FormControl
                sx={{ marginTop: "8px", minWidth: 334 }}
                size="small"
              >
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  onChange={handleChange2}
                  color="warning"
                >
                  <MenuItem value={1}>Zoho CRM</MenuItem>
                  <MenuItem value={10}>Pipedrive</MenuItem>
                  <MenuItem value={20}>Freshsales</MenuItem>
                  <MenuItem value={30}>Close</MenuItem>
                  <MenuItem value={30}>Copper</MenuItem>
                  <MenuItem value={30}>Zendesk Sell</MenuItem>
                  <MenuItem value={30}>Salesforce</MenuItem>
                  <MenuItem value={30}>Microsoft Dynamics</MenuItem>
                  <MenuItem value={30}>Others</MenuItem>
                </Select>
              </FormControl>
            )}

            <div className="teamno">How many people in your team?</div>

            <FormControl sx={{ marginTop: "8px", minWidth: 334 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                onChange={handleChange2}
                color="warning"
              >
                <MenuItem value={1}>Just me</MenuItem>
                <MenuItem value={10}>2-5</MenuItem>
                <MenuItem value={20}>5-20</MenuItem>
                <MenuItem value={30}>20+</MenuItem>
              </Select>
            </FormControl>

            <div className="teamno">What describes your industry best?</div>

            <FormControl sx={{ marginTop: "8px", minWidth: 334 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                onChange={handleChange2}
                color="warning"
              >
                <MenuItem value={1}>IT Services</MenuItem>
                <MenuItem value={10}>Saas</MenuItem>
                <MenuItem value={20}>Human Resources</MenuItem>
                <MenuItem value={30}>Markting & Advertising</MenuItem>
                <MenuItem value={10}>Internet</MenuItem>
                <MenuItem value={10}>Other</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={props.handleNext} className="btnNext2">
            <span>
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
