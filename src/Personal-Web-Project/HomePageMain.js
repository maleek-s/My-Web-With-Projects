import React, { useRef, useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import mainBgPhoto from "./assets/Maleek-Logo2.svg";
import mainBgPhotoDark from "./assets/Maleek-Logo2Dark.svg";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainEllipses from "./assets/MainEllipses.svg";
import mainHTML from "./assets/HTML.svg";
import mainLinkedInDark from "./assets/LinkedInDark.svg";
import mainGitHubDark from "./assets/GitHubDark.svg";
import MainArrow from "./assets/Arrow.svg";
import ColorPalettes from "./assets/Color-Palettes.PNG";
import { motion } from "framer-motion";
import "./HomePagePortofolio.css";
import "./HomePageMain.css";
import { Link } from "react-router-dom";

function HomePageMain(props) {
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    setFormValues(initialValues);
  };

  const { isDarkMode, id } = props;

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const portofolioRef = useRef(null);
  const contactRef = useRef(null);

  const homeScroll = () => homeRef.current.scrollIntoView();
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
    } else if (id === "home") {
      homeScroll();
    }
  }, [id]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

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
            ref={homeRef}
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
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1cZJmLQ3a_dgXZk6NN2w-jRXffMoO6zcV/view?usp=sharing"
                  )
                }
              >
                Download CV
              </Button>
            </div>
            <div className="homePageMain-logos">
              <Link
                onClick={() =>
                  openInNewTab(
                    "https://ba.linkedin.com/in/malik-spahi%C4%87-175675201"
                  )
                }
              >
                <motion.img
                  src={isDarkMode ? mainLinkedInDark : mainLinkedIn}
                  whileHover={{ scale: 1.1 }}
                  alt="My LinkedIn Profile Link"
                />
              </Link>
              <Link onClick={() => openInNewTab("https://github.com/maleek-s")}>
                <motion.img
                  src={isDarkMode ? mainGitHubDark : mainGitHub}
                  whileHover={{ scale: 1.1 }}
                  alt="My GitHub Profile Link"
                  style={{ marginLeft: "2em" }}
                />
              </Link>
            </div>
            <div>
              <img src={mainEllipses} alt="Main page decoration ellipses" />
            </div>
          </div>
        </Grid>
        <Grid item xs={4} className="homePageMain-mainLogo">
          <img
            src={isDarkMode ? mainBgPhotoDark : mainBgPhoto}
            alt="My Personal Logo"
          />
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
              <p>a frontend developer</p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                sed adipisci ullam veritatis earum accusantium quos. Cumque odit
                dolores culpa inventore asperiores, commodi ut aliquam, nobis
                quidem laboriosam debitis omnis. Maxime molestias rerum ipsam
                quo, nostrum corrupti explicabo fuga velit vero quidem
                reprehenderit dolorem eum illum, aliquam porro atque architecto!
                Deserunt beatae repellendus veniam sint quod cumque illo
                necessitatibus nihil.
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

        <Grid container spacing={2} display="flex" justifyContent="center">
          <Grid item xs={5}>
            <Grid item xs={12} display="flex" justifyContent="center">
              <div
                className={
                  isDarkMode ? "homePageMain-s5White" : "homePageMain-s5Black"
                }
              >
                <h4>Don't be a stranger. Get in touch.</h4>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              pr={1}
              pt={3}
              display="flex"
              justifyContent="center"
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                }}
              >
                <Grid item xs={10} style={{ marginLeft: "auto" }}>
                  <TextField
                    id={isDarkMode ? "fullName" : "fullNameW"}
                    name="fullName"
                    label="Full Name"
                    focused
                    required
                    color="secondary"
                    type="text"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                    style={{
                      width: "80%",
                    }}
                  />
                </Grid>

                <Grid item xs={10} mt={4} style={{ marginLeft: "auto" }}>
                  <TextField
                    id={isDarkMode ? "email" : "emailW"}
                    name="email"
                    label="Email"
                    focused
                    required
                    color="secondary"
                    type="text"
                    value={formValues.email}
                    onChange={handleInputChange}
                    style={{ width: "80%" }}
                  />
                </Grid>

                <Grid
                  item
                  xs={10}
                  mt={3}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <TextField
                    id={isDarkMode ? "message" : "messageW"}
                    name="message"
                    label="Your Message"
                    required
                    focused
                    color="secondary"
                    type="text"
                    multiline
                    rows={6}
                    value={formValues.message}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  mt={3}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    style={{
                      margin: "5px",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePageMain;
