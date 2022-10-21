import React from 'react'
import './Billing.css'
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function Billing() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <div>
            <div className='textPlan'>
                Your current plan
            </div>
            <div className='firstPlan'>
                <div className='TrailPlan'>
                    <div className='textYouhave'>You have</div>
                    <div className='trailDay'>Free trial for 7 days</div>
                    <div style={{ marginTop: '8px' }}><Chip label="5 day left" className='trailChip' size='small' /></div>
                </div>
                <div className='planDiv'>
                    <div style={{ display: 'flex', gap: '30px' }} >
                        <div>
                            <div>1 User</div>
                            <div className='MonthPlanText'>Monthly plan</div>
                            <div className='PlanPrice'>
                                <span style={{ fontSize: '28px', margin: '0px 3px' }}>$149</span>
                                <span style={{ margin: '0px 3px' }}>/</span>
                                <span style={{ margin: '0px 3px' }}>month</span>
                                <div className='NextPayment'>Next payment: October 25th, 2022</div>
                            </div>
                        </div>
                        <div className='ChangePlanDiv'>
                            <div>
                                <Button className='Changeplan'>Upgrade plan</Button>
                            </div>
                            <div>
                                <Button className='Cancelplan'>Cancel Subscription</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='Plans'>Plans & Pricing</p>
            <div>
                <ToggleButtonGroup
                    color="warning"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="Monthly" style={{height:'40px',textTransform:'inherit',color:'#ff8e00'}}>Monthly</ToggleButton>
                    <ToggleButton value="Special plan" style={{height:'40px',textTransform:'inherit',color:'#ff8e00'}}>Special Offer 🎁</ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    )
}
