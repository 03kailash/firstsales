import React from "react";
import "./AddContact.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CSVupload from "./CSVupload";

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
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
      >
        <Box className='AddContactsMainDiv'>
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
              <div style={{ display: "flex", justifyContent: "center" }}>
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
              </div>
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
