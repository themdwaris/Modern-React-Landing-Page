import React from 'react'
import logoImage from "../../assets/todesktop-logo.bn2Qe8sb.png"
const Logo = () => {
  return (
    <a href="#" id="brand" className="flex items-center gap-2">
        <img
          className="max-w-10 md:max-w-12 object-cover"
          src={logoImage}
          alt="img"
        />
        <span className="font-semibold text-1xl">ToDesktop</span>
      </a>
  )
}

export default Logo