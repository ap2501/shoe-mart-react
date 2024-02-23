import React from 'react'

function Button({Click, value}) {
  return (
    <button className='btns' onClick={Click} value={value}>
      {value}
    </button>
  )
}

export default Button