import React, { useState } from "react";
import myImg from "../assets/MyImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
const Navbar = ({ mode, setMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  const navLinks=[
    {id:1,item:"Home",path:"home"},
    {id:2,item:"About me",path:"about"},
    {id:3,item:"Skills",path:"skills"},
    {id:4,item:"Projects",path:"projects"},
    {id:5,item:"Contact",path:"contact"},
  ]
  return (
    <nav className={`${mode === "dark" ? "text-white" : "text-black"} sticky top-0 z-index-[1000] shadow-md flex justify-between p-5 md:flex md:justify-around md:items-center`}>
      <div>
        <h1 className='cursor-pointer font-bold text-4xl md:text-3xl lg:text-4xl'>
          <Link to="home" smooth={true} duration={500} offset={-75}><img src={myImg} alt="" className=" h-[9vh] w-[4vw] rounded-[80%] aspect-square"/></Link>
        </h1>
      </div>
      <div>
        <div className='block text-4xl font-bold  md:hidden' onClick={() => {setIsOpen(!isOpen);}}>
          {isOpen ? ( <FontAwesomeIcon icon={faClose} />) : (<FontAwesomeIcon icon={faBars} /> )}
        </div>
        {/* Desktop mode */}
        <ul className=' cursor-pointer gap-10 text-lg font-medium uppercase hidden md:flex md:justify-center md:items-center'>
           {navLinks.map((link)=>{
               return (    
                <li key={link.id} className="hover:text-[#d53ff9]"><Link to={link.path} smooth={true} duration={500} offset={-75}>{link.item}</Link></li>
               )
           })}
          <div
            className='text-4xl cursor-pointer md:text-3xl'
            onClick={handleTheme} title="Switch Mode">
            {mode === "dark" ? (
              <FontAwesomeIcon icon={faSun} style={{ color: "white" }} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
        </ul>

        {/*Mobile devices*/}
        <ul
        className={isOpen? 'w-[640px] cursor-pointer fixed flex items-center flex-col gap-y-[12px] md:hidden left-0 top-[70px] w-full h-auto px-5 py-1 border-r border-r-gray-900 shadow-md bg-[#030637] text-white ease-in-out duration-500'
                    : 'ease-in-out w-full duration-500 fixed top-[-100%] left-0 bg-white text-black'}>
             <div
            className='absolute right-5 text-3xl cursor-pointer md:text-3xl'
            onClick={handleTheme}>
            {mode === "dark" ? (
              <FontAwesomeIcon icon={faSun} style={{ color: "white" }} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
           {navLinks.map((link)=>{
               return (    
                <li key={link.id} className="text-2xl hover:text-[#d53ff9]"><Link to={link.path} smooth={true} duration={500} offset={-75}>{link.item}</Link></li>
               )
           })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
