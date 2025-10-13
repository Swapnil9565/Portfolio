import React from "react";
import { Link } from "react-scroll";
import homePng from "../assets/HomePage.png";
const Home = ({ mode }) => {
  return (
    <div className='h-[140vh] flex flex-wrap flex-col-reverse w-full justify-around items-center md:h-[80vh] md:flex-row'>
      <div
        className={`${
          mode === "dark" && "text-white"
        } text-center md:text-justify`}>
        <div className='my-4 md:my-5'>
          <p className='text-3xl font-semibold my-1 md:text-2xl  md:my-3'>
            Hello, I'm
          </p>
          <p className='font-bold text-6xl text-[#d53ff9] italic mt-2 md:text-5xl md:mt-1 tracking-wide'>
            Swapnil Mohite
          </p>
        </div>
        <div>
          <p className='text-xl md:text-lg font-semibold'>
            Mern Stack Developer
          </p>
        </div>
        <div className='flex justify-center gap-5 mt-10 text-2xl font-medium md:justify-start  md:text-lg md:font-semibold'>
          <a href='/Swapnil_Resume.pdf' download='Resume'>
            <button className='border-2 border-[#d53ff9] rounded-md text-[#d53ff9] transition-all hover:scale-105 px-2 py-3'>
              Download Resume
            </button>
          </a>
          <button className='px-3 py-3 md:px-2 md:py-2 rounded-md bg-[#d53ff9] text-white transition-all hover:scale-105'>
            <Link to='contact'>Contact Me</Link>
          </button>
        </div>
      </div>
      <div
        className={`${
          mode === "dark" &&
          "border-8 border-[#d53ff9] shadow-md rounded-full hover:animate-bounce mb-10 md:mb-0"
        }`}>
        <img
          src={homePng}
          alt='img'
          className='border-none rounded-full w-[32rem] md:w-96 '
        />
      </div>
    </div>
  );
};

export default Home;
