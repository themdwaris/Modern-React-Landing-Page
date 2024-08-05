import React from 'react'
import { useTheme } from '../../context/UserTheme'

const Contact = () => {
  const {themeToggle}=useTheme()
  return (
    <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
      <div className="my-16 md:mt-20 max-w-7xl mx-auto px-5 md:px-0  ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 pt-16 md:pt-24 md:px-5">
          <div className="w-full flex-1 flex-col justify-center">
            <span className="px-3 py-2 bg-red-500 rounded-lg shadow-lg text-white/90 text-balance text-base">
              CONTACT US
            </span>
            <form onSubmit={(e)=>e.preventDefault()}>
              <div className='max-w-2xl flex flex-col gap-5 justify-center items-center p-6 border rounded-lg mt-5 dark:bg-gray-600 dark:border-none'>
                <input className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' type="text" name="user" id="" placeholder='Name' />
                <input className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' type="email" name="email" id="" placeholder='Email' />
                <textarea className='w-full px-4 py-3 border rounded-lg bg-white/90 outline-red-500' placeholder="Message"name="message" id="" rows={5}></textarea>
              <button className='w-full text-xl font-semibold text-white bg-red-500 cursor-auto px-2 py-3 rounded-lg mt-3 hover:bg-red-400'>Send</button>
              </div>
            </form>
           
          </div>
          <div className="flex-1 justify-center items-center mt-20 md:mt-0">
            <img className="w-full object-cover"src="/draw3.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact