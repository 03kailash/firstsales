import React, { useState } from "react";
import "./Billing.css";
import Chip from "@mui/material/Chip";
import { Button, IconButton } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ButtonGroup from "@mui/material/ButtonGroup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
export default function Billing() {
  const [month, setmonth] = useState(true);
  const [special, setspecial] = useState(false);
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <div className="BillingTopDiv">
        <div className="textPlan">Your current plan</div>
        <div className="firstPlan">
          <div className="TrailPlan">
            <div className="textYouhave">You have</div>
            <div className="trailDay">Free trial for 7 days</div>
            <div style={{ marginTop: "8px" }}>
              <Chip label="5 day left" className="trailChip" size="small" />
            </div>
          </div>
          <div className="planDiv">
            <div style={{ display: "flex" }} className="planDivInner">
              <div>
                <div>1 User</div>
                <div className="MonthPlanText">Monthly plan</div>
                <div className="PlanPrice">
                  <span style={{ fontSize: "28px", margin: "0px 3px" }}>
                    $149
                  </span>
                  <span style={{ margin: "0px 3px" }}>/</span>
                  <span style={{ margin: "0px 3px" }}>month</span>
                  <div className="NextPayment">
                    Next payment: October 25th, 2022
                  </div>
                </div>
              </div>
              <div className="ChangePlanDiv">
                <div style={{ textAlign: "center" }}>
                  <Button className="Changeplan">Upgrade plan</Button>
                </div>
                <div>
                  <Button className="Cancelplan">Cancel Subscription</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="Plans">Plans & Pricing</p>
        <div style={{ paddingBottom: "32px" }}>
          <ToggleButtonGroup
            color="warning"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              value="Monthly"
              style={{
                height: "40px",
                textTransform: "inherit",
                color: "#ff8e00",
              }}
              onClick={() => {
                setmonth(true);
                setspecial(false);
              }}
            >
              Monthly
            </ToggleButton>
            <ToggleButton
              value="Special plan"
              style={{
                height: "40px",
                textTransform: "inherit",
                color: "#ff8e00",
              }}
              onClick={() => {
                setmonth(false);
                setspecial(true);
              }}
            >
              Special Offer 🎁
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {month && (
          <div>
            <div className="MonthlyPlans">
              <div style={{ width: "139px", height: "109px" }}>
                <span>1 user</span>
                <div>
                  <span className="thirty">$30</span>
                  <span className="Months">/month</span>
                </div>
                <div className="days">Free trial for 7 days</div>
              </div>
              <div
                style={{
                  width: "278px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span className="userAccountText">Amount of users</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button size="small">
                        <IconButton size="small">
                          <RemoveIcon />
                        </IconButton>
                      </Button>
                      <Button>1</Button>

                      <Button size="small">
                        <IconButton size="small">
                          <AddIcon />
                        </IconButton>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 team member
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 connected mailbox
                  (SMTP)
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 mail warming
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 connected IMAP
                </span>
              </div>
              <div
                style={{
                  width: "202px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button className="choosePlan">Choose Plan</Button>
              </div>
            </div>
            <div className="MonthlyPlans">
              <div style={{ width: "139px", height: "109px" }}>
                <span>Unlimited</span>
                <div>
                  <span className="thirty">$149</span>
                  <span className="Months">/month</span>
                </div>
                <div className="days">Free trial for 7 days</div>
              </div>
              <div
                style={{
                  width: "278px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
              <div>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" /> team member
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" />
                  connected mailbox (SMTP)
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" />
                  mail warming
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" /> connected IMAP
                </span>
              </div>
              <div
                style={{
                  width: "204px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button className="choosePlan">Choose Plan</Button>
              </div>
            </div>
          </div>
        )}
        {special && (
          <div>
            <div className="MonthlyPlans">
              <div style={{ width: "139px", height: "109px" }}>
                <span>1 user</span>
                <div>
                  <span className="thirty">$20</span>
                  <span className="Months">/month</span>
                </div>
                <div className="days">Free trial for 7 days</div>
              </div>
              <div
                style={{
                  width: "278px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span className="userAccountText">Amount of users</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button size="small">
                        <IconButton size="small">
                          <RemoveIcon />
                        </IconButton>
                      </Button>
                      <Button>1</Button>

                      <Button size="small">
                        <IconButton size="small">
                          <AddIcon />
                        </IconButton>
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
              <div>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 team member
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 connected mailbox
                  (SMTP)
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 mail warming
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />1 connected IMAP
                </span>
              </div>
              <div
                style={{
                  width: "204px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button className="choosePlan">Choose Plan</Button>
              </div>
            </div>
            <div className="MonthlyPlans">
              <div style={{ width: "139px", height: "109px" }}>
                <span>Unlimited</span>
                <div>
                  <span className="thirty">$99</span>
                  <span className="Months">/month</span>
                </div>
                <div className="days">Free trial for 7 days</div>
              </div>
              <div
                style={{
                  width: "278px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
              <div>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" /> team member
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" />
                  connected mailbox (SMTP)
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" />
                  mail warming
                </span>
                <span className="check">
                  <DoneRoundedIcon className="CheckBtn" />
                  <AllInclusiveIcon className="infinityBtn" /> connected IMAP
                </span>
              </div>
              <div
                style={{
                  width: "204px",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button className="choosePlan">Choose Plan</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
