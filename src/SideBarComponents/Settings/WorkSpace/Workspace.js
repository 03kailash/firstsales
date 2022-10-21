import React, { useState } from "react";
import "./Workspace.css";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import LinearProgress from "@mui/material/LinearProgress";
import WorkspaceDelete from "./WorkspaceDelete";
import SettingMemberModal from "./SettingMemberModal";
import DeleteIcon from "@mui/icons-material/Delete";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";

function createData(user, role) {
  return { user, role };
}

const rows = [createData("Somil", "")];

export default function Workspace() {
  const [deletelink, setDeletelink] = useState(true);
  const [getlink, setGetlink] = useState(false);
  const [teamModal, setTeamModal] = useState(false);
  const closeTeamModal = () => {
    setTeamModal(false);
  };
  const [deletework, setDeletework] = useState(false);
  const closeDeleteWorkspace = () => {
    setDeletework(false);
  };
  return (
    <div>
      <div className="workfirstdiv">
        <div>
          <div className="workheading">Workspace</div>
          <span className="workcode">
            ws-lsOeqtOxAyBhqz522w9oHdUh{" "}
            <IconButton style={{ padding: "5px" }}>
              <FileCopyOutlinedIcon style={{ fontSize: "14px" }} />
            </IconButton>
          </span>
        </div>
        <div>
          <div>
            <TextField
              id="outlined-number"
              label="Workspace Name"
              variant="outlined"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
              className="workspacenameinput"
            />
          </div>
          <div>
            <TextField
              id="outlined-number"
              label="Timezone"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              className="workspacenameinput"
              style={{ marginTop: "16px" }}
            />
          </div>
          <span className="worktime">
            <AccessTimeIcon
              style={{ margin: "0px 16px", color: "rgb(255, 142, 0)" }}
            />
            <span className="worktimehead">
              Current time at selected timezone:
              <br /> October 17, 2022 3:31 PM
            </span>
          </span>
          <Button className="Saveworkbtn">Save</Button>
        </div>
      </div>
      <hr
        style={{
          margin: " 40px 0px",
          borderColor: "rgba(0, 0, 0, 0.12",
          borderStyle: "solid",
          borderWidth: "0px 0px thin",
        }}
      />
      <div className="teamfirstdiv">
        <div className="teamheading">Team Members</div>
        <div style={{ maxWidth: "582px", width: "582px" }}>
          <LinearProgress color="warning" style={{ marginBottom: "8px" }} />
          {getlink && (
            <div>
              <div style={{ marginBottom: "16px" }}>
                Invite new member by sharing a link:
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  color="warning"
                  variant="outlined"
                  className="linkinput"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton style={{ padding: "5px" }}>
                          <FileCopyOutlinedIcon style={{ fontSize: "14px" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <div>
                  <IconButton
                    style={{ marginLeft: "16px" }}
                    onClick={() => {
                      setDeletelink(true);
                      setGetlink(false);
                    }}
                  >
                    <DeleteIcon color="action" />
                  </IconButton>
                </div>
              </div>
              <Alert severity="info" style={{ margin: "16px 0px" }}>
                Invitation link will expire in 6 days.
              </Alert>
            </div>
          )}
          <div style={{ display: "flex", marginBottom: "32px" }}>
            {" "}
            {deletelink && (
              <Button
                className="invitebtn"
                onClick={() => {
                  setGetlink(true);
                  setDeletelink(false);
                }}
              >
                Get invitation link
              </Button>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                maxWidth: "435px",
                width: "435px",
                justifyContent: "end",
              }}
            >
              <Switch disabled color="warning" />
              <div className="showinactive">Show inactive members</div>
            </div>
          </div>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      maxWidth: "446px",
                      width: "446px",
                    }}
                  >
                    User
                  </TableCell>
                  <TableCell>Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.user}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                      setTeamModal(true);
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.user}
                    </TableCell>
                    <TableCell style={{ display: "flex" }}>
                      {" "}
                      <Chip label="Admin" className="adminchip" size="small" />
                      <Chip label="You" className="youchip" size="small" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <hr
        style={{
          margin: " 40px 0px",
          borderColor: "rgba(0, 0, 0, 0.12",
          borderStyle: "solid",
          borderWidth: "0px 0px thin",
        }}
      />
      <div className="deletefirstdiv">
        <div className="teamheading">Delete workspace</div>
        <div>
          <div style={{ marginTop: "8px" }}>
            After you delete the workspace there is no way to bring it back.
          </div>
          <Button
            className="deletework"
            onClick={() => {
              setDeletework(true);
            }}
          >
            Delete this workspace
          </Button>
        </div>
      </div>
      <WorkspaceDelete isOpen={deletework} isClose={closeDeleteWorkspace} />
      <SettingMemberModal isOpen={teamModal} isClose={closeTeamModal} />
    </div>
  );
}
