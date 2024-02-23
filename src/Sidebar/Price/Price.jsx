import React from 'react'
import './Price.css'
import Input from '../../Components/Input'

function Price(props) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">
        Price
      </h2>

      <Input handleChange = {props.handleChange} value = '100' title='$100' name='shoePrice' color='red'/>
      <Input handleChange = {props.handleChange} value = '150' title='$150' name='shoePrice' color='red'/>
      <Input handleChange = {props.handleChange} value = '200' title='$200' name='shoePrice' color='red'/>

      
    </div>
  )
}

export default Price