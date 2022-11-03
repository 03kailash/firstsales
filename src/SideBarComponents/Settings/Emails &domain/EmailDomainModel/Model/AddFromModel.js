import React from 'react'
import './AddFromModel.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
export default function AddFromModel({ isopen, isclose }) {

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={isopen}
                onClose={isclose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Box className='AddfromModel'>
                    <div style={{padding:'32px ,16px'}}>
                        <div style={{ paddingTop: '16px' }}>
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="from Name" id='Email' color="warning" InputLabelProps={{
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
                                <TextField fullWidth label="from Email Address" id='Email' color="warning" InputLabelProps={{
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
                                <TextField fullWidth label="Reply=to Email Address" id='Email' color="warning" InputLabelProps={{
                                    shrink: true,
                                }}
                                    style={{ width: "100%" }} />
                            </Box>
                        </div>
                    </div>
                    <div className='VariationBtnDiv'>
                        <div>
                            <Button color='warning' style={{textTransform:"inherit"}}>Cancel</Button>
                        </div>
                        <div>
                            <Button variant='outlined' color='warning'  style={{textTransform:"inherit"}}>Create From Varition</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}





