import React from "react";
import "./AddContact.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CSVupload from "./CSVupload";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 550,
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function AddContact(props) {
  const [openUP, setOpenUP] = React.useState(false);
  const handleOpenUP = () => setOpenUP(true);
  const handleCloseUP = () => setOpenUP(false);

  return (
    <div>
      <Modal
        open={props.openAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="addcontactmodal"
      >
        <Box sx={style}>
          <h2 className="csv">CSV import</h2>
          <div className="Bodycsv">
            <div className="DotLine">
              <div className="Click">
                Drag and drop CSV file here
                <br />
                or click to select
              </div>
            </div>
            <div className="HRline">
              <div className="HrBlock">
                <hr className="hr" />
                <p className="Ortext"> or </p>
                <hr className="hr" />
                <br />
              </div>
              <Button
                variant="outlined"
                color="warning"
                className="CSVBtn"
                onClick={() => {
                  handleOpenUP();
                  props.handleCloseAdd();
                }}
              >
                Select CSV
              </Button>
              <br />
              <br />
            </div>
          </div>

          <div className="closeBtnHead">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => {
                  props.handleCloseAdd();
                }}
                className="Closebtn"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <CSVupload openUP={openUP} handleCloseUP={handleCloseUP} />
    </div>
  );
}

export default AddContact;
