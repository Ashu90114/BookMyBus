import React from 'react'
import './OffersCard.css'

function OffersCard(props) {
  return (
    <div className='card-container1'>
        <div className='image-container1'>
            <img src={props.imageurl} alt="" />
        </div>
        <div className='card-content1'>
            <div className='card-title'>
                <h3>Grab this offer !!</h3>
            </div>
            <div className='card-body1'>
                <p>Use code first</p>
            </div>
        </div>
        
    </div>
  )
}

export default OffersCard