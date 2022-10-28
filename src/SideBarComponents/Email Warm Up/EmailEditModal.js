import React from "react";
import "./EmailEditModal.css";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";

export default function EmailEditModal({ open, close }) {
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleClicksnack = () => {
    setSnackOpen(true);
  };
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={close}
        className="emaileditdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={close} />
          </IconButton>
          <br />
          <div style={{ width: "100%", padding: "0px 32px" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "56px" }}>
              Edit email warm up
            </div>
            <FormControl size="small" style={{ width: "100%" }}>
              <InputLabel id="demo-select-large" color="warning">
                Email account name
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Email account name"
                color="warning"
                value=""
              >
                {/* <MenuItem value="">
            <em></em>
          </MenuItem> */}
                <MenuItem value=""></MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" style={{ width: "100%" }} sx={{ mt: 3 }}>
              <InputLabel id="demo-select-large" color="warning">
                IMAP name
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="IMAP name"
                color="warning"
                value=""
              >
                {/* <MenuItem value="">
            <em></em>
          </MenuItem> */}
                <MenuItem value=""></MenuItem>
              </Select>
            </FormControl>
            <div style={{ marginTop: "56px" }}>Status</div>
            <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
              <Switch color="warning" />
              Running
            </div>
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
                  handleClicksnack();
                  close();
                }}
              >
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Drawer>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
        message="Warming updated"
      />
    </React.Fragment>
  );
}
