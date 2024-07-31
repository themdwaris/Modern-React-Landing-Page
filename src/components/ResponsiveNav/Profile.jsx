import React from 'react'

const Profile = ({avatar,name,title}) => {
  return (
    <div className="flex items-center lg:mt-8 gap-3 z-30">
    <img
      className="w-30 object-cover rounded-full"
      src={avatar}
      alt=""
    />
    <div>
      <h1 className="font-semibold ">{name}</h1>
      <p className="text-gray-600">{title}</p>
    </div>
  </div>
  )
}

export default Profile