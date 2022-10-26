import React, { useState } from 'react'
import './EmailDomain.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CreateIcon from "@mui/icons-material/Create";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TablePagination from '@mui/material/TablePagination';
import SMTPModel from './EmailDomainModel/SMTPModel';
import IMAPModel from './EmailDomainModel/IMAPModel';
import DomainModel from './EmailDomainModel/DomainModel';
import DomainEditModal from './EmailDomainModel/Model/DomainEditModel';
// import DomainDel from "./EmailDomainModel/Model/DomainDel"


function createData(Email, MailLimit, UsedMail) {
  return { Email, MailLimit, UsedMail };
}
const rows = [
  createData(),
  createData(),
];
export default function EmailDomain() {

  const [Domainedit, setDomainedit] = useState(false);
  const closeDomainedit = () => {
    setDomainedit(false);
  };
  // const [domaindel, setdomaindel] = useState(false);
  // const closedomaindel = () => {
  //   setdomaindel(false);
  // };
 const[smtp,setsmtp]=useState(false);
 const closeSmtp=()=>{
  setsmtp(false)
 }
 const[imap,setimap]=useState(false);
 const closeimap=()=>{
  setimap(false)
 }
 const[domain,setdomain]=useState(false);
 const closedomain=()=>{
  setdomain(false)
 }
  const [pause, setPause] = useState(true);
  const [run, setRun] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuclose = () => {
    setAnchorEl(null);
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <div style={{ width: '100%', display: 'flex', gap: '50px' }}>
        <div style={{ width: '221px', height: "185px" }}>
          <div>
            <span className='mail'>Mail Accounts</span>
          </div>
          <div>
            <span className='used'>0 of 999999 used</span>
          </div>
          <span className='used'>Use Mail Accounts to send emails.</span>
        </div>
        <div style={{ paddingLeft: "24px", paddingTop: "24px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 605 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='TableCellMail'>Emails</TableCell>
                  <TableCell className='TableCellMail' align="left">24h mail limit</TableCell>
                  <TableCell className='TableCellMail' align="left">Last time used</TableCell>
                  <TableCell className='TableCellMail' align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" className='TableCellMail' style={{ width: "200px" }}>
                      {row.Email}
                    </TableCell>
                    <TableCell className='TableCellMail' style={{ width: "150px" }} align="center">{row.MailLimit}</TableCell>
                    <TableCell className='TableCellMail' style={{ width: "137px" }} align="center">{row.UsedMail}</TableCell>
                    <TableCell align="center" className='TableCellMail' style={{ width: "60px" }} >
                      {
                        <>
                          <IconButton onClick={handleClick}>
                            <MoreVertOutlinedIcon color="action" />
                          </IconButton>
                        </>
                      }
                      <Menu
                        id="fade-menu"
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={menuclose}
                      >
                        <MenuItem
                          onClick={() => {
                            menuclose();
                            setDomainedit(true)
                          }}
                          style={{ gap: "12px" }}
                        >
                          <CreateIcon color="action" /> Edit
                        </MenuItem>
                        {pause && (
                          <MenuItem
                            onClick={() => {
                              menuclose();
                              setRun(true);
                              setPause(false);
                            }}
                            style={{ gap: "12px" }}
                          >
                            <PauseCircleOutlineIcon color="action" />
                            Pause
                          </MenuItem>
                        )}
                        {run && (
                          <MenuItem
                            onClick={() => {
                              menuclose();
                              setPause(true);
                              setRun(false);
                            }}
                            style={{ gap: "12px" }}
                          >
                            <PlayCircleFilledWhiteOutlinedIcon color="action" />
                            Run
                          </MenuItem>
                        )}
                        <MenuItem
                          onClick={() => {
                            menuclose();
                            // setdomaindel(true);
                          }}
                          style={{ gap: "12px" }}
                        >
                          <DeleteIcon color="action" /> Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant='outlined' color='warning' style={{ textTransform: 'inherit' }}>
          <AddIcon className='AddSmtp' /><span style={{ paddingLeft: '8px' }} onClick={()=>{
            setsmtp(true)
          }}>Add SMTP</span>
        </Button>
      </div>
      <hr className='HRSmtp' />

      <div style={{ width: '100%', display: 'flex', gap: '50px' }}>
        <div style={{ width: '221px', height: "185px" }}>
          <div>
            <span className='mail'>IMAP Credentials</span>
          </div>
          <div>
            <span className='used'>0 of 999999 used</span>
          </div>
          <span className='used'>To track replies, you need to provide IMAP credentials..</span>
        </div>
        <div style={{ paddingLeft: "24px", paddingTop: "24px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 605 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='TableCellMail'>Name</TableCell>
                  <TableCell className='TableCellMail' align="left">Last Checked</TableCell>
                  <TableCell className='TableCellMail' align="left"></TableCell>
                  <TableCell className='TableCellMail' align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" className='TableCellMail' style={{ width: "200px" }}>
                      {row.Email}
                    </TableCell>
                    <TableCell className='TableCellMail' style={{ width: "150px" }} align="center">{row.MailLimit}</TableCell>
                    <TableCell className='TableCellMail' style={{ width: "137px" }} align="center">{row.UsedMail}</TableCell>
                    <TableCell align="center" className='TableCellMail' style={{ width: "60px" }} >
                      {
                        <>
                          <IconButton onClick={handleClick}>
                            <MoreVertOutlinedIcon color="action" />
                          </IconButton>
                        </>
                      }
                      <Menu
                        id="fade-menu"
                        MenuListProps={{
                          "aria-labelledby": "fade-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={menuclose}
                      >
                        <MenuItem
                          onClick={() => {
                            menuclose();

                          }}
                          style={{ gap: "12px" }}
                        >
                          <CreateIcon color="action" /> Edit
                        </MenuItem>
                        {pause && (
                          <MenuItem
                            onClick={() => {
                              menuclose();
                              setRun(true);
                              setPause(false);
                            }}
                            style={{ gap: "12px" }}
                          >
                            <PauseCircleOutlineIcon color="action" />
                            Pause
                          </MenuItem>
                        )}
                        {run && (
                          <MenuItem
                            onClick={() => {
                              menuclose();
                              setPause(true);
                              setRun(false);
                            }}
                            style={{ gap: "12px" }}
                          >
                            <PlayCircleFilledWhiteOutlinedIcon color="action" />
                            Run
                          </MenuItem>
                        )}
                        <MenuItem
                          onClick={() => {
                            menuclose();

                          }}
                          style={{ gap: "12px" }}
                        >
                          <DeleteIcon color="action" /> Delete
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant='outlined' color='warning' style={{ textTransform: 'inherit' }}>
          <AddIcon className='AddSmtp' /><span style={{ paddingLeft: '8px' }}
          onClick={()=>{
            setimap(true)
          }}>Add IMAP</span>
        </Button>
      </div>
      <hr className='HRSmtp' />

      <div style={{ width: '100%', display: 'flex', gap: '50px' }}>
        <div style={{ width: '221px', height: "185px" }}>
          <div>
            <span className='mail'>Custom Domains for Tracking</span>
          </div>
          <span className='used'>To track open, click & unsubscribe, you may use your custom domain.</span>
        </div>
        <div style={{ paddingLeft: "24px", paddingTop: "24px" }}>
         
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 605 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className='TableCellMail'>Domain</TableCell>
                    <TableCell className='TableCellMail' align="left">Domain Checked</TableCell>
                    <TableCell className='TableCellMail' align="left">Last Time Used</TableCell>
                    <TableCell className='TableCellMail' align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" className='TableCellMail' style={{ width: "200px" }}>
                        {row.Email}
                      </TableCell>
                      <TableCell className='TableCellMail' style={{ width: "150px" }} align="center">{row.MailLimit}</TableCell>
                      <TableCell className='TableCellMail' style={{ width: "137px" }} align="center">{row.UsedMail}</TableCell>
                      <TableCell align="center" className='TableCellMail' style={{ width: "60px" }} >
                        {
                          <>
                            <IconButton onClick={handleClick}>
                              <MoreVertOutlinedIcon color="action" />
                            </IconButton>
                          </>
                        }
                        <Menu
                          id="fade-menu"
                          MenuListProps={{
                            "aria-labelledby": "fade-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={menuclose}
                        >
                          <MenuItem
                            onClick={() => {
                              menuclose();

                            }}
                            style={{ gap: "12px" }}
                          >
                            <CreateIcon color="action" /> Edit
                          </MenuItem>
                          {pause && (
                            <MenuItem
                              onClick={() => {
                                menuclose();
                                setRun(true);
                                setPause(false);
                              }}
                              style={{ gap: "12px" }}
                            >
                              <PauseCircleOutlineIcon color="action" />
                              Pause
                            </MenuItem>
                          )}
                          {run && (
                            <MenuItem
                              onClick={() => {
                                menuclose();
                                setPause(true);
                                setRun(false);
                              }}
                              style={{ gap: "12px" }}
                            >
                              <PlayCircleFilledWhiteOutlinedIcon color="action" />
                              Run
                            </MenuItem>
                          )}
                          <MenuItem
                            onClick={() => {
                              menuclose();

                            }}
                            style={{ gap: "12px" }}
                          >
                            <DeleteIcon color="action" /> Delete
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
      </div>
      <div style={{ display: 'flex', justifyContent: 'end' }}onClick={()=>{
            setdomain(true)
          }}>
        <Button variant='outlined' color='warning' style={{ textTransform: 'inherit' }}>
          <AddIcon className='AddSmtp' /><span style={{ paddingLeft: '8px' }}>Add Tracking Domain</span>
        </Button>
      </div>
      <hr className='HRSmtp' />
      <SMTPModel isopen={smtp} isclose={closeSmtp}/>
      <IMAPModel isopen={imap} isclose={closeimap}/>
      <DomainModel isopen={domain} isclose={closedomain}/>

    
      {/* <DomainDel isOpen={domaindel} isClose={closedomaindel} /> */}
      <DomainEditModal open={Domainedit} close={closeDomainedit} />
   </div>
  )
}
