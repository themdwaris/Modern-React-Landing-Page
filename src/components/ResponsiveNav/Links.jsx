import React from 'react'

const Links = ({className,classA}) => {
  return (
    <div className={className}>
    <a href="#" className={`hover:text-blue-500 ${classA}`}>
      Pricing
    </a>
    <a href="#" className={`hover:text-blue-500 ${classA}`}>
      Docs
    </a>
    <a href="#" className={`hover:text-blue-500 ${classA}`}>
      Changelog
    </a>
    <a href="#" className={`hover:text-blue-500 ${classA}`}>
      Blog
    </a>
    <a href="#" className={`hover:text-blue-500 ${classA} `}>
      Login
    </a>
  </div>
  )
}

export default Links