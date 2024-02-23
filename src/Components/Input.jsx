import React from 'react'

function Input({handleChange, value, title, name, color}) {
  return (
    <>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name={name}
          value={value} 
          style={{backgroundColor:color}}
          />
          <span className="checkmark"></span>{title}
        </label>

    </>
  )
}

export default Input