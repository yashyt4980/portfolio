import React from "react";
import gif from "../assets/portfolio/gif.png";
import insta from "../assets/portfolio/insta.png";
import evently from "../assets/portfolio/evently.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: evently,
      link: 'https://evenlty-iota.vercel.app/',
      repo: 'https://github.com/yashbhargava6740/event_man'
    },
    {
      id: 2,
      src: insta,
      link: 'https://socialmedia-wvkr.onrender.com/',
      repo: 'https://github.com/yashyt4980/socialMedia'
    },
    {
      id: 3,
      src: gif,
      link: 'https://glowing-sable-8a9ead.netlify.app/',
      repo: 'https://github.com/yashyt4980/random_gif_generator'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 h-[12rem] w-[20rem]"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
                {
                  link !== '' ? <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button> : <></> 
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
