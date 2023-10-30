import React from 'react'

export default function Footer(props) {
  return (
        <div className='row fixed-middle'>
      <button className='btn btn-danger col-2' onClick={()=>{props.resetEverything(props)}}>Reset</button>
      <div className='col-8 bg-dark text-light text-center'>{props.totalAmount}</div>
      <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
