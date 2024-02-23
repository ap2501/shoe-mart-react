import React from 'react'
import './Product.css'

import Card from '../Components/Card';


function Product(props) {
  return (
    <>

        <section className="card-container">
            {props.products}
        </section>

    </>
  )
}

export default Product