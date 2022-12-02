import React, { useEffect } from 'react'
import { ApiURL } from '../../../ApiURL';
import "./ContactDelete.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ContactDeleteAllModel({open,close}) {
    const ContactAllDelete = (id) => {
        fetch(`${ApiURL}/contact_Alldelete/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                token: localStorage.getItem("token")
            },
            body: JSON.stringify({
                ids: [id]
            })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    };
    // useEffect(() => {
    //     ContactAllDelete();
    // })
    return (
        <div>
            <div>
                <Modal
                    open={open}
                    isClose={close}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}

                >
                    <Box className='ComtactDeleteHead'>

                        <div className='DeleteIconBtn'>
                            <div style={{ display: "flex" }}><DeleteOutlineIcon style={{ color: "rgb(244, 67, 54)" }} /></div>
                            <div className='Contactdeleting'>Contact deleting</div>
                        </div>

                        <div style={{ padding: "24px 0px" }}>
                            You are going to delete .
                        </div>
                        <div className='groupBtn'>
                            <div><Button style={{ color: '#000000' }}
                                onClick={() => {
                                    close()
                                }}>Cancle</Button></div>
                            <div><Button className='DeleteBtnIcon'
                                onClick={() => {
                                    ContactAllDelete();
                                }}>DELETE</Button></div>
                        </div>
                    </Box>

                </Modal>
            </div>
        </div>
    )
}

export default ContactDeleteAllModel
