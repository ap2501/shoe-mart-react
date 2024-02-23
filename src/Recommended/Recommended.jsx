import React from 'react'
import './Recommended.css'
import '../index.css'
import Button from '../Components/Button'

function Recommended(props) {
  return (
    <>

      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">

          <button onClick={props.handleClick} value="" className='btns'>All</button>
          <Button Click={props.handleClick} value='Vans'/>  
          <Button Click={props.handleClick} value='Adidas'/>  
          <Button Click={props.handleClick} value='Puma'/>  
          <Button Click={props.handleClick} value='Nike'/>  

        </div>
      </div>
    
    </>
  )
}

export default Recommended