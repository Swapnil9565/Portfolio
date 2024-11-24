import React from "react";

const Skills = ({ mode }) => {
  return (
    <div
      className={`${
        mode === "dark" ? "text-white" : "text-black"
      } pt-5 md:pt-10`}>
      <h1 className='text-center font-bold text-[#d53ff9] text-4xl uppercase underline'>
        My Skills
      </h1>
      <div className='flex justify-center gap-10'>
        <div className='w-1/4'>
          <h1 className="my-3">HTML5</h1>
          <div  className="w-full border-2 border-orange-500 rounded-md">
            <div className='w-[90%] border-4 border-orange-500'></div>
          </div>
          <h1 className="my-3">CSS3</h1>
          <div className="w-full border-2 border-orange-500 rounded-md">
            <div className='w-[85%] border-4  border-orange-500'></div>
          </div>
          <h1 className="my-3">JavaScript</h1>
          <div className="w-full border-2 border-orange-500 rounded-md">
            <div className='w-[70%] border-4  border-orange-500'></div>
          </div>
        </div>
        <div className='w-1/4'>
          <h1>React</h1>
          <div className="w-full border-2 border-orange-500 rounded-md">
            <div className='w-[65%] border-4 border-orange-500'></div>
          </div>
          <h1>MySql</h1>
          <div className="w-full border-2 border-orange-500 rounded-md">
            <div className='w-[80%] border-4  border-orange-500 '></div>
          </div>
          <h1>Tailwind CSS</h1>
          <div className="w-full border-2 border-orange-500 rounded-md">
            <div className='w-[95%] border-4  border-orange-500 '></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
