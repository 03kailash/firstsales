import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import fssaas from "../Images/fssaas.svg";
import "./Userdetails.css";
import Userstep1 from "./Userstep1";
import Userstep2 from "./Userstep2";
import Button from "@mui/material/Button";
import Userstep3 from "./Userstep3";
import { Link } from "react-router-dom";

const steps = ["Step 1", "Step 2", "Step 3"];
export default function Userdetail() {
  const [activeStep, setActiveStep] = React.useState(0);
  // const isMobile = useMediaQuery("(min-width: 517px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="userhead">
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img src={fssaas} alt="logo" className="firstlogouser" />
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            minWidth: "80%",
            paddingTop: "7px",
            paddingBottom: "32px",
          }}
          className="stepContainer"
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps} className="steps">
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
      </div>
      {activeStep === 0 && (
        <Userstep1
          handleNext={handleNext}
          activeStep={activeStep}
          steps={steps}
        />
      )}
      {activeStep === 1 && (
        <Userstep2
          handleNext={handleNext}
          activeStep={activeStep}
          steps={steps}
        />
      )}
      {activeStep === 2 && (
        <Userstep3
          handleNext={handleNext}
          activeStep={activeStep}
          steps={steps}
        />
      )}
      {activeStep === 0 && (
        <Link to="/Signup" style={{ textDecoration: "none" }}>
          <Button className="cancelbtn">Cancel</Button>
        </Link>
      )}
    </div>
  );
}
