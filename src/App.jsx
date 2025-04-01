import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  const [mode, setMode] = useState("light");

  return (
    <div className={`${mode === "dark" ? "bg-[#030637]" : "bg-[#FAF9F6]"} w-[641px] md:w-full`}>
      <Navbar mode={mode} setMode={setMode}/>
      <div className="">
        <div className='h-[190vh] md:h-screen' id='home'>
          <Home mode={mode}/>
        </div>
        <div className='h-[190vh] md:h-screen' id='about'>
          <About mode={mode}/>
        </div>
        <div className='h-[190vh] md:h-screen' id='skills'>
          <Skills mode={mode}/>
        </div>
        <div className='h-[350vh] md:h-[150vh]' id='projects'>
          <Projects mode={mode}/>
        </div>
        <div className='h-screen md:h-[50vh]' id='contact'>
          <Contact mode={mode}/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
