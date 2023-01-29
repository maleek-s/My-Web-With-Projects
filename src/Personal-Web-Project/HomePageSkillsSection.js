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
        <Grid item xs={9} sm={10}>
          <div className="homePageMain-s3-line"></div>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="homePageMain-s3-text">
        <Grid item xs={12} md={9}>
          <motion.div
            className={
              isDarkMode ? "homePageMain-s3White" : "homePageMain-s3Black"
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ root: scrollRef }}
          >
            <p>
              Over the last year and a half I have been
              <span> dedicated</span> on becoming a frontend developer.
            </p>
          </motion.div>
        </Grid>
        <Grid item xs={12} md={9} mt={6}>
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
            <Grid
              container
              spacing={1}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid id="skillsIconsLeft" item xs={5}>
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={mainHTML}
                    alt="HTML Logo"
                  />
                  HTML5
                </div>
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={JavaScriptIcon}
                    alt="Java Script Logo"
                  />
                  JavaScript
                </div>
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={CSSIcon}
                    alt="CSS Logo"
                  />
                  CSS3
                </div>
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={ReactIcon}
                    alt="React Logo"
                  />
                  React
                </div>
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={NodeIcon}
                    alt="Node JS Logo"
                  />
                  NodeJS
                </div>
                <div>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={ExpressIcon}
                    alt="Express Logo"
                  />
                  Express
                </div>
              </Grid>
              <Grid id="skillsIconsRight" item xs={5}>
                <div>
                  MySQL
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={MySqlIcon}
                    alt="MySQL Logo"
                  />
                </div>
                <div>
                  Mongo DB
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={MongoIcon}
                    alt="Mongo DB Logo"
                  />
                </div>
                <div>
                  Material UI
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={MaterialUIIcon}
                    alt="Material UI Logo"
                  />
                </div>
                <div>
                  Bootstrap
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={BootstrapIcon}
                    alt="Bootstrap Logo"
                  />
                </div>
                <div>
                  Git
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={GitIcon}
                    alt="Git Logo"
                  />
                </div>
                <div>
                  Firebase
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={FirebaseIcon}
                    alt="Firebase Logo"
                  />
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
