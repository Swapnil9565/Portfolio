
import aboutImg from "../assets/AboutPage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons/faBuildingColumns";
import certify from "../assets/Certify.png";
const About = ({mode}) => {
  return (
    <div className={`${mode==="dark"?"text-white":"text-black"} pt-5 md:pt-10`}>
      <h1 className='text-center font-bold text-[#d53ff9] text-4xl uppercase underline'>
        About <span className={`${mode=="dark"?"text-white":"text-black"} underline`}>Me</span>
      </h1>
      <div className='flex justify-center flex-wrap gap-20  w-full mt-5'>
        <div className='w-[20rem]'>
          <img src={aboutImg} alt='aboutimg' className='w-[20rem] rounded-xl md:w-64' />
        </div>
        <div className='w-[90%] md:w-1/2'>
          <div className='flex gap-x-5 justify-between'>
            <div className='w-2/3 border-2 border-gray-400 rounded-lg p-5 flex flex-col justify-center items-center shadow-md transition-all hover:scale-105'>
              <img src={certify} alt='icon' className={`${mode==="dark"?"bg-white rounded-full":"bg-[#FAF9F6]"} w-14 md:w-12`} />
              <h1 className="font-bold mt-4 text-xl md:text-lg tracking-wider">Certification</h1>
              <p className="text-lg md:text-sm">6 Month</p>
              <p className={`${mode=="dark"?"text-whitesmoke":"text-zinc-600"} text-lg md:text-sm`}>Mern Stack Development</p>
            </div>
            <div className='w-2/3 border-2 border-gray-400 rounded-lg px-5 p-5 flex flex-col justify-center items-center shadow-md transition-all hover:scale-105'>
              <FontAwesomeIcon icon={faBuildingColumns} className='text-4xl' />
              <h1 className='font-bold mt-4 text-xl md:text-lg tracking-wider'>Education</h1>
              <p className="text-lg md:text-sm">B.E</p>
              <p className={`${mode=="dark"?"text-whitesmoke":"text-zinc-600"} text-lg md:text-sm`}>Information Technology</p>
            </div>
          </div>
          <p className={`${mode==="dark"?"text-white":"text-zinc-600"} my-10 tracking-wider leading-8 text-xl md:text-sm md:tracking-wide md:leading-6`}>
            Hi, I'm Swapnil, a passionate and driven developer with a strong
            foundation in MERN stack development and acquired skills in React
            js, Express JS,MongoDB, NodeJS and hands-on experience building
            innovative projects. My journey in tech has been fueled by a love
            for problem-solving and creating efficient, user-focused solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
