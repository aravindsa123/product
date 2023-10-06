import React from 'react'
import './Transferdata.css'
const Transferdata = (props) => {
  return (
    <div className='aa'>
     <h1>WELCOME</h1> 
     <p>
          USERNAME:&nbsp;{props.username}
          <br/>
          PASSWORD:&nbsp;{props.password}
          <br/>
          USER TYPE:&nbsp;{props.usertype}
     </p>
    </div>
  )
}

export default Transferdata
