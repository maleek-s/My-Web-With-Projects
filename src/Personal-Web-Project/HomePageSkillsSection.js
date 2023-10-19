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
        justifyContent="center"
        alignContent="center"
        ref={skillsRef}
        style={{ height: "11vh", marginTop: "3em" }}
        className={isDarkMode ? "skillsBlack" : "skillsWhite"}
      >
        <h4 id={isDarkMode ? "h4White" : "h4Black"}>Skills</h4>
      </Grid>
      <Grid container spacing={1} className="homePageMain-s3-text">
        <Grid item xs={11} md={11} mt={5} style={{ paddingLeft: "0px" }}>
          <motion.div
            className={
              isDarkMode
                ? "homePageMain-s3-text-rightWhite"
                : "homePageMain-s3-text-rightBlack"
            }
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          ></motion.div>
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
              <Grid id="skillsIconsLeft" item xs={5}></Grid>
              <Grid id="skillsIconsRight" item xs={5}></Grid>
            </Grid>
          </motion.div>
        </Grid>
        <Grid item xs={9} md={8} lg={5} style={{ paddingLeft: "0px" }}>
          <div class="single-card">
            <h4>Work experience</h4>
            <p>
              <ul>
                <li>
                  Two and a half years of support experience in a SaaS IT
                  company that offers custom websites, CRM system and Google
                  PPC/FB ads
                </li>
                <li>
                  Two years of informal experience working with React,
                  Wordpress, HTML, CSS, JavaScript, MySQL, NodeJs etc.
                </li>
                <li>
                  Three and a half years of experience working as a support
                  specialist in IT
                </li>
                <li>
                  Six years of experience working as an executive secretary of
                  an organization
                </li>
              </ul>
            </p>
          </div>
        </Grid>
        <Grid item xs={9} md={8} lg={5} style={{ paddingLeft: "0px" }}>
          <div class="single-card">
            <h4>Technologies I worked with</h4>

            <div>
              HTML{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={mainHTML}
                alt="HTML Logo"
              />
            </div>
            <div>
              JavaScript{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={JavaScriptIcon}
                alt="Java Script Logo"
              />
            </div>
            <div>
              CSS{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={CSSIcon}
                alt="CSS Logo"
              />
            </div>

            <div>
              React{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={ReactIcon}
                alt="React Logo"
              />
            </div>

            <div>
              NodeJS{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={NodeIcon}
                alt="Node JS Logo"
              />
            </div>

            <div>
              Express{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={ExpressIcon}
                alt="Express Logo"
              />
            </div>

            <div>
              MySQL{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={MySqlIcon}
                alt="MySQL Logo"
              />
            </div>
            <div>
              Mongo DB{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={MongoIcon}
                alt="Mongo DB Logo"
              />
            </div>
            <div>
              Material UI{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={MaterialUIIcon}
                alt="Material UI Logo"
              />
            </div>
            <div>
              Bootstrap{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={BootstrapIcon}
                alt="Bootstrap Logo"
              />
            </div>
            <div>
              Git{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={GitIcon}
                alt="Git Logo"
              />
            </div>
            <div>
              Firebase{" "}
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={FirebaseIcon}
                alt="Firebase Logo"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default SkillsSection;
