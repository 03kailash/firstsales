import React, { useState } from "react";
import "./Reports.css";
import Button from "@mui/material/Button";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import GroupIcon from "@mui/icons-material/Group";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import { IconButton } from "@mui/material";
import TableViewRoundedIcon from "@mui/icons-material/TableViewRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import LinearProgress from "@mui/material/LinearProgress";
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
function Reports() {
  const [timerange, setTimerange] = useState("l7d");
  const [product, setproduct] = useState(false);
  const [Engage, setEngage] = useState(false);
  const [contana, setcontana] = useState(false);

  const [arrow, setarrow] = useState(false);
  const [contADD, setcontADD] = useState(false);
  const [arrow2, setarrow2] = useState(false);
  const [arrow3, setarrow3] = useState(false);
  const [arrow4, setarrow4] = useState(false);
  const [filter, setfiler] = useState(false);
  const [age, setAge] = React.useState("");
  const handleChangee = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          className="ProductBtn"
          style={{ textTransform: "inherit" }}
          onClick={() => {
            setproduct(true);
            setEngage(false);
            setcontana(false);
          }}
        >
          <AccessibilityNewIcon className="BtnIcon" />
          <span className="ProductText">Produvtivity Reports</span>
        </Button>
        <Button
          className="ProductBtn"
          style={{ textTransform: "inherit" }}
          onClick={() => {
            setEngage(true);
            setproduct(false);
            setcontana(false);
          }}
        >
          <StarRoundedIcon className="BtnIcon" />
          <span className="ProductText"> Engagements Reports</span>
        </Button>
        <Button
          className="ProductBtn"
          style={{ textTransform: "inherit" }}
          onClick={() => {
            setcontana(true);
            setproduct(false);
            setEngage(false);
          }}
        >
          <GroupIcon className="BtnIcon" />
          <span className="ProductText">Contacts Reports</span>
        </Button>
        <div style={{ maxWidth: "178px" }}>
              <FormControl size="small" color="warning" fullWidth>
                <InputLabel id="demo-controlled-open-select-label">
                  Time range
                </InputLabel>
                <Select
                  native
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  label="Time range"
                  value={timerange}
                  onChange={(event) => {
                    setTimerange(event.target.value);
                  }}
                >
                  <option value={"l7d"}>Last 7 days</option>
                  <option value={"l14d"}>Last 14 days</option>
                  <option value={"l30d"}>Last 30 days</option>
                  <option value={"l90d"}>Last 90 days</option>
                  <option value={"lw"}>Last week</option>
                  <option value={"l6w"}>Last 6 week</option>
                  <option value={"mtd"}>Month to date</option>
                  <option value={"lm"}>Last month</option>
                  <option value={"l3m"}>Last 3 month</option>
                  <option value={"l6m"}>Last 6 month</option>
                  <option value={"l12m"}>Last 12 month</option>
                  <option value={"ytd"}>Year to date</option>
                  <option value={"ly"}>Last year</option>
                </Select>
              </FormControl>
            </div>
        <Button
          variant="outlined"
          style={{ textTransform: "inherit" }}
          onClick={() => {
            if (filter) {
              setfiler(false);
            } else {
              setfiler(true);
            }
          }}
        >
          <FilterListIcon className="BtnIcon" />
          <span className="ProductText">Filter</span>
        </Button>
      </div>
      <hr style={{ marginTop:"24px",marginBottom:'0px' }} />
      {filter && (
        <div className="filter">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ padding: "0px 20px" }}>Filter by:</span>

            <FormControl sx={{ m: 1, minWidth: 197 }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                style={{ color: "#ff8e00", maxWidth: "90px" }}
                size="small"
              >
                <span className="ProductText">Campaign</span>
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Time Range"
                onChange={handleChangee}
                size="small"
                color="warning"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Last month</MenuItem>
                <MenuItem value={20}>last 7 day</MenuItem>
                <MenuItem value={30}>Last 5 day</MenuItem>
              </Select>
            </FormControl>
            <spam style={{ padding: "0px 20px" }}>Or</spam>

            <FormControl sx={{ m: 1, minWidth: 197 }}>
              <InputLabel
                id="demo-simple-select-helper-label"
                style={{ color: "#ff8e00", maxWidth: "90px" }}
                size="small"
              >
                <span className="ProductText">Team Member</span>
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Time Range"
                onChange={handleChangee}
                size="small"
                color="warning"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Last month</MenuItem>
                <MenuItem value={20}>last 7 day</MenuItem>
                <MenuItem value={30}>Last 5 day</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      )}
      <br />
      {product && (
        <div>
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <span className="EmailSenttext">Emails Sent</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "85%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon
                    onClick={() => {
                      if (arrow) {
                        setarrow(false);
                      } else {
                        setarrow(true);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <span className="EmailSenttext">Contacts Added</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "81%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon
                    onClick={() => {
                      if (contADD) {
                        setcontADD(false);
                      } else {
                        setcontADD(true);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
                onClick={() => {
                  if (arrow2) {
                    setarrow2(false);
                  } else {
                    setarrow2(true);
                  }
                }}
              >
                <span className="EmailSenttext">Won Leads</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "85%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
                onClick={() => {
                  if (arrow3) {
                    setarrow3(false);
                  } else {
                    setarrow3(true);
                  }
                }}
              >
                <span className="EmailSenttext">Ignored Leads</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "82%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
                onClick={() => {
                  if (arrow4) {
                    setarrow4(false);
                  } else {
                    setarrow4(true);
                  }
                }}
              >
                <span className="EmailSenttext">Lost Leads</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "85%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {Engage && (
        <div>
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <div>
                  <span className="EmailSenttext">Engagements by Day</span>
                  <Tooltip placement="right-start" title="Displays all engagements on the specified date. This may include engagements with any email even if sent on a previous day.">
                    <IconButton>
                      <HelpIcon className="HelpIcon" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "70%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />

          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <div className="EmailSenttext">
                  Engagements by Sent Date
                  <Tooltip  placement="right-start" title="Displays engagements for any email sent on the specified date, even if the engagement occurs at a later date.">
                    <IconButton>
                      <HelpIcon className="HelpIcon" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "64%",
                  }}
                >

                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />

          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <div>
                  <span className="EmailSenttext">
                    Engagements by First Email
                  </span>
                  <Tooltip  placement="right-start" title="Displays the engagement data for recipients who received their first email on the specified date, even if they engage with a different email later in the series.">
                    <IconButton>
                      <HelpIcon className="HelpIcon" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "63%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />
        </div>
      )}

      {contana && (
        <div>
          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <div>
                  <span className="EmailSenttext">Contacts Activity</span>
                  <Tooltip  placement="right-start" title="Shows activity around contact for the specified date. This may include status changes for contacts even if contacts were created on past dates.">
                    <IconButton>
                      <HelpIcon className="HelpIcon" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "74%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
          <br />

          <div
            style={{
              border: "1px solid",
              borderColor: "rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                minHeight: "53px",
                backgroundColor: "#f2f3f3",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "53px",
                }}
              >
                <div>
                  <span className="EmailSenttext">
                    Contacts Activity by Created Date
                  </span>
                  <Tooltip  placement="right-start" title="Displays the status of all contacts created on the specified date, even if the status changes at a later date.">
                    <IconButton>
                      <HelpIcon className="HelpIcon" />
                    </IconButton>
                  </Tooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "58%",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon />
                </div>
              </div>
            </div>
            {arrow && (
              <div className="arrowIcon">
                <div style={{ paddingTop: "16px" }}>
                  <span>Change View :</span>
                  <IconButton>
                    <BarChartRoundedIcon />
                  </IconButton>
                  <IconButton>
                    <TableViewRoundedIcon />
                  </IconButton>
                </div>
                <div
                  style={{
                    width: "75%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton>
                    <RefreshRoundedIcon />
                  </IconButton>
                  <Button>
                    <ArrowUpwardOutlinedIcon disalbe />
                    Export CSV
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;
