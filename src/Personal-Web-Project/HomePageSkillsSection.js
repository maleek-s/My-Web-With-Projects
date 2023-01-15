import React, { useRef } from "react";
import { Grid } from "@mui/material";
import mainHTML from "./assets/HTML.svg";
import CSSIcon from "./assets/CSSIcon.svg";
import GitIcon from "./assets/GitIcon.svg";
import JavaScriptIcon from "./assets/JavaScriptIcon.svg";
import MaterialUIIcon from "./assets/MaterialUIIcon.svg";
import ReactIcon from "./assets/ReactIcon.svg";
import MongoIcon from "./assets/MongoIcon.svg";
import BootstrapIcon from "./assets/BootstrapIcon.svg";
import NodeIcon from "./assets/NodeIcon.svg";
import FirebaseIcon from "./assets/FirebaseIcon.svg";
import ExpressIcon from "./assets/ExpressIcon.svg";
import MySqlIcon from "./assets/MySqlIcon.svg";
import { motion } from "framer-motion";
import "./HomePageSkills.css";

function SkillsSection(props) {
  const { isDarkMode, skillsRef } = props;
  const scrollRef = useRef(null);
  return (
    <>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="flex-end"
        pt={8}
        ref={skillsRef}
        style={{ height: "15vh", marginTop: "3em" }}
      >
        <h4 id={isDarkMode ? "h4White" : "h4Black"}>Skills</h4>
        <Grid item xs={9} sm={11} pl={10}>
          <div className="homePageMain-s3-line"></div>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="homePageMain-s3-text">
        <Grid item xs={10} sm={10} md={8}>
          <motion.div
            className={
              isDarkMode ? "homePageMain-s3White" : "homePageMain-s3Black"
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ root: scrollRef }}
          >
            <p>Over the last year and a</p>
            <p>half I have been</p>
            <p>
              <span>dedicated</span> on becoming
            </p>
            <p>a frontend developer</p>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} pr={5} mt={6}>
          <motion.div
            className={
              isDarkMode
                ? "homePageMain-s3-text-rightWhite"
                : "homePageMain-s3-text-rightBlack"
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <p>
              On my web development journey, I've gained experience working with
              the following technologies:
            </p>
          </motion.div>
          <motion.div
            className={
              isDarkMode
                ? "homePageMain-s3-logos-rightWhite"
                : "homePageMain-s3-logos-rightBlack"
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Grid container spacing={1}>
              <Grid className="skillsIcons" item xs={6}>
                <div>
                  <img src={mainHTML} alt="HTML Logo" />
                  HTML5
                </div>
                <div>
                  <img src={JavaScriptIcon} alt="Java Script Logo" />
                  JavaScript
                </div>
                <div>
                  <img src={CSSIcon} alt="CSS Logo" />
                  CSS3
                </div>
                <div>
                  <img src={ReactIcon} alt="React Logo" />
                  React
                </div>
                <div>
                  <img src={NodeIcon} alt="Node JS Logo" />
                  NodeJS
                </div>
                <div>
                  <img src={ExpressIcon} alt="Express Logo" />
                  Express
                </div>
              </Grid>
              <Grid className="skillsIcons" item xs={6}>
                <div>
                  <img src={MySqlIcon} alt="MySQL Logo" />
                  MySQL
                </div>
                <div>
                  <img src={MongoIcon} alt="Mongo DB Logo" />
                  Mongo DB
                </div>
                <div>
                  <img src={MaterialUIIcon} alt="Material UI Logo" />
                  Material UI
                </div>
                <div>
                  <img src={BootstrapIcon} alt="Bootstrap Logo" />
                  Bootstrap
                </div>
                <div>
                  <img src={GitIcon} alt="Git Logo" />
                  Git
                </div>
                <div>
                  <img src={FirebaseIcon} alt="Firebase Logo" />
                  Firebase
                </div>
              </Grid>
            </Grid>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
}

export default SkillsSection;
