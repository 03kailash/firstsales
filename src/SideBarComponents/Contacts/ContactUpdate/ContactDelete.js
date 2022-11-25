import React from 'react'
import "./ContactDelete.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ApiURL } from '../../../ApiURL';

export default function ContactDelete({ isOpen, isClose }) {
    
  const ContactDelete = (id) => {
    fetch(`${ApiURL}/contact-delete`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token")
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.status){
         isClose()
        };
      });
  };
    return (
        <div>
            <div>
                <Modal
                    open={isOpen}
                    isClose={isClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}

                >
                    <Box className='ComtactDeleteHead'>

                        <div className='DeleteIconBtn'>
                            <div style={{ display: "flex" }}><DeleteOutlineIcon style={{ color: "rgb(244, 67, 54)" }} /></div>
                            <div className='Contactdeleting'>Contact deleting</div>
                        </div>

                        <div style={{padding:"24px 0px"}}>
                            You are going to delete gita@gmail.com from your contacts.
                        </div>
                        <div className='groupBtn'>
                            <div><Button style={{color:'#000000'}}
                            onClick={()=>{
                                isClose()
                            }}>Cancle</Button></div>
                            <div><Button className='DeleteBtnIcon'
                            onClick={()=>{
                                ContactDelete();
                            }}>Delete</Button></div>
                        </div>
                    </Box>

                </Modal>
            </div>
        </div>
    )
}



