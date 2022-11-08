import React, { useState } from "react";
import "./payment.css";
import firstimg from "./firstimg.png";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import AccountBalanceSharpIcon from "@mui/icons-material/AccountBalanceSharp";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["BlinkMacSystemFont", '"Segoe UI"'].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Payment() {
  const [bankInfo, setbankInfo] = useState(false);
  const [cardInfo, setcardInfo] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div style={{ backgroundColor: "rgb(224, 224, 224)" }} className="pay">
      <div className="PaymentDiv">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "920px",
          }}
        >
          <div>
            <div className="ContainerDivTop">
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onMouseOver={() => {
                    setIsFocus(true);
                  }}
                  onMouseLeave={() => {
                    setIsFocus(false);
                  }}
                >
                  <ArrowBackIcon />

                  {isFocus ? <span>Back</span> : <span>Firstsales.io</span>}
                </div>
                <div className="logodiv">
                  <div style={{ width: "100%" }}>
                    <div>
                      <span className="textFirstSales">Try First Sales</span>
                    </div>
                    <div className="day7">7 days free</div>
                    <div
                      style={{ color: "hsla(0,0%,10%,.6)", fontSize: "14px" }}
                    >
                      Then US$30.00 per month
                    </div>
                  </div>
                </div>
                <div className="imgDiv">
                  <img src={firstimg} alt="" />
                </div>
              </div>
            </div>
            <footer className=" footer-powerBy">
              <span>
                Powered By:{" "}
                <strong style={{ paddingRight: "16px" }}>
                  <a href="https://stripe.com/in">Stripe</a>
                </strong>
              </span>
              <span>|</span>
              <div className="Footer-Links-Link">
                <a
                  href="https://stripe.com/in/legal/link-account-terms"
                  style={{ paddingLeft: "16px" }}
                >
                  Teams
                </a>
                <a
                  href="https://stripe.com/in/privacy"
                  style={{ paddingLeft: "16px" }}
                >
                  Privacy
                </a>
              </div>
            </footer>
          </div>
          <div className="paymentMethod">
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <span className="details">Enter payment details</span>
            </div>
            <div>
              <Box component="form" noValidate>
                <div style={{ paddingBottom: "20px", width: "100%" }}>
                  <FormControl variant="standard" style={{ width: "100%" }}>
                    <BootstrapInput
                      id="bootstrap-input"
                      className="EmailFeildDiv"
                      disabled
                    />
                  </FormControl>

                  <FormControl variant="standard" style={{ width: "100%" }}>
                    <BootstrapInput
                      id="bootstrap-input"
                      className="EmailFeild"
                      placeholder="081234 56789"
                    />
                  </FormControl>
                </div>
              </Box>
            </div>

            <div>
              <div className="payText">Payment method</div>
              <div>
                <Box component="form" noValidate>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <FormControl
                      variant="standard"
                      onClick={() => {
                        setcardInfo(true);
                        setbankInfo(false);
                      }}
                    >
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>

                    <FormControl
                      variant="standard"
                      onClick={() => {
                        setcardInfo(false);
                        setbankInfo(true);
                      }}
                    >
                      <BootstrapInput id="bootstrap-input" />
                    </FormControl>
                  </div>
                </Box>
              </div>
              {cardInfo && (
                <div>
                  <div>
                    <div className="PaymentDivText">Card information</div>
                    <div style={{ paddingTop: "10px", width: "100%" }}>
                      <Box component="form" noValidate>
                        <FormControl
                          variant="standard"
                          style={{ width: "100%" }}
                        >
                          <BootstrapInput
                            id="bootstrap-input"
                            className="EmailFeildDiv"
                            placeholder="1234 1234 1234 1234"
                          />
                        </FormControl>
                        <div style={{ width: "100%", display: "flex" }}>
                          <FormControl variant="standard">
                            <BootstrapInput
                              id="bootstrap-input"
                              className="EmailFeildMM"
                              placeholder="MM/YY"
                            />
                          </FormControl>

                          <FormControl variant="standard">
                            <BootstrapInput
                              id="bootstrap-input"
                              className="EmailFeildCvv"
                              placeholder="Cvv"
                            />
                          </FormControl>
                        </div>
                      </Box>
                    </div>
                    <div className="PaymentDivText">Name of card</div>
                    <div style={{ width: "100%", marginTop: "8px" }}>
                      <FormControl variant="standard" style={{ width: "100%" }}>
                        <BootstrapInput
                          id="bootstrap-input"
                          className="EmailFeildDivv"
                        />
                      </FormControl>
                    </div>
                  </div>

                  <div className="PaymentDivText">Country or region</div>
                  <div style={{ width: "100%", marginTop: "8px" }}>
                    <FormControl variant="standard" style={{ width: "100%" }}>
                      <BootstrapInput
                        id="bootstrap-input"
                        className="EmailFeildDivv"
                      />
                    </FormControl>
                  </div>

                  <div style={{ width: "100%", marginTop: "30px" }}>
                    <FormControl variant="standard" style={{ width: "100%" }}>
                      <BootstrapInput
                        id="bootstrap-input"
                        className="ChaeckboxDiv"
                      >
                        <Checkbox {...label} />
                      </BootstrapInput>
                    </FormControl>
                    <FormControl variant="standard" style={{ width: "100%" }}>
                      <BootstrapInput
                        id="bootstrap-input"
                        className="ChaeckboxxDiv"
                      />
                    </FormControl>
                    <FormControl variant="standard" style={{ width: "100%" }}>
                      <BootstrapInput
                        id="bootstrap-input"
                        className="ChaeckboxDivv"
                        disabled
                      />
                    </FormControl>
                  </div>
                </div>
              )}
              {bankInfo && (
                <div>
                  <div className="PaymentDivText">Full name</div>
                  <div style={{ width: "100%" }}>
                    <FormControl variant="standard" style={{ width: "100%" }}>
                      <BootstrapInput
                        id="bootstrap-input"
                        className="EmailFeildDivv"
                      />
                    </FormControl>
                  </div>
                  <div className="PaymentDivText">
                    Bank account
                    <div className="Lock">
                      <LockIcon
                        style={{ color: "rgb(20, 212, 51)", fontSize: "16" }}
                      />
                      <span className="Lock">Secured by Stripe</span>
                    </div>
                  </div>

                  <div style={{ width: "100%", marginTop: "8px" }}>
                    <FormControl variant="standard" style={{ width: "100%" }}>
                      <BootstrapInput
                        id="bootstrap-input"
                        className="EmailFeildDivv"
                        placeholder="Search for your bank"
                      />
                    </FormControl>
                  </div>
                </div>
              )}
            </div>
            <div>
              <Button className="StarttrialBtn">Start trial</Button>
            </div>
            <div className="ConfirmPayment-PostSubmit">
              After your trial ends, you will be charged US$149.00 per month
              starting 13 November 2022. You can always cancel before then.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
