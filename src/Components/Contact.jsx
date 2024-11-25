import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Footer from './Footer'

const Contact = ({mode}) => {
  return (
    <div
    className={`${
      mode === "dark" ? "text-white" : "text-black"
    } pt-5 md:pt-5`}>
    <h1 className='text-center font-bold text-[#d53ff9] text-4xl uppercase underline'>
      <span
        className={`${
          mode == "dark" ? "text-white" : "text-black"
        } underline`}>
        Connect{" "}
      </span>
      Me
    </h1>
    <div className='w-full md:w-1/2 mx-auto flex gap-5 justify-around items-center border-2 border-gray-400 rounded-full py-6 px-5 mt-20 shadow-lg'>
      <div className="flex items-center gap-3 text-2xl">
        <FontAwesomeIcon icon={faEnvelope}/>
        <h1 className='hover:text-blue-600 hover:underline'><a href="https://mail.google.com/mail/u/0/#inbox" target='_blank'>swapnilmohite9565@gmail.com</a></h1>
      </div>
      <div className="flex items-center gap-3 text-2xl">
        <FontAwesomeIcon icon={faLinkedin}/>
        <h1 className='hover:text-blue-600 hover:underline'><a href="https://www.linkedin.com/in/swapnil-mohite-63b153248/" target='_blank'>LinkedIn</a></h1>
      </div>
    </div>
    </div>
  )
}

export default Contact
    