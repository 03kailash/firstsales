import React from 'react';
import "./CsvImportModel.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Button } from '@mui/material';

export default function CsvImportDone(props) {


    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Box className='CsvImportModel'>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ width: '456px', maxWidth: '456px' }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                <div className='CSVimportDoneModel'>CSV import</div>
                            </div>
                            <div className='CheckCircle'>
                                <CheckCircleOutlinedIcon className='CheckCircleOutlinedIcon' />
                            </div>
                            <div className='CheckCircle'>
                                <div className='DoneText'>Done !</div>
                            </div>
                            <div className='CheckCircle'>
                                <div className='coupletText'>It may take couple minutes to see all new updates in your contacts list</div>
                            </div>
                            <div className='CheckCircle'>
                                <Button className='CloseBtnDoneModel' onClick={()=>{
                                    props.close();
                                    props.isclose()
                                }}>Close</Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

