import React from "react";
import { motion } from "framer-motion";
import mainHTML from "./assets/HTML.svg";
import CSSIcon from "./assets/CSSIcon.svg";
import GitIcon from "./assets/GitIcon.svg";
import JavaScriptIcon from "./assets/JavaScriptIcon.svg";
import ReactIcon from "./assets/ReactIcon.svg";
import MongoIcon from "./assets/MongoIcon.svg";
import BootstrapIcon from "./assets/BootstrapIcon.svg";
import NodeIcon from "./assets/NodeIcon.svg";
import FirebaseIcon from "./assets/FirebaseIcon.svg";
import ExpressIcon from "./assets/ExpressIcon.svg";
import MySqlIcon from "./assets/MySqlIcon.svg";
import TailwindIcon from "./assets/Tailwind.png";
import NpmIcon from "./assets/Npm.png";
import ViteIcon from "./assets/Vite.png";
import SassIcon from "./assets/Sass.png";
import GithubIcon from "./assets/GitHub.svg";
import ReduxIcon from "./assets/Redux.svg";
import { Briefcase, Code, Headset, Users } from "lucide-react";

const skills = [
  // Programming Languages & Frontend
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "NodeJS", icon: NodeIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Express", icon: ExpressIcon },
  { name: "MySQL", icon: MySqlIcon },
  { name: "MongoDB", icon: MongoIcon },
  { name: "Postman", icon: NodeIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Bootstrap", icon: BootstrapIcon },
  { name: "Sass", icon: SassIcon },
  { name: "Vite", icon: ViteIcon },
  { name: "NPM", icon: NpmIcon },
];

const experiences = [
  {
    icon: <Headset size={24} />,
    title: "Technical support experience in SaaS companies",
    duration: "5 years",
  },
  {
    icon: <Code size={24} />,
    title: "I've been coding on my own in Full-Stack",
    duration: "4 years",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Part Time Subtitling and Translation Jobs",
    duration: "2 1/2 years",
  },
  {
    icon: <Users size={24} />,
    title: "Youth activism and character development",
    duration: "6 years",
  },
];

function SkillsSection(props) {
  const isDarkMode = props.isDarkMode;

  return (
    <div className="w-full mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold mb-12"
        style={{
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        Experience
      </motion.h3>
      <div>
        <section>
          <div className="text-white py-1">
            <div className="flex flex-col-reverse items-start lg:flex-row">
              <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12">
                <div className="grid grid-cols-1 gap-2 mt-1 mb-2">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 p-2 mt-2 border rounded-lg shadow-md hover:shadow-lg transition-all"
                      style={{
                        color: isDarkMode ? "#fff" : "#000",
                      }}
                    >
                      {exp.icon}
                      <div>
                        <h4
                          className="text-lg font-semibold"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          {exp.title}
                        </h4>
                        <p
                          className="text-gray-500 text-sm"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          {exp.duration}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                <div className="container pl-0 mx-auto w-full h-full">
                  <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      style={{
                        right: "50%",
                        border: "2px solid #FFC100",
                        borderRadius: "1%",
                      }}
                    ></div>
                    <div
                      className="border-2-2 border-yellow-555 absolute h-full border"
                      style={{
                        left: "50%",
                        border: "2px solid #FFC100",
                        bordeRadius: "1%",
                      }}
                    ></div>
                    <div className="mb-1 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-2 text-right">
                        <p className="mb-3 text-base text-red-600">
                          September 2015- June 2020
                        </p>
                        <h4
                          className="mb-3 font-bold text-lg md:text-2xl"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          Youth Association of the SDA Party
                        </h4>
                        <p
                          className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          Secretary General of a Youth Political Organization
                        </p>
                      </div>
                    </div>
                    <div className="mb-1 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1  w-5/12 px-1 py-2 text-left">
                        <p className="mb-3 text-base text-red-600">
                          June 2020- July 2021
                        </p>
                        <h4
                          className="mb-3 font-bold text-lg md:text-2xl"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          DDC MLS
                        </h4>
                        <p
                          className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          Customer Service Representative for an energy company
                          from UK
                        </p>
                      </div>
                    </div>
                    <div className="mb-1 flex justify-between flex-row-reverse items-center w-full left-timeline">
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 2 text-right">
                        <p className="mb-3 text-base text-red-600">
                          {" "}
                          July 2021- January 2025
                        </p>
                        <h4
                          className="mb-3 font-bold text-lg md:text-2xl"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          AgentLocator, Canada
                        </h4>
                        <p
                          className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          Senior Support Representative for a SaaS Real-Estate
                          Company
                        </p>
                      </div>
                    </div>

                    <div className="mb-10 flex justify-between items-center w-full right-timeline">
                      <div className="order-1 w-5/12"></div>

                      <div className="order-1  w-5/12 px-1 py-2">
                        <p className="mb-3 text-base text-red-600">
                          January 2025 - Present
                        </p>
                        <h4
                          className="mb-3 font-bold  text-lg md:text-2xl text-left"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          Monri Payments, Member of Payten
                        </h4>
                        <p
                          className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                          style={{
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                        >
                          Technical Support Specialist in E-comm
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="mx-auto -mt-32 md:-mt-36"
                    src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center flex-col">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-3xl font-bold pt-16 mb-10"
          style={{
            color: isDarkMode ? "#fff" : "#000",
          }}
        >
          Skills & Technologies
        </motion.h3>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 justify-center mt-10 max-w-8/10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center hover:opacity-80 transition"
            >
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 bg-blend-overlay"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              />
              <p
                className="text-sm mt-1 font-medium"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
