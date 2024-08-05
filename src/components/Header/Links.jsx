import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({path,linkName,toggle,setToggle,className}) => {
  return (
    <>
     <NavLink to={path} className={({isActive})=>`${className&&className}text-base font-semibold dark:text-white text-gray-700 ${isActive?"text-red-500":"text-gray-700"}`} onClick={()=>setToggle(!toggle)}>{linkName}</NavLink>
    </>
  )
}

export default Links