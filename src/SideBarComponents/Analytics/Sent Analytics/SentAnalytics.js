import React from "react";
import "./SentAnalytics.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Pagination from "@mui/material/Pagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";

const top100Films = [];
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [createData("", "", "", "")];
export default function SentAnalytics() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div style={{ padding: "0px 8px" }}>
      <div className="sentcontainerdiv">
        <div className="temptimediv">
          <span className="temptime">
            <AccessTimeIcon color="warning" style={{ marginRight: "16px" }} />
            <span className="timehead">
              Current time at selected timezone:
              <br /> October 17, 2022 3:31 PM
            </span>
          </span>
        </div>
        <div className="sentanaalertdiv">
          <Alert severity="info" className="sentanaalert">
            <AlertTitle
              style={{ color: "rgba(0, 0, 0, 0.87)", fontWeight: "600" }}
            >
              Contacts are checked for sending once per ±15 minutes
            </AlertTitle>
            Last time tried to add contacts in sending queue: ±a few seconds ago
          </Alert>
        </div>
      </div>
      <div className="sentinputdiv">
        <Autocomplete
          id="size-small-outlined"
          size="small"
          className="sentselect"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Sequence"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <Autocomplete
          id="size-small-outlined"
          size="small"
          className="sentselect"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Campaign"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
        <Autocomplete
          id="size-small-outlined"
          className="sentselect"
          size="small"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          defaultValue={top100Films[13]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Contact"
              color="warning"
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
      </div>
      <Table aria-label="caption table" style={{ paddingTop: "48px" }}>
        <TableHead>
          <TableRow>
            <TableCell>Campaign</TableCell>
            <TableCell align="left">Sent info</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="pageNo" style={{ paddingTop: "16px" }}>
        <Typography style={{ paddingRight: "20px" }}>Page: {page}</Typography>
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>

        {/* <Pagination count={10} page={page} onChange={handleChange} /> */}
      </div>
    </div>
  );
}
