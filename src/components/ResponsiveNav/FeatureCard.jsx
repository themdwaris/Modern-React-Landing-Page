import React from 'react'
import Profile from './Profile'

const FeatureCard = ({icon,head,para,company,avatar,name,title,color,bgcolor}) => {
  return (
    <div className="cursor-pointer rounded-2xl flex flex-col justify-between  border px-6 mb-8 lg:mb-0 lg:p-10 pt-6 bg-white hover:hover:hover:bg-gradient-to-br hover:from-red-100 hover:via-purple-100 hover:to-yellow-100 min-h-full">
   <div>
   <span className={`text-2xl font-semibold ${bgcolor} ${color} w-fit rounded-full p-3 inline-flex leading-3`}>
      {icon}
    </span>
    <h2 className="font-semibold text-2xl mt-3 mb-7 text-gray-800">{head}</h2>
    <p className="text-gray-600 font-normal text-xl mb-4">
      {para}
    </p>
   </div>
    <div className="flex items-center relative ml-10 my-8 lg:my-0 h-fit">
      <img className="rounded-full w-30 object-cover absolute -top-1 lg:top-6 -left-8" src={company} alt="" />
      <Profile
        avatar={avatar}
        name={name}
        title={title}
      />
    </div>
  </div>
  )
}

export default FeatureCard