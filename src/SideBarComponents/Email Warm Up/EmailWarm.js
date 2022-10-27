import React, { useState } from "react";
import "./EmailWarm.css";
import Alert from "@mui/material/Alert";
import { Button, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import EmailCreateModal from "./EmailCreateModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Menu from "@mui/material/Menu";
// import Pagination from "@mui/material/Pagination";
import MenuItem from "@mui/material/MenuItem";
import CreateIcon from "@mui/icons-material/Create";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import EmaildeleteModal from "./EmaildeleteModal";
import EmailEditModal from "./EmailEditModal";
import Snackbar from "@mui/material/Snackbar";
import WarmUpAnalyticsModal from "./WarmUpAnalyticsModal";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [createData("", "", "", "")];

export default function EmailWarm() {
  const [emailwarmedit, setEmailwarmedit] = useState(false);
  const closeEmailwarmedit = () => {
    setEmailwarmedit(false);
  };
  const [warmupana, setWarmupana] = useState(false);
  const closeWarmUpana = () => {
    setWarmupana(false);
  };
  const [emaildel, setEmaildel] = useState(false);
  const closeEmailDelete = () => {
    setEmaildel(false);
  };
  const [pause, setPause] = useState(true);
  const [run, setRun] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuclose = () => {
    setAnchorEl(null);
  };
  const [emailCreate, setEmailCreate] = useState(false);
  const closeEmailCreate = () => {
    setEmailCreate(false);
  };
  const [warmAlert, setWarmAlert] = useState(true);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClicksnack = () => {
    setSnackOpen(true);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fafbfb",
      }}
    >
      <div className="EmailContainerdiv">
        <div className="Emailheading">Email Warm Up</div>
        {warmAlert && (
          <Alert
            severity="info"
            onClose={() => {
              setWarmAlert(false);
            }}
            style={{ marginBottom: "24px" }}
          >
            Use Warm up feature to raise your email account reputation before
            sending emails.
          </Alert>
        )}
        <div style={{ textAlign: "end" }}>
          <Button
            className="addwarmbtn"
            onClick={() => {
              setEmailCreate(true);
            }}
          >
            <AddIcon fontSize="small" style={{ marginRight: "8px" }} />
            Add email warm up
          </Button>
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Box className="loadingline">
            <LinearProgress color="warning" />
          </Box>
        </div>
        <div style={{ width: "100%", overflowX: "auto" }}>
          <Table aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell>Mail account & IMAP</TableCell>
                <TableCell align="right">&nbsp;</TableCell>
                <TableCell align="left">Processing</TableCell>
                <TableCell align="right">&nbsp;</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">
                    {
                      <>
                        <Tooltip
                          title="Warm up analytics"
                          placement="top"
                          arrow
                        >
                          <IconButton
                            onClick={() => {
                              setWarmupana(true);
                            }}
                          >
                            <AnalyticsOutlinedIcon color="action" />
                          </IconButton>
                        </Tooltip>
                        <IconButton onClick={handleClick}>
                          <MoreVertOutlinedIcon color="action" />
                        </IconButton>
                      </>
                    }
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        "aria-labelledby": "fade-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={menuclose}
                    >
                      <MenuItem
                        onClick={() => {
                          menuclose();
                          setEmailwarmedit(true);
                        }}
                        style={{ gap: "12px" }}
                      >
                        <CreateIcon color="action" /> Edit
                      </MenuItem>
                      {pause && (
                        <MenuItem
                          onClick={() => {
                            menuclose();
                            setRun(true);
                            setPause(false);
                            handleClicksnack();
                          }}
                          style={{ gap: "12px" }}
                        >
                          <PauseCircleOutlineIcon color="action" />
                          Pause
                        </MenuItem>
                      )}
                      {run && (
                        <MenuItem
                          onClick={() => {
                            menuclose();
                            setPause(true);
                            setRun(false);
                            handleClicksnack();
                          }}
                          style={{ gap: "12px" }}
                        >
                          <PlayCircleFilledWhiteOutlinedIcon color="action" />
                          Run
                        </MenuItem>
                      )}
                      <MenuItem
                        onClick={() => {
                          menuclose();
                          setEmaildel(true);
                        }}
                        style={{ gap: "12px" }}
                      >
                        <DeleteIcon color="action" /> Delete
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="pageNo">
          <Typography>Page: {page}</Typography>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          {/* <Pagination count={10} page={page} onChange={handleChange} /> */}
        </div>
      </div>
      <EmailCreateModal open={emailCreate} close={closeEmailCreate} />
      <EmaildeleteModal isOpen={emaildel} isClose={closeEmailDelete} />
      <EmailEditModal open={emailwarmedit} close={closeEmailwarmedit} />
      <WarmUpAnalyticsModal open={warmupana} close={closeWarmUpana} />
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Warming updated"
      />
    </div>
  );
}
