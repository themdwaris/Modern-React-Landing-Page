import React from 'react'

const Clicks = ({icon,text}) => {
  return (
    <span className='text-gray-500 text-base flex items-center gap-2 cursor-pointer'>
    <span className='text-xl leading-3'>{icon}</span> {text}
  </span>
  )
}

export default Clicks