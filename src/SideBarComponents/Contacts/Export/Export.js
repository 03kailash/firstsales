import React from "react";
import "./Export.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import RequestExport from "./RequestExport";
import ExportView from "./ExportView";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
const StyledTableCell = styled(TableCell)(({ theme }) => ({}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

function createData(filters: string, count: number) {
  return { filters, count };
}

const rows = [createData("Frozen yoghurt", 10), createData("fger getg", 10)];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 342,
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Export(props) {
  const [openEx, setOpenEx] = React.useState(false);
  const handleOpenEx = () => setOpenEx(true);
  const handleCloseEx = () => setOpenEx(false);

  const [openView, setOpenView] = React.useState(false);
  const handleOpenView = () => setOpenView(true);
  const handleCloseView = () => setOpenView(false);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <div className="requestDataDiv" style={{ paddingBottom: "10px" }}>
              <Button className="Request_Data" onClick={handleOpenEx}>
                Request New Data Export
              </Button>
              <RefreshOutlinedIcon className="RefreshIcon" />
            </div>

            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 900, height: 32 }}
                aria-label="customized table"
              >
                <TableHead height="32px">
                  <TableRow height="32px">
                    <StyledTableCell>Filters</StyledTableCell>
                    <StyledTableCell align="left">Items count</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.filters}>
                      <StyledTableCell component="th" scope="row">
                        {row.filters}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.count}
                      </StyledTableCell>
                      <Button
                        variant="outlined"
                        color="warning"
                        align="right"
                        style={{ marginTop: "10px" }}
                        onClick={handleOpenView}
                      >
                        View
                      </Button>
                    </StyledTableRow>
                  ))}
                </TableBody>
                <TablePagination
                  rowsPerPageOptions={[10, 50, { value: -1, label: "All" }]}
                />
              </Table>
            </TableContainer>
          </Box>
        </Fade>
      </Modal>
      <RequestExport openEx={openEx} handleCloseEx={handleCloseEx} />
      <ExportView openView={openView} handleCloseView={handleCloseView} />
    </div>
  );
}

export default Export;
