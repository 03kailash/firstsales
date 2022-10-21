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
import Box from "@mui/material/Box";
function Reports() {
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
          }}
        >
          <GroupIcon className="BtnIcon" />
          <span className="ProductText">Contacts Reports</span>
        </Button>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel
            id="demo-simple-select-helper-label"
            style={{ color: "#ff8e00", maxWidth: "90px" }}
            size="small"
          >
            <span className="ProductText">Time Range</span>
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
      <hr style={{ margin: "0px" }} />
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
                <span className="EmailSenttext">Engagements by Day</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "75%",
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
                <span className="EmailSenttext">Engagements by Sent Date</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "69%",
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
                <span className="EmailSenttext">
                  Engagements by First Email
                </span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "68%",
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
                <span className="EmailSenttext">Contacts Activity</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    width: "80%",
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
                <span className="EmailSenttext">
                  Contacts Activity by Created Date
                </span>
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
        </div>
      )}
    </div>
  );
}

export default Reports;
