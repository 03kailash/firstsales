import React, { useState } from 'react'
import "./contactupdate.css"
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Avatar } from '@mui/material';
export default function ContactUpdate({ isopen, isclose }) {
    // const [snackOpen, setSnackOpen] = React.useState(false);
    // const [state, setState] = useState({
    //     report: true,
    //     sent: false,
    //     eventstream: false,
    // });
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                                   <div>
                                    <Avatar className='Avtardiv'/>
                                   </div>
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


