import React from 'react'
import './Nav.css'
import {FiHeart} from 'react-icons/fi'
import { AiOutlineUserAdd} from 'react-icons/ai'
import { FaShoppingCart } from "react-icons/fa";


function Nav({handleInput}) {
  return (
    <nav>

      <div className="nav-container">
        <input type="text"
        placeholder='What are you looking for ?'
        className='search-input'
        onChange={handleInput}

        />
      </div>

      <div className="profile-container">
        <a className='nav-icons' href="#">
            <FiHeart/>
        </a>
          
        <a className='nav-icons' href="#">
            <FaShoppingCart/>
        </a>
            
        <a className='nav-icons' href="#">
            <AiOutlineUserAdd/>
        </a>
        
      </div>

    </nav>
  )
}

export default Nav