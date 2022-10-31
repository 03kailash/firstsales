import React from "react";
import "./EmailCreateModal.css";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";

export default function EmailCreateModal({ open, close }) {
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClick = () => {
    setSnackOpen(true);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={close}
        className="emailcreatedrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={close} />
          </IconButton>
          <br />
          <div className="emailcreatemaindiv">
            <div style={{ fontSize: "1.5rem", marginBottom: "56px" }}>
              Create email warm up
            </div>

            <FormControl size="small" style={{ width: "100%" }}>
              <InputLabel id="demo-select-large" color="warning" shrink>
                Email account name
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Email account name"
                color="warning"
                value=""
                notched
              >
                {/* <MenuItem value="">
            <em></em>
          </MenuItem> */}
                <MenuItem value=""></MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" style={{ width: "100%" }} sx={{ mt: 3 }}>
              <InputLabel id="demo-select-large" color="warning" shrink>
                IMAP name
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="IMAP name"
                color="warning"
                value=""
                notched
              >
                {/* <MenuItem value="">
            <em></em>
          </MenuItem> */}
                <MenuItem value=""></MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Button
                className="newtemplatebtn"
                style={{ width: "100%" }}
                onClick={() => {
                  handleClick();
                  close();
                }}
              >
                Create
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Email warming added"
      />
    </React.Fragment>
  );
}
