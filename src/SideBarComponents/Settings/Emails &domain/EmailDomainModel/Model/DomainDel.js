import React from 'react'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 444,
  height: 140,
  innerHeight: 171,
  boxShadow: 24,
  bgcolor: "background.paper",
  borderRadius: "4px",
  margin: "8px",
};
export default function DomainDel({isOpen,isClose}) {
  return (
    <Modal keepMounted open={isOpen} onClose={isClose}>
      <Box sx={style}>
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
          style={{ fontWeight: "500", padding: "32px 16px", fontSize: "16px" }}
        >
          Are you sure to delete? No way back.
        </Typography>

        <Typography
          id="keep-mounted-modal-description"
          style={{ display: "flex", padding: "8px" }}
        >
          <Button
            className="newtemplatebtn"
            style={{ width: "77px" }}
            onClick={isClose}
          >
            Cancel
          </Button>
          <div
            style={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <Button className="emaildeletebtn">
              <DeleteIcon fontSize="small" style={{ marginRight: "10px" }} />{" "}
              Delete
            </Button>
          </div>
        </Typography>
      </Box>
    </Modal>
  )
}
