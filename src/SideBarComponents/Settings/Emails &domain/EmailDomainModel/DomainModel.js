import React from 'react'
import './Domain.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
export default function DomainModel({ isopen, isclose }) {
    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor={"right"}
                    open={isopen}
                    onClose={isclose}
                >
                    <Box sx={{ width: 600, padding: '32px' }}>
                    <div className='SmtpBox'>Add Custom Domain</div>
                    <div>
                        <p className='textDoaminlist' style={{paddingTop:'0px'}}>Follow these steps to add new custom domain:</p>
                        <p className='textDoaminlist'>1. In your domain's DNS settings point <strong>CNAME</strong> record to  <strong>redirector.clikk2.link</strong></p>
                        <p className='textDoaminlist'>2. Add your domain or subdomain which you pointed to <strong> redirector.clikk2.link</strong> here</p>
                        <p className='textDoaminlist'style={{paddingBottom:'24px'}}>3. Wait till DNS will be confirmed.</p>
                    </div>
                    <div>
                    <Alert severity="info">If you will make DNS update first before filling up this form, it will be faster.</Alert>
                    </div>
                        <div style={{paddingTop:'20px'}}>
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="Domain pointed to redirector.clikk2.link" id="Link" color="warning" size='small' InputLabelProps={{
                                    shrink: true,
                                }}
                                    style={{ width: "100%" }} />
                            </Box>
                        </div>
                        <div style={{ paddingTop: '40px', width: '100%', display: 'flex', justifyContent: "center"}}>
                                <Button style={{ backgroundColor: '#ff8e00', color: '#ffffff', width: "300px",textTransform:"inherit" }}>Create</Button>
                            </div>
                            <div style={{ paddingTop: '16px', width: '100%', display: 'flex', justifyContent: "center" }}>
                                <Button variant='outlined' color='warning' style={{  width: "300px",textTransform:"inherit"  }}>Cancel</Button>
                            </div>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}
