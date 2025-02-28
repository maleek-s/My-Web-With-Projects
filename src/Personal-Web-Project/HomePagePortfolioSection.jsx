import React from "react";
import { motion } from "framer-motion";
import MainArrow from "./assets/Arrow.svg";
import ColorPalettes from "./assets/Color-Palettes.PNG";
import SynonymGame from "./assets/Synonym-Game.PNG";
import RKHadzici from "./assets/Rk Hadzici.png";
import ScandiTask from "./assets/ScandiTask.PNG";
import Subtitling from "./assets/Subtitling.png";
import JobsInTech from "./assets/JobsInTech.png"; 

const projects = [
  {
    title: "Job Search Platform",
    description:
      "My scraper searches for job posts on company websites and delivers them to you!",
    tech: ["JavaScript", "NodeJS", "React", "MongoDB"],
    imgSrc: JobsInTech,
    link: "http://jobsintech.live/",
  },
  {
    title: "A Subtitling Company Website",
    description:
      "I worked on a website for a localization company based in Sarajevo. Their area of speciality is subtitling, translation, transcription, localization. It's a cute little mobile-friendly website.",
    tech: ["React", "CSS3", "JavaScript"],
    imgSrc: Subtitling,
    link: "http://subtitling-abc.web.app/",
  },
  {
    title: "Local Handball Club's Website",
    description:
      "I created a custom WordPress theme for this website using HTML, CSS, JS, PHP, and WordPress plugins. This is still a work in progress, to be published soon as an official website.",
    tech: ["WordPress", "PHP", "JS"],
    imgSrc: RKHadzici,
    link: "http://rkhadzici.x10.mx",
  },
  {
    title: "Color Palettes Project",
    description:
      "A fun project where you can explore 9 predesigned color palettes, click to copy color codes in HEX, RGB, or RGBA formats, and even create your own palettes!",
    tech: ["HTML5", "CSS3", "JavaScript"],
    imgSrc: ColorPalettes,
    link: "/palette",
  },
  {
    title: "Synonym Guessing Game",
    description:
      "A single-player game where you guess synonyms of given words. Score points and try to beat your high score within 30 seconds!",
    tech: ["HTML5", "CSS3", "JavaScript"],
    imgSrc: SynonymGame,
    link: "/synonym-game",
  },
  {
    title: "Products - CRUD",
    description:
      "A CRUD application built for an IT company onboarding task. Uses React, PHP & MySQL to manage products in a database.",
    tech: ["React", "PHP", "MySQL"],
    imgSrc: ScandiTask,
    link: "https://scandiweb.maleek.live/",
  },
];

function PortfolioSection({ isDarkMode }) {
  return (
    <section className="py-4 px-1 sm:px-1 mx-auto max-w-9/10">
      <h2
        className="text-center text-3xl font-bold pb-8"
        style={{
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-2 items-center p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl ${
              isDarkMode ? "bg-[#202020] text-white" : "bg-gray-100 text-black"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            {/* Conditionally place image on the left or right */}
            {index % 2 === 0 ? (
              <>
                <motion.img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full md:w-auto h-auto rounded-md border border-gray-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center md:justify-start items-center text-blue-500 text-lg hover:underline"
                  >
                    Take a look
                    <img src={MainArrow} alt="Arrow" className="ml-2 w-5" />
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center md:justify-start items-center text-blue-500 text-lg hover:underline"
                  >
                    Take a look
                    <img src={MainArrow} alt="Arrow" className="ml-2 w-5" />
                  </a>
                </div>
                <motion.img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-full md:w-auto h-auto rounded-md border border-gray-300"
                  whileHover={{ scale: 1.05 }}
                />
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
