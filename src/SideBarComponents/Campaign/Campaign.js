import React, { useState } from "react";
import "./Campaign.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import Drawer from "@mui/material/Drawer";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Chip from "@mui/material/Chip";
import NewCampaign from "./NewCampaign";
import AddIcon from '@mui/icons-material/Add';
const columns = [
  { id: "campaign", label: "campaign", minWidth: "150px" },
  {
    id: "contacts",
    label: "contacts",
    minWidth: 112,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Unsubscribe",
    label: "Unsubscribe",
    minWidth: 112,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Send/Reply",
    label: "Send/Reply",
    minWidth: 105,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Open/Click",
    label: "Open/Click",
    minWidth: 103,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Analytics",
    label: "Analytics",
    minWidth: 103,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [createData("no template")];

function Campaign() {
  const [chipData, setChipData] = React.useState([
    { label: "Author: kailash choudhary" },
  ]);

  const [btn2, setBtn2] = React.useState(false);
  const [aut, setAut] = React.useState("");
  const [author, setAuthor] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [chip, setChip] = useState(false);
  const [snackOpen, setSnackOpen] = React.useState(false);

  const [Newopen, setNewopen] = useState(false);

  const handleNewopen = () => setNewopen(true);
  const handleNewclose = () => setNewopen(false);

  const handleClick = () => {
    setOpen(true);
    setSnackOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="CmapaignmainDiv">
      <div style={{ maxwidth: "1200px" }} className='CampaignContainer'>
        <div className="Campcontainerdiv">
          <div className="CampName">Campaigns</div>
          <div className="Campcontentdiv">
            <div
              style={{
                background: "rgb(245, 245, 245)",
                display: "flex",
                alignItems: "center",
                borderRadius: "5px",
                width: "100%",

              }} 
            >
              <input
                type="text"
                placeholder="Search"
                className="Campsearchinput"
              />
              <TuneOutlinedIcon
                color="action"
                className="Campicon"
                onClick={() => {
                  if (author) {
                    setAuthor(false);
                  } else {
                    setAuthor(true);
                  }
                }}
              />
            </div>
            <div className='ArchiveOrAddBtn'>
              <React.Fragment>
                <Button className="Campaignbtn" onClick={() => setOpen2(true)}>
                  <AddIcon className="AddBtnCampaign" /> Create Campaign
                </Button>
                <Drawer
                  anchor={"right"}
                  open={open2}
                  onClose={() => setOpen2(false)}
                  className='NewCampaignDrawer'
                >
                  <Box role="presentation">
                    <ClearOutlinedIcon
                      color="action"
                      className="Campclosebtn"
                      onClick={() => setOpen2(false)}
                    />
                    <br />
                    <div style={{ width: "100%", padding: "0px 32px" }}>
                      <div className="Campnewtemphead"> New Campaign</div>
                      <p className="Campnewtembody">Campaign name</p>
                      <TextField
                        type="text"
                        id="outlined-size-small"
                        color="warning"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        size="small"
                        className="Camptitleinput"
                      />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          className="newCampaignbtn"
                          onClick={() => {
                            handleNewopen();
                            setNewopen(true);
                          }}
                        >
                          Create New Campaign
                        </Button>
                      </div>
                    </div>
                  </Box>
                </Drawer>
              </React.Fragment>

              <Button
                variant="outlined"
                className="Camparchivebtn"
                onClick={() => {
                  if (btn2) {
                    setBtn2(false);
                  } else {
                    setBtn2(true);
                  }
                }}
              >
                {btn2 ? (
                  <> Back to campaign </>
                ) : (
                  <>
                    <Inventory2OutlinedIcon className="Camparchivelogo" /> Show
                    archive
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {author && (
          <FormControl
            sx={{ mt: 1, mb: 1 }}
            size="small"
            className='campaignAuthor'
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
              <MenuItem
                value={"kailash"}
                onClick={() => {
                  setChip(true);
                }}
              >
                kailash choudhary
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
        <div style={{ width: "1000px" ,maxWidth:"1000px" }}>
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Box sx={{ width: "90%", paddingTop: "64px" }}>
              <LinearProgress color="warning" />
            </Box>
          </div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440, overflow:'auto' }}>
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000}
          onClose={() => setSnackOpen(false)}
          message=" Add Campaign"
        />
        <NewCampaign Newopen={Newopen} handleNewclose={handleNewclose} />
      </div>
    </div>
  );
}

export default Campaign;
