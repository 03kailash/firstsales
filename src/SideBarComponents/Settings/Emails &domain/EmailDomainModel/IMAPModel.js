import React, { useState } from 'react'
import './IMAPModel.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';
import TextField from "@mui/material/TextField";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Button } from '@mui/material';

export default function IMAPModel({ isopen, isclose }) {
    const [gmail, setgmail] = useState(false)
    const [Zoho, setzoho] = useState(false)
    const [micro, setmicro] = useState(false)

    const [alignment, setAlignment] = React.useState('web');
    const [state, setState] = useState([{
        gmail: true,
        zoho: false,
        micro: false
    }])

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={"right"}
                    open={isopen}
                    onClose={isclose}
                >
                    <Box sx={{ width: 600, padding: '32px' }}>
                        <div className='SmtpBox'>IMAP Setting</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ToggleButtonGroup
                                color="warning"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton value="web" className={state.gmail ? "gmailactive" : "gmailinactive"} style={{width:"120px"}} onClick={() => {
                                    setState({ gmail: true })
                                    setgmail(true)
                                    setmicro(false)
                                    setzoho(false)
                                }}>Gmail</ToggleButton>
                                <ToggleButton value="android" className={state.zoho ? "gmailactive" : "gmailinactive"} style={{width:"120px",gap:"4px"}} onClick={() => {
                                    setState({ zoho: true })
                                    setgmail(false)
                                    setmicro(false)
                                    setzoho(true)

                                }}>Zoho  <Chip label="Beta" style={{ backgroundColor: 'rgb(244, 67, 54)', color: "rgb(255, 255, 255)" }} size="small" /> </ToggleButton>
                                <ToggleButton value="ios" className={state.micro ? "gmailactive" : "gmailinactive"} style={{width:"162px",gap:"1px"}} onClick={() => {
                                    setState({ micro: true })
                                    setgmail(false)
                                    setmicro(true)
                                    setzoho(false)

                                }}>Microsoft 365 <Chip label="Beta" style={{ backgroundColor: 'rgb(244, 67, 54)', color: "rgb(255, 255, 255)" }} size="small" /> </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <br />
                        {gmail && <div>
                            <div>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Name" id="Name" color="warning" size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>

                            <div style={{ paddingTop: '24px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="IMAP host" id="IMAP host" disabled color="warning" size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>
                         
                            <div style={{ paddingTop: '16px', width: '100%' }}>
                                <Alert severity="info">
                                    <AlertTitle><strong>Google App Passwords</strong></AlertTitle>
                                    You need to create App Password and use it instead of your Google Account password.<a href='/'>Application Passwords</a>
                                </Alert>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="IMAP user" id='IMAP user' color="warning"  size='small'  InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="IMAP password" id="IMAP password" color="warning" size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>

                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button style={{ backgroundColor: '#ff8e00', color: '#ffffff', width: "300px",textTransform:'inherit' }}>Save</Button>
                            </div>
                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button variant='outlined' style={{ color: 'warning', width: "300px",textTransform:'inherit' }}>Cancel</Button>
                            </div>
                        </div>}

                        {Zoho && <div>
                            <div>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Name" id="Name" color="warning" size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>

                            <div style={{ paddingTop: '24px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="IMAP host" id="Password" color="warning"  size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>
                           
                           
                            <div style={{ paddingTop: '16px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Zoho Email Address" id='Zoho Email Address' color="warning"  size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Zoho Email Password or Zoho Application-specific Password" id=" Application-specific Password" color="warning"  size='small' InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>

                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button style={{ backgroundColor: '#ff8e00', color: '#ffffff', width: "300px",textTransform:'inherit' }}>Save</Button>
                            </div>
                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button variant='outlined' style={{ color: 'warning', width: "300px",textTransform:'inherit' }}>Cancel</Button>
                            </div>
                        </div>}

                        {micro && <div>
                            <div>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Name" id="name" size='small' color="warning" InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>

                            <div style={{ paddingTop: '24px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="IMAP host" id="IMAP host" size='small' color="warning" InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>
                           
                            <div style={{ paddingTop: '16px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Microsoft 365 Email Address" id='Email' size='small' color="warning" InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>
                            <div style={{ paddingTop: '16px' }}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <TextField fullWidth label="Microsoft 365 Email Password" id="password" size='small' color="warning" InputLabelProps={{
                                        shrink: true,
                                    }}
                                        style={{ width: "100%" }} />
                                </Box>
                            </div>

                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button style={{ backgroundColor: '#ff8e00', color: '#ffffff', width: "300px",textTransform:'inherit' }}>Create</Button>
                            </div>
                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button variant='outlined' style={{ color: 'warning', width: "300px",textTransform:'inherit' }}>Cancel</Button>
                            </div>
                        </div>}
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

