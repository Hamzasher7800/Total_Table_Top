import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='border-2 border-[#f3c15f] p-2'>{name}</button>
    </div>
  )
}

export default Button