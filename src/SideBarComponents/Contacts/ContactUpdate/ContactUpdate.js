import React, {  useEffect, useState } from 'react'
import "./contactupdate.css"
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button, Chip,TextField } from '@mui/material';
import ModeIcon from '@mui/icons-material/Mode';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ApiURL } from '../../../ApiURL';
export default function ContactUpdate({ isopen, isclose, tableInfo }) {
    console.log(tableInfo.id);
    // const [snackOpen, setSnackOpen] = React.useState(false);
    // const [state, setState] = useState({
    //     report: true,
    //     sent: false,
    //     eventstream: false,
    // });
    const [value, setValue] = useState(0);
    const [CreateNote, setCreateNote] = useState(false)
    const [Note, setNote] = useState(true)
    const [viewNote, setviewNote] = useState([])

    const [CreateNotetext , setCreateNotetext] = useState("")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(CreateNotetext);
    const [age, setAge] = useState('');
    const handleChange1 = (event) => {
        setAge(event.target.value);
    };
    const [staus, setStaus] = useState('');
    const handleChange2 = (event) => {
        setStaus(event.target.value);
    };
    
    const fetchViewNote = () => {
        fetch(`${ApiURL}/contact-notes-view`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: localStorage.getItem("token")
          },
          body: JSON.stringify({
            workspace_id: localStorage.getItem("Workspace_id"),
            contact_id: tableInfo.id,
          })
        })
          .then((res) => res.json())
          .then((res) => {
        //     if(res.status){
        //     setviewNote(res.data);
        // }
        console.log(res);
          });
      };
      useEffect(() => {
        fetchViewNote();
      }, [])
      
    const contactCreteNote = () => {
        fetch(`${ApiURL}/contact-notes`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            token: localStorage.getItem("token")
          },
          body: JSON.stringify({
            contact_id: tableInfo.id,
            notes:CreateNotetext,
            workspace_id: localStorage.getItem("Workspace_id"),
          })
        })
          .then((res) => res.json())
          .then((res) => {
            setCreateNotetext(res.data);
            console.log(CreateNotetext);
            if(res.status){
             isclose()
            };
          });
      };
        console.log(CreateNotetext.notes);
    return (
        <React.Fragment>
            <Drawer
                anchor={"right"}
                open={isopen}
                onClose={isclose}
                className="Contactupdetedrawer"
            >
                <Box role="presentation">
                    <Box sx={{ width: '100%', typography: 'body1', padding: "40px" }}>
                        <TabContext value={value}>
                            <Box>
                                <TabList className='TabRow' onChange={handleChange} aria-label="lab API tabs example" >
                                    <Tab className='TabRowList' label="DETAILS" value="1" style={{ color: 'rgb(255, 142, 0)' }} />
                                    <Tab className='TabRowList' label="NOTE" value="2" style={{ color: 'rgb(255, 142, 0)' }} />
                                    <Tab className='TabRowList' label="EVENTS" value="3" style={{ color: 'rgb(255, 142, 0)' }} />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className='TabPanelDetails'>
                                    <div className='TabPanelDetailsBodyDiv'>
                                        <div className='AvartarAndEmailDiv'>
                                            <div>
                                                <Avatar className='Avtardiv'
                                                    style={{
                                                        width: "60px",
                                                        height: "60px",
                                                        backgroundColor: "rgb(255, 143, 0)",
                                                        opacity: "0.3"
                                                    }} />
                                            </div>
                                            <div className='EmailandNameInfo'>
                                                <div>{tableInfo.first_name} {tableInfo.last_name}</div>
                                                <div>{tableInfo.email}</div>
                                            </div>
                                        </div>
                                        <div className='editButton'>
                                            <Button variant='outlined' color="primary" style={{ gap: "8px" }}>
                                                <div className='ModeIcon'><ModeIcon color="primary" size="small" /></div>
                                                <span style={{ textTransform: "initial" }}>Edit</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='DropDownEdil'>
                                        <div>
                                            <Box sx={{ minWidth: 215 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label" shrink
                                                     style={{color:'rgb(255, 142, 0)'}}>Assign to team member:</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        color='warning'
                                                        size="small"
                                                        label="Assign to team member:"
                                                        onChange={handleChange1}
                                                        notched
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                        <div>
                                            <Box sx={{ minWidth: 215 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label" shrink
                                                     style={{color:'rgb(255, 142, 0)'}}>Status</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        color='warning'
                                                        value={staus}
                                                        label="Status"
                                                        size="small"
                                                        onChange={handleChange2}
                                                        notched
                                                    >
                                                        <MenuItem value={10}>none</MenuItem>
                                                        <MenuItem value={10}>Ignored</MenuItem>
                                                        <MenuItem value={10}>Interested</MenuItem>
                                                        <MenuItem value={10}>won</MenuItem>
                                                        <MenuItem value={10}>loss</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <div style={{ marginBottom: "24px" }}>Tags:<Chip>{tableInfo.tags}</Chip> </div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <div className='CustomFieldsInfo'>Detailed Information</div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <label className='DetailedInformation'>Gender</label>
                                    <div className='DetailedInformationText'>{tableInfo.gender}</div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <label className='DetailedInformation'>Country</label>
                                    <div className='DetailedInformationText'>{tableInfo.country !== null ? tableInfo.country : <>-</>}</div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <span className='DetailedInformation'>Phone Number</span>
                                    <div className='DetailedInformationText'>{tableInfo.phone_number}</div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <Button variant='outlined' color="error" className='DeleteBtnIcon'><DeleteOutline />Delete Contact</Button>
                                </div>

                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <div className='CustomFieldsInfo'>Custom Fields</div>
                                </div>
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <label className='DetailedInformation'>Name</label>
                                    <div className='DetailedInformationText'>{tableInfo.name}</div>
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                {Note && <div className='CreateNoteBtn'>
                                    <Button variant='outlined' color='warning'
                                        onClick={() => {
                                            setCreateNote(true);
                                            setNote(false);
                                        }}
                                        style={{textTransform:"inherit"}}>Create Note </Button>
                                </div>}
                                {CreateNote && <div>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: "100%" },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Create Note"
                                            multiline
                                            color='warning'
                                            rows={5}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(event) => {
                                                setCreateNotetext(event.target.value)
                                              }}
                                        />
                                    </Box>
                                    
                                    <div className='TwoBtn'>
                                        <div><Button variant='outlined' color='error'
                                            onClick={() => {
                                                setCreateNote(false)
                                                setNote(true)
                                            }}>Cancle</Button></div>
                                        <div><Button className='CreateNote'
                                            onClick={() => {
                                                contactCreteNote();
                                                setCreateNote(false);
                                                setNote(true);
                                            }}>Create Note</Button></div>
                                    </div>
                                </div>
                                }
                                {viewNote && viewNote.map((item,index)=>{
                                    return (
                                <div style={{ padding: "16px 0px 0px 0px" }}>
                                    <div className='TextResponse'>
                                        <div className='TextResponseInnerDiv'>
                                            <div className='Createdtext'>Created By:{item.Name}
                                                <div>{item.created_at}</div>
                                            </div>
                                            <div><MoreVertIcon/></div>
                                        </div>
                                        <div className="NoteRes">{item.notes}</div>
                                    </div>
                                </div>)
                                })}
                            </TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Drawer>
            {/* <Snackbar
      open={snackOpen}
      autoHideDuration={4000}
      onClose={() => setSnackOpen(false)} 
      message=""
    /> */}
        </React.Fragment>
    )
}


