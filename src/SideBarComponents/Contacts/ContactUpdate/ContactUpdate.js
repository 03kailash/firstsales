import React, { useState } from 'react'
import "./contactupdate.css"
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar, Button } from '@mui/material';
import ModeIcon from '@mui/icons-material/Mode';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function ContactUpdate({ isopen, isclose }) {
    // const [snackOpen, setSnackOpen] = React.useState(false);
    // const [state, setState] = useState({
    //     report: true,
    //     sent: false,
    //     eventstream: false,
    // });
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [age, setAge] = useState('');
    const handleChange1 = (event) => {
        setAge(event.target.value);
    };
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
                            <Box >
                                <TabList className='TabRow' onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab className='TabRowList' label="Item One" value="1" />
                                    <Tab className='TabRowList' label="Item Two" value="2" />
                                    <Tab className='TabRowList' label="Item Three" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className='TabPanelDetails'>
                                    <div className='TabPanelDetailsBodyDiv'>
                                        <div>
                                            <Avatar className='Avtardiv' style={{ width: "60px", height: "60px" }} />
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
                                                    <InputLabel id="demo-simple-select-label" shrink>Assign to team member:</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
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
                                                    <InputLabel id="demo-simple-select-label" shrink>Status</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        label="Status"
                                                        size="small"
                                                        onChange={handleChange1}
                                                        notched
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </div>
                                    </div>
                                </div>
                                <div style={{padding:"16px 0px 0px 0px"}}>
                                    <div style={{marginBottom:"24px"}}>Tags:</div>
                                </div>
                                <div style={{padding:"16px 0px 0px 0px"}}>
                                    <div className='DetailedInformationText'>Detailed Information</div>
                                </div>
                                <div style={{padding:"16px 0px 0px 0px"}}>
                                    <label className='DetailedInformation'>Gender</label>
                                    <div className='DetailedInformationText'>-</div>
                                </div>
                                <div style={{padding:"16px 0px 0px 0px"}}>
                                    <label className='DetailedInformation'>Country</label>
                                    <div className='DetailedInformationText'>-</div>
                                </div>
                                <div style={{padding:"16px 0px 0px 0px"}}>
                                    <span className='DetailedInformation'>Phone Number</span>
                                    <div className='DetailedInformationText'>-</div>
                                </div>
                                
                            </TabPanel>
                            <TabPanel value="2">Item Two</TabPanel>
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


