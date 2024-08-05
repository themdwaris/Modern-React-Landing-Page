import React from 'react'

const OpenCloseBtn = ({toggle,setToggle,icon}) => {
    
  return (
 
    <button
        className="block md:hidden font-medium text-xl cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        {icon}
      </button>
  )
}


export default OpenCloseBtn