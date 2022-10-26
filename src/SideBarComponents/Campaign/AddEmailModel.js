import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      >
        <Box sx={style}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
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
           <div style={{display:'flex'}}>
          <Button color='warning'>cancel</Button> 
          <Button variant='outliend'>Add</Button> 
          </div>
        </Box>
      </Modal>
    </div>
  );
}
