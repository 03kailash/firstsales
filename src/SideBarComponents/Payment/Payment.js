import React from 'react'
import './payment.css'
import firstimg from "./firstimg.png"
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
        <div style={{ display: 'flex', justifyContent:"flex-start" }} >
          <span className='details'>Enter payment details</span>
        </div>
      </div>
    </div>
  )
}
