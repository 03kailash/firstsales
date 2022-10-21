import React from "react";
import "./WorkspaceDelete.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DeleteWorkSpaceIcon from "../SettingImages/DeleteWorkSpaceIcon.svg";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function WorkspaceDelete({ isOpen, isClose }) {
  return (
    <Modal keepMounted open={isOpen} onClose={isClose}>
      <Box className="delmodal">
        <div className="modalflexdiv">
          <div className="deletemodaldiv1">
            <div>
              <IconButton style={{ margin: "8px" }}>
                <CloseIcon color="action" />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "56px 0px",
              }}
            >
              <img src={DeleteWorkSpaceIcon} alt="WorkShop Delete Img" />
            </div>
          </div>
          <div className="deletemodaldiv2">
            <div className="goingtodelete">You are going to delete file</div>
            <div className="deletecontent">
              Deleting the workspace{" "}
              <div style={{ display: "inline", fontWeight: "500" }}>
                will delete all imported data, templates, and running, paused,
                and archived campaigns.
              </div>{" "}
              Also, you will lose access to all analytics of this workspace.
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button className="deletework2">Delete this workspace</Button>
            </div>
            <div className="cannotundonediv">
              <ErrorOutlineIcon style={{ color: "rgb(244, 67, 54)" }} />
              <div className="cannotundone">This step cannot be undone</div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
