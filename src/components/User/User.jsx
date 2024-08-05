import React from 'react'
import { useTheme } from '../../context/UserTheme'


const User = () => {
 const {themeToggle}=useTheme()
  return (
    <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
    <div className="pb-10 pt-24 max-w-7xl mx-auto px-5 md:px-0  ">
    <h1>User</h1>
    </div>
  </div>
  )
}

export default User