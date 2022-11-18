import React, { useState } from "react";
import "./AddContact.css";
// import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CSVupload from "./CSVupload";
import Papa from "papaparse";

function AddContact(props) {
  const [openUP, setOpenUP] = React.useState(false);

  const handleOpenUP = () => setOpenUP(true);
  const handleCloseUP = () => setOpenUP(false);

  const uploadFiles = (e) => {
    document.getElementById("file").click();
  };
  // const uploadCsvFile = () => {
  //   const config = {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "multipart/form-data",
  //       token: localStorage.getItem("token"), 
  //     },
  //   };
  //   const formData = new FormData();
  //   // formData.append("id", location.state.id);
  //   formData.append("import_csv", file);
  //   formData.append("workspace_id", localStorage.getItem("Workspace_id"));
  //   formData.append("csv_source_name", );
  //   // formData.append("tags", file);

  //   return axios
  //     .post(`${ApiURL}/import-csv`, formData, config)
  //     .then((res) => {
  //       alert("File Upload success");
  //     });
  //   }


  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });
        setTableRows(rowsArray[0]);
        setValues(valuesArray);
        handleOpenUP();
        props.handleCloseAdd();
      },
    });
  };
  console.log(tableRows, values);

  return (
    <div>
      <Modal
        open={props.openAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="addcontactmodal"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box className='AddContactsMainDiv'>
          <h2 className="csv">CSV import</h2>
          <div className="Bodycsv"
            onClick={uploadFiles.bind()}
          >
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
              <input
                type="file"
                name="file"
                id="file"
                onChange={changeHandler}
                accept=".csv"
                style={{ display: "none" }}
              />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  color="warning"
                  className="CSVBtn"
                  onClick={uploadFiles.bind()}
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
      <CSVupload openUP={openUP} handleCloseUP={handleCloseUP} tableRows={tableRows} values={values} />
    </div>
  );
}

export default AddContact;
