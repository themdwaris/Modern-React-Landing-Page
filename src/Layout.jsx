import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className='dark:bg-gray-900'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default Layout