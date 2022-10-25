import React from "react";
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function EmailCreateModal({ open, close }) {
  return (
    <Drawer anchor={"right"} open={open} onClose={close}>
      <Box role="presentation">
        <ClearOutlinedIcon
          color="action"
          className="closebtn"
          onClick={close}
        />
        <br />
        <div style={{ width: "100%", padding: "0px 32px" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "56px" }}>
            Create email warm up
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Button className="newtemplatebtn" style={{ width: "100%" }}>
              Create
            </Button>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}
