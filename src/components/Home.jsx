import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Home = () => {

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
          
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm a <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Full Stack Web Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Competitive Programmer")
                        .pauseFor(1000)
                        .start();
                }}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a passionate Full Stack Web Developer, I've gained expertise through internships and projects. I'm committed to crafting innovative solutions and integrating Data Structures and Algorithms to solve real-world problems effectively.
          </p>

          <div className="portfolio-btn">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;
