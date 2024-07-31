import React from 'react'

const OpenClose = ({setToggle,toggle,icon}) => {
  return (
    <button
        className="lg:hidden font-medium text-xl"
        onClick={() => setToggle(!toggle)}
      >
        {icon}
      </button>
  )
}

export default OpenClose