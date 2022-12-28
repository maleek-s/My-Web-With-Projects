import React, { useRef, useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import mainBgPhoto from "./assets/Maleek-Logo2.svg";
import mainBgPhotoDark from "./assets/Maleek-Logo2Dark.svg";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainEllipses from "./assets/MainEllipses.svg";
import SkillsSection from "./SkillsSection";
import PortofolioSection from "./PortofolioSection";
import GetInTouch from "./GetInTouch";
import mainLinkedInDark from "./assets/LinkedInDark.svg";
import mainGitHubDark from "./assets/GitHubDark.svg";
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
    <>
      <Grid
        container
        spacing={2}
        className={isDarkMode ? "homePageMainWhite" : "homePageMainBlack"}
      >
        <Grid item xs={10} sm={8}>
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
            <div className="ellipsesMain">
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

        <SkillsSection
          skillsRef={skillsRef}
          isDarkMode={isDarkMode}
        ></SkillsSection>

        {/* Portofolio Section */}

        <PortofolioSection
          portofolioRef={portofolioRef}
          isDarkMode={isDarkMode}
        ></PortofolioSection>

        {/* Get in Touch Section */}

        <GetInTouch
          contactRef={contactRef}
          isDarkMode={isDarkMode}
          formValues={formValues}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        ></GetInTouch>
      </Grid>
    </>
  );
}

export default HomePageMain;
