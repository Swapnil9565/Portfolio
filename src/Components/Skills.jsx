import React from "react";
import { motion } from "framer-motion";

const Skills = ({ mode }) => {
  const mySkills = [
    { id: 1, skill: "HTML5", percentage: 95 },
    { id: 2, skill: "CSS3", percentage: 90 },
    { id: 3, skill: "JavaScript", percentage: 70 },
    { id: 4, skill: "Java", percentage: 75 },
    { id: 5, skill: "MongoDB", percentage: 65 },
    { id: 6, skill: "Express", percentage: 70 },
    { id: 7, skill: "React", percentage: 70 },
    { id: 8, skill: "Tailwind", percentage: 95 },
  ];

  return (
    <div
      className={`${
        mode === "dark" ? "text-white" : "text-black"
      } pt-5 md:pt-10`}
    >
      <h1 className="text-center font-bold text-[#d53ff9] text-4xl uppercase underline">
        <span className={`${mode === "dark" ? "text-white" : "text-black"} underline`}>
          My{" "}
        </span>
        Skills
      </h1>
      <p className="text-lg text-center my-4 leading-7 md:text-sm">
        Proficient in designing and developing full-stack web applications using
        the MERN stack MongoDB, Express.js, React.js, Node.js{" "}
      </p>
      <div className="w-3/4 grid grid-cols-1 md:w-2/3 md:grid-cols-2 md:gap-x-20 my-20 mx-auto">
        {mySkills.map(({ id, skill, percentage }) => {
          return (
            <div key={id} className="mb-7 md:mb-5">
              <h1 className="font-semibold text-xl md:text-sm">{skill}</h1>
              <div className="w-full bg-[#959595] rounded-md h-[15px]">
                <motion.div
                   initial={{ width: 0 }}
                   whileInView={{ width: `${percentage}%` }}
                   transition={{ duration: 1.2, ease: "easeOut" }}
                   viewport={{ once: true }}
                   className="bg-red-500 text-center text-white rounded-md h-[15px] relative"
                >
                  <span className="h-[30px] w-[30px] rounded-[50%] bg-[#222] float-right mt-[-15px] md:mt-[-10px] mr-[-20px] text-md text-white flex justify-center items-center p-6 md:p-4 md:text-xs">
                    {percentage}%
                  </span>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
