import React, { useEffect, useState } from "react";
import "./Userstep2.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import { ApiURL } from "../ApiURL";
export default function Userstep2(props) {
  const [value, setValue] = React.useState("female");
  const [age, setAge] = React.useState("");
  const [team,setteam] = useState("")
  const [industry,setindustry] = useState("")
  const [crm, setCrm] = useState(false);
  const [crmApi, setcrmApi] = useState([]);
  const [teamsizeApi, setteamsizeApi] = useState([]);
  const [ServicesApi, setServicesApi] = useState([]);
  const [FirstSales,setFirstSales] = useState(" ")
  const [toggle, setToggle] = useState({
    sales: false,
    marketing: false,
    recrutiers: false,
    agency: false,
    others: false,
  });

  const handleChange4 = (event) => {
    setindustry(event.target.value);
  };
  const handleChange3 = (event) => {
    setteam(event.target.value);
  };
  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetchcrm();
  },[])

  const Next=()=>{
    localStorage.setItem("Crm_id",(age));
    localStorage.setItem("Teamsize",(team))
    localStorage.setItem("Industry",(industry))
    localStorage.setItem("crm",(value))
    localStorage.setItem("who_use_First_sales",(FirstSales))


}
  const fetchcrm = () => {
    fetch(`${ApiURL}/get-crm`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setcrmApi(res.data);
        }
      });
  };

  useEffect(() => {
    fetchteamsize();
  },[])
  const fetchteamsize = () => {
    fetch(`${ApiURL}/team-size`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setteamsizeApi(res.data);
        }
      });
  };

  useEffect(() => {
    fetchindusrty();
  },[])
  const fetchindusrty = () => {
    fetch(`${ApiURL}/industry`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setServicesApi(res.data);
        }
      });
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
              onClick={() =>{ setToggle({ sales: true })
              setFirstSales("Sales Team")
              }}
              style={{ margin: "16px 8px 8px 0px" }}
            >
              Sales Team
            </Button>
            <Button
              className={toggle.marketing ? "tooglebtnActive" : "tooglebtn"}
              style={{ margin: " 16px 8px 8px" }}
              onClick={() => {setToggle({ marketing: true })
              setFirstSales("Marketing Team")
            }}
            >
              Marketing Team
            </Button>
            <Button
              className={toggle.recrutiers ? "tooglebtnActive" : "tooglebtn"}
              onClick={() =>{setToggle({ recrutiers: true })
              setFirstSales(" Recrutiers")
            }}
              style={{ margin: "8px 8px 8px 0px" }}
            >
              Recrutiers
            </Button>
            <Button
              className={toggle.agency ? "tooglebtnActive" : "tooglebtn"}
              onClick={() =>{setToggle({ agency: true })
              setFirstSales(" Agency Team")
            }}
              style={{ margin: "8px" }}
            >
              Agency Team
            </Button>
            <Button
              className={toggle.others ? "tooglebtnActive" : "tooglebtn"}
              onClick={() =>{ setToggle({ others: true })
              setFirstSales("Other")
              }}
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
                  {crmApi && crmApi.map((op, i) =>
                    <MenuItem key={i} value={op.id}>{op.crm_name}</MenuItem>
                  )}
                </Select>
              </FormControl>
            )}

            <div className="teamno">How many people in your team?</div>

            <FormControl sx={{ marginTop: "8px", minWidth: 334 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={team}
                onChange={handleChange3}
                color="warning"
              >
                {teamsizeApi && teamsizeApi.map((op, index) =>
                  <MenuItem key={index} value={op.id}>{op.team_size}</MenuItem>
                )}
              </Select>
            </FormControl>

            <div className="teamno">What describes your industry best?</div>

            <FormControl sx={{ marginTop: "8px", minWidth: 334 }} size="small">
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={industry}
                onChange={handleChange4}
                color="warning"
              >
                {ServicesApi && ServicesApi.map((op,i) =>
                  <MenuItem key={i} value={op.id}>{op.industry}</MenuItem>
                )}
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button  onClick={()=>{
            props.handleNext();
            Next();
          }}className="btnNext2">
            <span>
              {props.activeStep === props.steps.length - 1 ? "Finish" : "Next"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
