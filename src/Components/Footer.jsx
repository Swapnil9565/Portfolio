import React from 'react'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div className='px-1 md:px-5 bg-black text-white pt-10 w-full'>
    <div className="w-full md:w-auto flex flex-wrap justify-center gap-5 md:gap-32 pb-10">
        <div className="myinfo w-1/4  md:w-auto">
            <h1 className='text-2xl font-bold mb-3'>Swapnil Mohite</h1>
            <p className='text-lg'>Pune , Maharashtra <br />Bharat</p>
            <p className='text-md'>MERN Stack Developer</p>
        </div>
        <div className="flex flex-col cursor-pointer w-1/4 md:w-auto">
        <h1 className='text-2xl font-bold mb-3'>Imp Links</h1> 
        <Link to="home" smooth={true} duration={500} offset={-75} className="hover:text-blue-600 hover:underline">Home</Link>
        <Link to="about" smooth={true} duration={500} offset={-75} className="hover:text-blue-600 hover:underline">About</Link>
        <Link to="skills" smooth={true} duration={500} offset={-75} className="hover:text-blue-600 hover:underline">Skills</Link>
        <Link to="projects" smooth={true} duration={500} offset={-75} className="hover:text-blue-600 hover:underline">Projects</Link>   
        </div>
        <div className="contactinfo w-1/4  md:w-auto">
            <h1 className='text-2xl font-bold mb-3'>Contact Info</h1>
            <p className='break-all'>swapnilmohite9565@gmail.com</p>
            <p>+91 9730719565</p>
        </div>
        <div className="flex flex-col cursor-pointer w-1/4  md:w-auto">
            <h1 className='text-2xl font-bold mb-3'>Social Links</h1>
            <a href="https://x.com/" target='_blank' className='hover:text-blue-600 hover:underline'>X</a>
            <a href="https://www.facebook.com/" target='_blank' className='hover:text-blue-600 hover:underline'>Facebook</a>
            <a href="https://www.instagram.com/" target='_blank' className='hover:text-blue-600 hover:underline'>Instagram</a>
        </div>
    </div>
    <div className="text-center tracking-wide text-gray-400">
          <p>Copyright &copy; 2024 Swapnil Mohite.All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer