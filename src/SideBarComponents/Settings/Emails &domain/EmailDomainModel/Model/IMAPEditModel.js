import React from "react";
import './IMAPEditModel.css'
import Box from "@mui/material/Box";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function IMAPEditModal(props) {
    return (
        <Drawer anchor={"right"} open={props.Open} onClose={props.Close}>
            <Box sx={{ width: 600 }} role="presentation">
                <IconButton style={{ margin: '8px' }}>
                    <ClearOutlinedIcon
                        color="action"
                        onClick={props.Close}
                    />
                </IconButton>
                <br />
                <div style={{ width: "100%", padding: "0px 32px" }}>
                    <div className=" IMAPSettingsText">
                        IMAP Settings
                    </div>
                    <div style={{ width: "100%", paddingTop: '24px' }}>
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
                    <div style={{ width: "100%", paddingTop: '24px' }}>
                        <div>
                            <Box
                                sx={{
                                    width: '100%',
                                    maxWidth: '100%',
                                }}
                            >
                                <TextField fullWidth label="IMAP host" id="IMAP host" color="warning" size='small' InputLabelProps={{
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
                                <TextField fullWidth label="IMAP user" id="IMAP User" disabled color="warning" size='small' InputLabelProps={{
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
                                <TextField fullWidth label="IMAP Password" id="IMAP  Password" disabled color="warning" size='small' InputLabelProps={{
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
                                <TextField fullWidth label="IMAP port" id="IMAP port" disabled color="warning" size='small' InputLabelProps={{
                                    shrink: true,
                                }}
                                    style={{ width: "100%" }} />
                            </Box>

                        </div>
                        <div style={{ marginTop: "56px" }}>connection</div>
                        <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
                            <Switch color="warning" />
                            Is connection Secure
                        </div>
                        <div style={{ marginTop: "56px" }}>Status</div>
                        <div style={{ fontSize: "0.875rem", color: "rgba(0, 0, 0, 0.6)" }}>
                            <Switch color="warning" />
                            Status
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "40px",
                            }}
                        >
                            <Button  style={{ width: "70%" ,color:'#ffffff',backgroundColor:'#ff8e00' }}>
                                Save
                            </Button>

                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "15px",
                            }}
                        >
                            <Button variant="outlined" color="warning" style={{ width: "70%" }}
                            onClick={props.Close}
                            >
                               Cancel
                            </Button>

                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "40px",
                            }}
                        >
                            <Button style={{ width: "70%",backgroundColor:' rgb(244, 67, 54)', color:'#ffffff'}}>
                            <DeleteIcon color="none" />   Delete
                            </Button>

                        </div>
                    </div>
                </div>
            </Box>
        </Drawer>
    );
}
