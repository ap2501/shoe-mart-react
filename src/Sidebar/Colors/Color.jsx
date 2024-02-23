import React from 'react'
import './Color.css'    
import Input from '../../Components/Input'

function Color(props) {
  return (
    <div>
      <h2 className="sidebar-title price-title">
        Colors
      </h2>
      
      <Input handleChange = {props.handleChange} value = 'red' title='Red' name='shoeColor' color='red'/>
      <Input handleChange = {props.handleChange} value = 'blue' title='Blue' name='shoeColor' color='red'/>
      <Input handleChange = {props.handleChange} value = 'black' title='Black' name='shoeColor' color='red'/>
      <Input handleChange = {props.handleChange} value = 'brown' title='Brown' name='shoeColor' color='red'/>

    </div>
  )
}

export default Color