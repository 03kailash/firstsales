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

    <div style={{ backgroundColor: "rgb(224, 224, 224)" }}>
      <div className="PaymentDiv">
        <div style={{ display: 'flex', justifyContent: "space-between", width: '920px' }} >
          <div className='ContainerDivTop'>
            <div>
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

                >
                  <div style={{ paddingBottom: "30px", width: "100%" }}>
                    <FormControl variant="standard" style={{ width: "100%" }}  >
                      <BootstrapInput id="bootstrap-input" className='EmailFeildDiv' disabled />
                    </FormControl>

                    <FormControl variant="standard" style={{ width: "100%" }} >
                      <BootstrapInput id="bootstrap-input" className='EmailFeild' placeholder='081234 56789' />
                    </FormControl>

                  </div>
                </Box>
                <div>
                  <spam >Card information</spam>
                  <div style={{ paddingTop: "10px", width: "100%" }}>
                    <Box
                      component="form"
                      noValidate
                    >
                      <FormControl variant="standard" style={{ width: "100%" }}>
                        <BootstrapInput id="bootstrap-input" className='EmailFeildDiv' />
                      </FormControl>
                      <div style={{ width: "100%",display:"flex",}}>
                        <FormControl variant="standard"  >
                          <BootstrapInput id="bootstrap-input" className='EmailFeildMM'/>
                        </FormControl>

                        <FormControl variant="standard"  >
                          <BootstrapInput id="bootstrap-input"  className='EmailFeildCvv'/> 
                        </FormControl>
                      </div>

                    </Box>
                  </div>
                </div>




              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
