import * as React from 'react';
import './AddEmailModel.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

export default function AddEmailModal(props) {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  

  return (
    <div>
      <Modal
        open={props.openAddModel}
        onClose={props.handleCloseAddModel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}

      >
        <Box className='AddEmailModelDiv'>
          <FormControl variant="standard" sx={{ m: 1, minWidth: '90%' }}>
        <InputLabel id="demo-simple-select-standard-label" style={{color:"#ff8e00"}}>Mail Account</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          color='warning'
          onChange={handleChange} 
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          */}
          </Select>
           </FormControl>
           <div style={{display:'flex',justifyContent:'space-between'}}>
          <Button color='warning' onClick={()=>{
            props.handleCloseAddModel();
          }}>cancel</Button> 
          <Button variant='outliend'>Add</Button> 
          </div>
        </Box>
      </Modal>
    </div>
  );
}
