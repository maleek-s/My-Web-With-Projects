import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainArrow from "./assets/Arrow.svg";
import ColorPalettes from "./assets/Color-Palettes.PNG";
import SynonymGame from "./assets/Synonym-Game.PNG";
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
        justifyContent="flex-start"
        mr={1}
        ref={portofolioRef}
        style={{ height: "2vh" }}
        className="portofolioMobile"
      >
        <Grid item xs={7} sm={10} mr={2}>
          <div className="homePageMain-s4-line"></div>
        </Grid>
        <h4 id={isDarkMode ? "s4-h4Black" : "s4-h4White"}>Portofolio</h4>
      </Grid>
      {/* Color Palettes Project */}
      <Link
        to="/palette"
        style={{ textDecoration: "none", cursor: "default" }}
        className="pilotProjects-mobile"
      >
        <Grid
          container
          spacing={2}
          className="homePageMain-s3-text"
          justifyContent="center"
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
          <Grid item xs={10} sm={5} pr={5} mt={6}>
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
        </Grid>
      </Link>
      {/* Synonym Guessing Game */}
      <Link
        to="/synonym-game"
        style={{ textDecoration: "none", cursor: "default" }}
        className="pilotProjects-mobile"
      >
        <Grid
          container
          spacing={2}
          className="homePageMain-s3-text"
          justifyContent="center"
          style={{
            backgroundColor: isDarkMode ? "#141A1F" : "#efefef",
          }}
        >
          <Grid item xs={10} sm={5}>
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
          <Grid item xs={9} sm={5} className="portofolioMobile">
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
        </Grid>
      </Link>
    </>
  );
}

export default PortofolioSection;
