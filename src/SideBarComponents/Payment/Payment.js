import React from 'react'
import './payment.css'
import firstimg from "./firstimg.png"
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Payment() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} >
      <div className='ContainerDivTop'>
        <div style={{ backgroundColor: " #F3F3F3" }}>
          <div className='logodiv'>
            <div style={{ width: '100%' }} >
              <div><span className='textFirstSales'>Try First Sales</span></div>
              <div className='day7'>7 days free</div>
              <div style={{ color: "hsla(0,0%,10%,.6)", fontSize: "14px" }}>Then US$30.00 per month</div>
            </div>
          </div>
          <div className='imgDiv'>
            <img src={firstimg} alt="" />
          </div>
        </div>
      </div>
      <div className='paymentMethod'>
        <div style={{ display: 'flex', justifyContent: "flex-start" }} >
          <span className='details'>Enter payment details</span>
        </div>
        <div>
          <div className='payText'>Payment method</div>
          <div>
            <Box
              component="form"
              noValidate
              sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', paddingBottom: "30px" }}>
                <div>
                  <FormControl variant="standard">
                    <BootstrapInput id="bootstrap-input" />
                  </FormControl>
                </div>
                <div>
                  <FormControl variant="standard">
                    <BootstrapInput id="bootstrap-input" > <AccountBalanceSharpIcon /></BootstrapInput>
                  </FormControl>
                </div>
              </div>
            </Box>
            <div>
              <spam >Card information</spam>
              <div style={{paddingTop:"10px"}}>
              <Box
                component="form"
                noValidate
                sx={{
                  display: 'grid',
                  width:"350px",  
                  gridTemplateColumns: { sm: '1fr 1fr' },
                }}
              >
                <FormControl variant="standard"  >
                  <BootstrapInput id="bootstrap-input"> <AccountBalanceSharpIcon /></BootstrapInput>
                </FormControl>
              </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
