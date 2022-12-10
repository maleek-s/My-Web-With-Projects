import React, { useRef, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import mainBgPhoto from "./assets/Maleek-Logo2.svg";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainEllipses from "./assets/MainEllipses.svg";
import mainHTML from "./assets/HTML.svg";
import ColorPalettes from "./assets/Color-Palettes.PNG";
import { motion } from "framer-motion";
import "./HomePagePortofolio.css";
import "./HomePageMain.css";

function HomePageMain(props) {
  const { isDarkMode, id } = props;

  const skillsRef = useRef(null);
  const portofolioRef = useRef(null);
  const contactRef = useRef(null);

  const skillsScroll = () => skillsRef.current.scrollIntoView();
  const portofolioScroll = () => portofolioRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();

  useEffect(() => {
    if (id === "skills") {
      skillsScroll();
    } else if (id === "portofolio") {
      portofolioScroll();
    } else if (id === "contact") {
      contactScroll();
    }
  }, [id]);

  return (
    <div>
      <Grid
        container
        spacing={2}
        className={isDarkMode ? "homePageMainWhite" : "homePageMainBlack"}
      >
        <Grid item xs={8}>
          <div
            className={
              isDarkMode ? "homePageMain-h2-white" : "homePageMain-h2-black"
            }
          >
            <h2>I develop,</h2>
            <h2>and I do it (fairly) well.</h2>

            <div className="homePageMain-btns">
              <Button variant="contained" size="large" onClick={contactScroll}>
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ marginLeft: "1.5em" }}
              >
                Download CV
              </Button>
            </div>
            <div className="homePageMain-logos">
              <img src={mainLinkedIn} alt="My LinkedIn Profile Link" />
              <img
                src={mainGitHub}
                alt="My GitHub Profile Link"
                style={{ marginLeft: "2em" }}
              />
            </div>
            <div>
              <img src={mainEllipses} alt="Main page decoration ellipses" />
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="homePageMain-mainLogo">
          <img src={mainBgPhoto} alt="My Personal Logo" />
        </Grid>

        {/* Skills Section */}

        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="flex-end"
          mr={1}
          pt={8}
          height="1px"
          ref={skillsRef}
        >
          <h4 id={isDarkMode ? "h4White" : "h4Black"}>Skills</h4>
          <Grid item xs={10} pl={10}>
            <div className="homePageMain-s3-line"></div>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="homePageMain-s3-text">
          <Grid item xs={8} mt={10}>
            <div
              className={
                isDarkMode ? "homePageMain-s3White" : "homePageMain-s3Black"
              }
            >
              <p>Over the last year and a</p>
              <p>half I have been</p>
              <p>
                <span>dedicated</span> on becoming
              </p>
              <p>a full stack developer</p>
            </div>
          </Grid>
          <Grid item xs={4} pr={5} mt={6}>
            <div
              className={
                isDarkMode
                  ? "homePageMain-s3-text-rightWhite"
                  : "homePageMain-s3-text-rightBlack"
              }
            >
              <p>
                On my web development journey, I've gained experience working
                with the following technologies:
              </p>
            </div>
            <div
              className={
                isDarkMode
                  ? "homePageMain-s3-logos-rightWhite"
                  : "homePageMain-s3-logos-rightBlack"
              }
            >
              <Grid container spacing={1}>
                <Grid item xs={6} style={{ display: "grid" }}>
                  <div>
                    <img src={mainHTML} alt="HTML Logo" />
                    HTML5
                  </div>
                  <div>
                    <img
                      src={mainHTML}
                      alt="HTML Logo"
                      className="homePageMain-s3-icons-right"
                    />
                    JavaScript
                  </div>
                  <div>
                    <img src={mainHTML} alt="HTML Logo" />
                    CSS3
                  </div>
                  <div>
                    <img
                      src={mainHTML}
                      alt="HTML Logo"
                      className="homePageMain-s3-icons-right"
                    />
                    React
                  </div>
                  <div>
                    <img src={mainHTML} alt="HTML Logo" />
                    NodeJS
                  </div>
                  <div>
                    <img
                      src={mainHTML}
                      alt="HTML Logo"
                      className="homePageMain-s3-icons-right"
                    />
                    Express
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div>
                    <img src={mainHTML} alt="HTML Logo" />
                    MySQL
                  </div>
                  <div>
                    <img
                      src={mainHTML}
                      alt="HTML Logo"
                      className="homePageMain-s3-icons-right"
                    />
                    Mongo DB
                  </div>
                  <div>
                    <img src={mainHTML} alt="HTML Logo" />
                    Material UI
                  </div>
                  <div>
                    <img
                      src={mainHTML}
                      alt="HTML Logo"
                      className="homePageMain-s3-icons-right"
                    />
                    Bootstrap
                  </div>
                  <div>
                    <img src={mainHTML} alt="HTML Logo" />
                    Material UI
                  </div>
                  <div>
                    <img
                      src={mainHTML}
                      alt="HTML Logo"
                      className="homePageMain-s3-icons-right"
                    />
                    Bootstrap
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        {/* Portofolio Section */}

        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="flex-start"
          mr={1}
          pt={8}
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
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={ColorPalettes}
                alt="Color Palettes App Preview"
              />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sed adipisci ullam veritatis earum accusantium quos. Cumque odit
                dolores culpa inventore asperiores, commodi ut aliquam, nobis
                quidem laboriosam debitis omnis. Maxime molestias rerum ipsam
                quo, nostrum corrupti explicabo fuga velit vero quidem
                reprehenderit dolorem eum illum, aliquam porro atque architecto!
                Deserunt beatae repellendus veniam sint quod cumque illo
                necessitatibus nihil.
              </p>
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
          <Grid item xs={5} mt={2}>
            <div
              className={
                isDarkMode
                  ? "homePageMain-s4-text-rightWhite"
                  : "homePageMain-s4-text-rightBlack"
              }
            >
              <h3>Synonym Guessing Game</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sed adipisci ullam veritatis earum accusantium quos. Cumque odit
                dolores culpa inventore asperiores, commodi ut aliquam, nobis
                quidem laboriosam debitis omnis. Maxime molestias rerum ipsam
                quo, nostrum corrupti explicabo fuga velit vero quidem
                reprehenderit dolorem eum illum, aliquam porro atque architecto!
                Deserunt beatae repellendus veniam sint quod cumque illo
                necessitatibus nihil.
              </p>
            </div>
          </Grid>
          <Grid item xs={5} mt={2}>
            <div className="homePageMain-s4-photo">
              <motion.img
                whileHover={{ scale: 1.05 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                src={ColorPalettes}
                alt="Color Palettes App Preview"
              />
            </div>
          </Grid>
        </Grid>

        {/* Get in Touch Section */}

        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="flex-end"
          mr={1}
          ref={contactRef}
        >
          <h4 id={isDarkMode ? "h4White" : "h4Black"}>Get in touch</h4>
          <Grid item xs={10} pl={10}>
            <div className="homePageMain-s3-line"></div>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4} display="flex" justifyContent="center">
            <div
              className={
                isDarkMode ? "homePageMain-s5White" : "homePageMain-s5Black"
              }
            >
              <h4>Contact Info</h4>
              <p></p>
              <p></p>
            </div>
          </Grid>
          <Grid
            item
            xs={8}
            pr={1}
            mt={6}
            display="flex"
            justifyContent="center"
          >
            <div
              className={
                isDarkMode
                  ? "homePageMain-s3-text-rightWhite"
                  : "homePageMain-s3-text-rightBlack"
              }
            >
              <p>Contact Form</p>
            </div>
            <div
              className={
                isDarkMode
                  ? "homePageMain-s3-logos-rightWhite"
                  : "homePageMain-s3-logos-rightBlack"
              }
            ></div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePageMain;
