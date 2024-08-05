import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { useTheme } from '../../context/UserTheme';
// import { useUserContext } from '../../context/UseContext';

const Github = () => {

  const data = useLoaderData()
  const {themeToggle}=useTheme()
  return (
    <div className={`w-full ${themeToggle?"bg-gray-900":"bg-gradient-to-b from-blue-50 via-red-50 to-transparent"}`}>
      <div className="my-16 md:mt-20 max-w-7xl mx-auto px-5 md:px-0  ">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5 pt-16 md:pt-28 md:px-5">
          <div className="flex-1 flex-col justify-center">
            <span className="px-3 py-2 bg-red-500 rounded-lg shadow-lg text-white/90 text-balance text-base cursor-pointer" >
            Git & Github
            </span>
            <span className='block md:inline-block font-semibold text-black/90 text-balance text-base p-3 dark:text-gray-200'>Hitesh github followers: {data?.followers}</span>
            <h1 className="text-4xl md:text-7xl font-bold text-black/80 my-6 dark:text-white/90">Hello, there lets learn about git & github</h1>
            <p className="text-gray-600 text-xl my-4 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore accusamus autem qui modi non?</p>
          </div>
          <div className="flex justify-center items-center">
            <img className="rounded-2xl w-[80%] object-cover"src={data?.avatar_url} alt="" />
          </div>
        </div>
      </div>
      {/* <Outlet/> */}
    </div>
  )
}

export default Github

export const getData = async()=>{
  const res = await fetch('https://api.github.com/users/hiteshchoudhary')
  return res.json()
}