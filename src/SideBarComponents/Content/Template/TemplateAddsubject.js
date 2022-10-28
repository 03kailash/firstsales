import React, { useState } from "react";
import "./TemplateAddsubject.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TemplateNewsubject from "./TemplateNewsubject";
import { IconButton } from "@mui/material";

const columns = [
  { id: "Subject", label: "Subject", minWidth: "332px" },

  {
    id: "Unsubscribe",
    label: "Unsubscribe",
    minWidth: 112,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Send/Reply",
    label: "Send/Reply",
    minWidth: 105,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Open/Click",
    label: "Open/Click",
    minWidth: 103,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData("no template")];

export default function TemplateAddsubject({ open, close }) {
  const [newsubject, setNewsubject] = useState(false);
  const closenewsubject = () => {
    setNewsubject(false);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [aut, setAut] = React.useState("");

  const [chip, setChip] = useState(false);

  const [chipData, setChipData] = React.useState([
    { label: "Author: Somil Kaushal" },
  ]);
  const [author, setAuthor] = useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={close}
        className="builderaddsubdrawer"
      >
        <Box role="presentation">
          <IconButton style={{ margin: "8px" }}>
            <ClearOutlinedIcon color="action" onClick={close} />
          </IconButton>
          <br />
          <div className="builderaddsubmaindiv">
            <div className="tempbuilderhead">Add Subject</div>

            <Button
              className="Savetemplatebtn"
              onClick={() => {
                setNewsubject(true);
              }}
            >
              {" "}
              <AddIcon
                style={{
                  marginRight: "8px",
                  fontSize: "20px",
                }}
              />
              New Subject
            </Button>
            <div
              style={{
                background: "rgb(245, 245, 245)",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                marginTop: "24px",
              }}
            >
              <input
                type="text"
                placeholder="Search"
                className="searchinputbuilderaddsub"
                style={{ width: "100%" }}
              />
              <TuneOutlinedIcon
                color="action"
                className="icon"
                onClick={() => {
                  if (author) {
                    setAuthor(false);
                  } else {
                    setAuthor(true);
                  }
                }}
              />
            </div>
            {author && (
              <FormControl
                sx={{ mt: 1, mb: 1 }}
                size="small"
                style={{ width: "368px" }}
              >
                <InputLabel id="demo-select-small" color="warning">
                  Author
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={aut}
                  label="Author"
                  color="warning"
                >
                  {/* <MenuItem value="">
                <em></em>
              </MenuItem> */}
                  <MenuItem
                    value={"somil"}
                    onClick={() => {
                      setChip(true);
                    }}
                  >
                    Somil Kaushal
                  </MenuItem>
                </Select>
              </FormControl>
            )}
            {chip && (
              <div
                sx={{
                  flexWrap: "wrap",
                  listStyle: "none",
                }}
              >
                {chipData.map((data, index) => {
                  return (
                    <Chip
                      key={index}
                      label={data.label}
                      onDelete={() => {
                        setChip(false);
                      }}
                      style={{
                        backgroundColor: "#673ab7",
                        color: "#fafbfb ",
                        height: "24px",
                        width: "163px ",
                        marginTop: "12px",
                        maxWidth: "100%",
                        fontSize: " 12px",
                      }}
                    />
                  );
                })}
              </div>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "14px",
                margin: "24px 0px 16px 0px",
              }}
            >
              Click on subject line to add to the template
            </div>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Box sx={{ width: "696px" }}>
                <LinearProgress color="warning" />
              </Box>
            </div>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </Box>
      </Drawer>
      <TemplateNewsubject isopen={newsubject} isclose={closenewsubject} />
    </React.Fragment>
  );
}
