import React from 'react'
import './Workshop.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Chip from '@mui/material/Chip';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: '300',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Workshop() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div style={{ display: 'flex', gap: '235px', alignItems: 'center' }}>
              <div className='model'>Workspaces</div>
              <div>
                <div className='AccountCircle'>< AccountCircleOutlinedIcon style={{ color: "#ff8e00" }} /></div>
                <div style={{ alignContent: 'end', fontSize: '12px' }}>Log out</div>
              </div>
            </div>
            <div className='NameDiv'>
              <div>
                <div style={{width:'240px'}}>
                  <div style={{fontSize:'14px',fontWeight:"700"}}>EMS</div>
                  <div style={{padding:"3px 0px"}}>Role : <Chip label="Admin" variant="outlined" size='small' style={{ color: "#ff8e00", borderColor: '#ff8e00' }} /></div>
                  <span style={{fontSize:"12px",color:'rgba(0, 0, 0, 0.6)'}}>Joined ± 20 hours ago</span>
                </div>
              </div>
              <div style={{ display: 'flex',alignItems: 'center',paddingTop:"16px",justifyContent:'center',width:'150px' }}>
                <div>
                <div><Chip label="Trial Period" size='small' style={{ color: "#ffffff", backgroundColor: '#FFC107' }}  /></div>
                <div className='ExpairText'>Expair in 7 days</div>
                </div> 
              </div>
              <div style={{display:'flex',alignItems:'center'}}>
                <KeyboardArrowRightIcon/>
              </div>
            </div>
            <div className='NewWorkspace'>
              <Button variant="outlined" className='AddNewText' ><AddIcon className='AddnewBtn'/> Add new Workspaces</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  )
}
