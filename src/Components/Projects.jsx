import React from "react";
import { v4 as uuidv4 } from 'uuid';
import HospitalThumb from "../assets/HospitalThumb.png"
import JobThumb from "../assets/JobThumb.png"
import NotesThumb from "../assets/NotesThumb.png";
import FoodThumb from "../assets/FoodThumb.png";

import MovieThumb from "../assets/MovieThumb.png";
const Projects = ({ mode }) => {
  const myprojects = [
    {
      thumb: HospitalThumb,
      name:"MedZone-Hospital Management System (MERN)",
      deployLink: "https://hospital-management-99yz.onrender.com",
      githubLink: "https://github.com/Swapnil9565/Hospital_Management",
    },
    {
      thumb: JobThumb,
      name:"Job Finder App (MERN)",
      deployLink: "https://job-finder-app-frontend.onrender.com",
      githubLink: "https://github.com/Swapnil9565/Job_Finder_App",
    },
    {
      thumb: NotesThumb,
      name:"Pocket Notes App",
      deployLink: "https://pocket-notes-app-chi.vercel.app",
      githubLink: "https://github.com/Swapnil9565/Pocket_Notes_App",
    },
    {
      thumb: FoodThumb,
      name:"Food Heaven:Food Recipe Finder",
      deployLink: "https://recipe-finder-mocha-eight.vercel.app",
      githubLink: "https://github.com/Swapnil9565/Recipe_finder",
    },
    {
      thumb: MovieThumb,
      name:"Movie Streaming App",
      deployLink: "https://movie-streaming-ruddy.vercel.app/",
      githubLink: "https://github.com/Swapnil9565/Movie-streaming",
    }
  ];
  return (
    <div
      className="pt-5 md:pt-10">
      <h1 className='text-center font-bold text-[#d53ff9] text-4xl uppercase underline'>
        <span
          className={`${
            mode == "dark" ? "text-white" : "text-black"
          } underline`}>
          Latest{"  "}
        </span>
        Projects
      </h1>
      <div className='w-full flex flex-wrap justify-center items-center gap-10 mt-20'>
        {myprojects.map(({thumb,name,deployLink, githubLink}) => {
          return (
            <div className='bg-[#f5e1f5] shadow-lg w-4/5 md:w-96 flex flex-col gap-y-10 items-center rounded-md p-5' key={uuidv4()}>
              <div className='img transition-transform hover:scale-105'>
                <img src={thumb} alt="thumbnail" className="w-full" />
              </div>
              <div className='font-bold text-3xl text-center md:text-justify md:text-xl'>{name}</div>
              <div className='flex gap-8'>
                <button className="text-xl md:text-sm border-2 border-zinc-400 rounded-full font-semibold transition ease-in-out hover:bg-slate-800 hover:text-white"><a href={deployLink} target="_blank" className="inline-block px-8 py-5 md:px-6 md:py-3">Demo</a></button>
                <button className="text-xl md:text-sm border-2 border-zinc-400 rounded-full font-semibold transition ease-in-out hover:bg-slate-800 hover:text-white"><a href={githubLink} target="_blank" className="inline-block px-8 py-5 md:px-6 md:py-3">Github Link</a></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
