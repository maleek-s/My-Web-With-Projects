import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MainArrow from "./assets/Arrow.svg";
import ColorPalettes from "./assets/Color-Palettes.PNG";
import "./HomePageMain.css";

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
        height="1px"
        ref={portofolioRef}
      >
        <Grid item xs={10} mr={2}>
          <div className="homePageMain-s4-line"></div>
        </Grid>
        <h4 id={isDarkMode ? "s4-h4Black" : "s4-h4White"}>Portofolio</h4>
      </Grid>
      {/* Color Palettes Project */}
      <Grid
        container
        spacing={2}
        className="homePageMain-s3-text"
        justifyContent="center"
      >
        <Grid item xs={5} mt={6}>
          <div className="homePageMain-s4-photo">
            <Link to="/palette">
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={ColorPalettes}
                style={{ border: "0.5px white solid", borderRadius: "1%" }}
                alt="Color Palettes App Preview"
              />
            </Link>
          </div>
        </Grid>
        <Grid item xs={5} pr={5} mt={6}>
          <div
            className={
              isDarkMode
                ? "homePageMain-s4-text-rightWhite"
                : "homePageMain-s4-text-rightBlack"
            }
          >
            <h3>Color Palettes Project</h3>
            <p>
              This is a cute little project I did as a code-along. There are 9
              predesigned color palettes with a bunch of colors you can click on
              and copy the color code to your clipboard. You can choose HEX, RGB
              or RGBA color code. You can create your own color palettes as
              well. It's fun. Check it out.
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
          </div>
        </Grid>
      </Grid>
      {/* Synonym Guessing Game */}
      <Grid
        container
        spacing={2}
        className="homePageMain-s3-text"
        justifyContent="center"
      >
        <Grid item xs={5}>
          <div
            className={
              isDarkMode
                ? "homePageMain-s4-text-rightWhite"
                : "homePageMain-s4-text-rightBlack"
            }
          >
            <h3>Synonym Guessing Game</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed
              adipisci ullam veritatis earum accusantium quos. Cumque odit
              dolores culpa inventore asperiores, commodi ut aliquam, nobis
              quidem laboriosam debitis omnis. Maxime molestias rerum ipsam quo,
              nostrum corrupti explicabo fuga velit vero quidem reprehenderit
              dolorem eum illum, aliquam porro atque architecto! Deserunt beatae
              repellendus veniam sint quod cumque illo necessitatibus nihil.
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
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="homePageMain-s4-photo">
            <Link to="/synonym-game">
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={ColorPalettes}
                style={{ border: "0.5px white solid", borderRadius: "1%" }}
                alt="Color Palettes App Preview"
              />
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default PortofolioSection;
