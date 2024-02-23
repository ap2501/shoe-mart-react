import React from 'react'
import './Category.css'
import Input from '../../Components/Input'

function Category(props) {
  return (
    <>
      <h2 className="sidebar-title">
        Category
      </h2>

      <div>

        <Input handleChange = {props.handleChange} value = '' title='All' name='shoeType' />
        <Input handleChange = {props.handleChange} value = 'sneakers' title='Sneakers' name='shoeType' color='red'/>
        <Input handleChange = {props.handleChange} value = 'flats' title='Flats' name='shoeType' color='red'/>
        <Input handleChange = {props.handleChange} value = 'heels' title='Heels' name='shoeType' color='red'/>
        

      </div>
    </>
  )
}

export default Category