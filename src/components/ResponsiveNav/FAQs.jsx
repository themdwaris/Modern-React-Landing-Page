import React, { useState } from 'react'

const FAQs = ({question}) => {
    const [toggle,setToggle]=useState(false)
  return (
    <div className="w-full flex flex-col border rounded-2xl p-5 bg-gray-50 transition duration-500">
            <div className="flex items-center justify-between cursor-pointer " onClick={()=>setToggle(!toggle)}>
              <span className="font-medium text-[14px] lg:text-xl text-gray-800 break-words">
                {question}
              </span>
              <span className={`text-2xl leading-3 transition ${toggle?"-rotate-180":""}`}>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </span>
            </div>

            {toggle&&<p className="text-[16px] lg:text-xl text-gray-700 mt-4 ">
                Think of ToDesktop as a normal browser that is just for your
                website. Your website will work exactly as it does in Chrome, or
                any other browser. If you want to make the app work offline
                you’ll need to make it into a progressive web app. Include a web
                manifest, service workers and client-side storage and voila —
                offline support. Learn more on MDN.
              </p>}
          </div>
  )
}

export default FAQs