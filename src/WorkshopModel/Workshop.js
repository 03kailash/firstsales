import React, { useEffect, useState } from "react";
import "./Workshop.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Chip from "@mui/material/Chip";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import {  useNavigate } from "react-router-dom";
import { ApiURL } from "../ApiURL";

export default function Workshop() {
  const [open, setOpen] = useState(true);
  const [workSpaceList,setWorkSpaceList]= useState([]);  
  const navigate = useNavigate();
  
 useEffect(()=>{
  fetchviweworkspace();
 },[])
 
 const fetchviweworkspace = () => {
  fetch(`${ApiURL}/view-workspace`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token:localStorage.getItem("token")
    },
  })
    .then((res) => res.json())
    .then((res) => { 
      if (res.status) {
        setWorkSpaceList(res.data)       
      }
    });
};
useEffect(()=>{
  fetchSelectWorkspace();
})
const fetchSelectWorkspace = () => {
  fetch(`${ApiURL}/selectWorkspace`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token:localStorage.getItem("token")
    },
  })
    .then((res) => res.json())
    .then((res) => { 
      if (res.status) {
       console.log(res);       
      }
    });
};
  return (
    <div>
      <div>
        <Modal
          open={open}
         
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
         {workSpaceList && workSpaceList.map((item, index)=>{
           return(
            <div className="workspaceNavigation"
            onClick={()=>{
              navigate("/Dashboard/Profile")
            }}>
              <div className="NameDiv">
                <div>
                  <div style={{ width: "240px", maxWidth: "240px" }}>
                    <div style={{ fontSize: "14px", fontWeight: "700" }}>
                      {item.workspase_name}
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
                      Joined ± {item.created_at}
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
                    <div className="ExpairText">{item.trial_end}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>) 
            })}
            <div className="AddnewWorkspaces">
              <div className="NewWorkspace">
                <Button variant="outlined" className="AddNewText" onClick={()=>{
                  fetchviweworkspace(true);
                  navigate("/Userdetail");
                }}>
                  <AddIcon className="AddnewBtn" /> Add new Workspaces
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
