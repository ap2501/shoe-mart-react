import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";

function Card({img,title,prevPrice,newPrice,reviews}) {
    
  return (
    <>
    
    <section className="card">
            <img className='card-img' src={img} alt="ShoeImg"/>
            <div className="card-details">
              <h3 className="card-title">{title}</h3>
              <section className="reviews">
                
                <FaStar className='ratings-star'/> 
                <FaStar className='ratings-star'/> 
                <FaStar className='ratings-star'/> 
                <FaStar className='ratings-star'/>
                <span className="total-reviews">{reviews}</span>
              </section>

              <section className="card-price">
                <div className="price">
                  <del>{prevPrice}</del>{" "}{" "}{" "}{newPrice}
                </div>
                <div className="bag">
                  <IoBagCheck className='bag-icon'/>
                </div>
              </section>
            </div>
          </section>

    </>
  )
}

export default Card