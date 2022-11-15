import React from "react";
import "./Workshop.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Chip from "@mui/material/Chip";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Workshop() {
  const [open, setOpen] = React.useState(true);
  // const navigate = useNavigate();
  // const location = useLocation();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="WorkspaceMainDiv">
            <div
              style={{ display: "flex", gap: "235px", alignItems: "center" }}
            >
              <div className="model">Workspaces</div>
              <div>
                <div className="AccountCircle">
                  <AccountCircleOutlinedIcon style={{ color: "#ff8e00" }} />
                </div>
                <div style={{ alignContent: "end", fontSize: "12px" }}>
                  Log out
                </div>
              </div>
            </div>
            <Link to="/Dashboard/Profile" className="workspaceNavigation">
              <div className="NameDiv">
                <div>
                  <div style={{ width: "240px", maxWidth: "240px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "700" }}>
                      EMS
                    </div>
                    <div style={{ padding: "3px 0px" }}>
                      Role :{" "}
                      <Chip
                        label="Admin"
                        variant="outlined"
                        size="small"
                        style={{ color: "#ff8e00", borderColor: "#ff8e00" }}
                      />
                    </div>
                    <span
                      style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.6)" }}
                    >
                      Joined ± 20 hours ago
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "16px",
                    justifyContent: "center",
                    width: "150px",
                    maxWidth: "150px",
                  }}
                >
                  <div>
                    <div>
                      <Chip
                        label="Trial Period"
                        size="small"
                        style={{ color: "#ffffff", backgroundColor: "#FFC107" }}
                      />
                    </div>
                    <div className="ExpairText">Expair in 7 days</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </Link>
            <Link to={"/Userdetail"} className="AddnewWorkspaces">
              <div className="NewWorkspace">
                <Button variant="outlined" className="AddNewText">
                  <AddIcon className="AddnewBtn" /> Add new Workspaces
                </Button>
              </div>
            </Link>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
