import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainArrow from "./assets/Arrow.svg";
import ColorPalettes from "./assets/Color-Palettes.PNG";
import SynonymGame from "./assets/Synonym-Game.PNG";
import RKHadzici from "./assets/Rk Hadzici.png"
import ScandiTask from "./assets/ScandiTask.PNG";
import "./HomePageMain.css";
import "./HomePagePortofolio.css";

function PortofolioSection(props) {
  const { portofolioRef, isDarkMode } = props;
  return (
    <>
      {" "}
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignContent="center"
        ref={portofolioRef}
        style={{ height: "11vh", marginTop: "3em", marginLeft: "0" }}
        className={isDarkMode ? "portBlack portofolioMobile" : "portWhite portofolioMobile"}
         >
        <h4 id={isDarkMode ? "s4-h4Black" : "s4-h4White"}>Portofolio</h4>
      </Grid>
 

      {/* Rk Hadzici */}
      <Grid
        container
        spacing={2}
        className="homePageMain-s4-text"
        justifyContent="center"
        style={{
          backgroundColor: isDarkMode ? "#141A1F" : "#efefef", marginTop: "0"
        }}
      >
        <a
          href="http://rkhadzici.x10.mx"
          style={{
            textDecoration: "none",
            cursor: "default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="pilotProjects-mobile"
        >
          <Grid item xs={9} sm={5}> 
            <motion.div
              className={
                isDarkMode
                  ? "homePageMain-s4-text-rightWhite"
                  : "homePageMain-s4-text-rightBlack"
              }
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h3>Local handball club's website</h3>
              <p>
                I created a custom Wordpress theme for this website using HTML, CSS, JS, PHP and Wordpress plugins. This is still work in progress, to be published soon as an official website. 
              </p>
              <div style={{ display: "flex", marginTop: "2em" }}>
                <div className="homePageMain-HCJ">Wordpress</div>
                <div className="homePageMain-HCJ">PHP</div>
                <div className="homePageMain-HCJ">JS</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "2em",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "1em",
                    color: "#376DDF",
                    fontSize: "20px",
                  }}
                >
                  Take a look
                </div>
                <div>
                  <img src={MainArrow} alt="" />
                </div>
              </div>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={9}
            sm={5}
            className="portofolioMobile"
            id="portofolioMobile-2nd"
          >
            <motion.div
              className="homePageMain-s4-photo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={RKHadzici}
                style={{
                  border: "0.5px white solid",
                  borderRadius: "1%",
                  cursor: "pointer",
                }}
                alt="Handball club Preview"
              />
            </motion.div>
          </Grid>
        </a>
      </Grid>


      {/* Color Palettes Project */}
      <Grid
        container
        spacing={2}
        className="homePageMain-s4-text"
        justifyContent="center"
      >
        <Link
          to="/palette"
          style={{
            textDecoration: "none",
            cursor: "default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="pilotProjects-mobile"
        >
          <Grid item xs={9} sm={5} mt={6} className="portofolioMobile">
            <motion.div
              className="homePageMain-s4-photo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={ColorPalettes}
                style={{
                  border: "0.5px white solid",
                  borderRadius: "1%",
                  cursor: "pointer",
                }}
                alt="Color Palettes App Preview"
              />
            </motion.div>
          </Grid>
          <Grid item xs={9} sm={5} mt={6}>
            <motion.div
              className={
                isDarkMode
                  ? "homePageMain-s4-text-rightWhite"
                  : "homePageMain-s4-text-rightBlack"
              }
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h3>Color Palettes Project</h3>
              <p>
                This is a cute little project I did as a code-along. There are 9
                predesigned color palettes with a bunch of colors you can click
                on and copy the color code to your clipboard. You can choose
                HEX, RGB or RGBA color code. You can create your own color
                palettes as well. It's fun. Check it out.
              </p>
              <div style={{ display: "flex", marginTop: "2em" }}>
                <div className="homePageMain-HCJ">HTML5</div>
                <div className="homePageMain-HCJ">CSS3</div>
                <div className="homePageMain-HCJ">Java Script</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "2em",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "1em",
                    color: "#376DDF",
                    fontSize: "20px",
                  }}
                >
                  Try it out
                </div>
                <div>
                  <img src={MainArrow} alt="" />
                </div>
              </div>
            </motion.div>
          </Grid>
        </Link>
      </Grid>
      {/* Synonym Guessing Game */}
      <Grid
        container
        spacing={2}
        className="homePageMain-s4-text"
        justifyContent="center"
        style={{
          backgroundColor: isDarkMode ? "#141A1F" : "#efefef",
        }}
      >
        <Link
          to="/synonym-game"
          style={{
            textDecoration: "none",
            cursor: "default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="pilotProjects-mobile"
        >
          <Grid item xs={9} sm={5}>
            <motion.div
              className={
                isDarkMode
                  ? "homePageMain-s4-text-rightWhite"
                  : "homePageMain-s4-text-rightBlack"
              }
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h3>Synonym Guessing Game</h3>
              <p>
                This is a not so fun 1-player game where you try to guess the
                synonym of a given word. If you get it right, you get a point.
                Your all time high score is stored for you to beat. You have 30
                seconds each time. The clock is ticking. Good luck!
              </p>
              <div style={{ display: "flex", marginTop: "2em" }}>
                <div className="homePageMain-HCJ">HTML5</div>
                <div className="homePageMain-HCJ">CSS3</div>
                <div className="homePageMain-HCJ">Java Script</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "2em",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "1em",
                    color: "#376DDF",
                    fontSize: "20px",
                  }}
                >
                  Try it out
                </div>
                <div>
                  <img src={MainArrow} alt="" />
                </div>
              </div>
            </motion.div>
          </Grid>
          <Grid
            item
            xs={9}
            sm={5}
            className="portofolioMobile"
            id="portofolioMobile-2nd"
          >
            <motion.div
              className="homePageMain-s4-photo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={SynonymGame}
                style={{
                  border: "0.5px white solid",
                  borderRadius: "1%",
                  cursor: "pointer",
                }}
                alt="Color Palettes App Preview"
              />
            </motion.div>
          </Grid>
        </Link>
      </Grid>
      {/* Scandiweb-task */}
      <Grid
        container
        spacing={2}
        className="homePageMain-s4-text"
        justifyContent="center"
      >
        <a
          href="https://scandiweb.maleek.info/"
          style={{
            textDecoration: "none",
            cursor: "default",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="pilotProjects-mobile"
        >
          <Grid item xs={9} sm={5} mt={0} className="portofolioMobile">
            <motion.div
              className="homePageMain-s4-photo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={ScandiTask}
                style={{
                  border: "0.5px white solid",
                  borderRadius: "1%",
                  cursor: "pointer",
                }}
                alt="Color Palettes App Preview"
              />
            </motion.div>
          </Grid>
          <Grid item xs={10} sm={5} mt={6}>
            <motion.div
              className={
                isDarkMode
                  ? "homePageMain-s4-text-rightWhite"
                  : "homePageMain-s4-text-rightBlack"
              }
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h3>Products - CRUD</h3>
              <p>
                I have worked on this task as part of an onboarding process with
                an IT company. I used React, PHP & MySQL. I created API's using
                PHP to get, add and remove products from a MySQL database and
                used React to consume and display on the frontend.
              </p>
              <div style={{ display: "flex", marginTop: "2em" }}>
                <div className="homePageMain-HCJ">React</div>
                <div className="homePageMain-HCJ">PHP</div>
                <div className="homePageMain-HCJ">MySQL</div>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "2em",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginRight: "1em",
                    color: "#376DDF",
                    fontSize: "20px",
                  }}
                >
                  Try it out
                </div>
                <div>
                  <img src={MainArrow} alt="" />
                </div>
              </div>
            </motion.div>
          </Grid>
        </a>
      </Grid>
    </>
  );
}

export default PortofolioSection;
