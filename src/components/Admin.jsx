import React from 'react'

import { useTheme } from '../context/UserTheme'
import { useUserContext } from '../context/UseContext'

const Admin = () => {
  const {user}=useUserContext()
    const {themeToggle}=useTheme()
    
  
  return (
    <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
    <div className="pb-10 pt-24 max-w-7xl mx-auto px-5 md:px-0  ">
    {user?<h1 className='text-2xl font-semibold dark:text-gray-100'>Admin : {user?.username}</h1>:<h1>Please login</h1>}
    </div>
  </div>
  )
}

export default Admin