import React from 'react'
import './SideBar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Colors/Color'

function SideBar(props) {
  return (
    <>
    
        <section className="sidebar">
            <div className="logo-container">
                <h1>Shoe🛒Mart </h1>
            </div>

            <Category handleChange = {props.handleChange}/>
            <Color  handleChange = {props.handleChange}/>
            <Price  handleChange = {props.handleChange}/>

        </section>

    </>
  )
}

export default SideBar