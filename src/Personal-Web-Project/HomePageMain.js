import React, { useRef, useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import mainBgPhoto from "./assets/Maleek-Logo-3.png";
import mainBgPhotoDark from "./assets/Maleek-Logo-Dark-3.png";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainLinkedInDark from "./assets/LinkedInDark.svg";
import mainGitHubDark from "./assets/GitHubDark.svg";
import mainEllipses from "./assets/MainEllipses.svg";
import SkillsSection from "./HomePageSkillsSection";
import PortofolioSection from "./HomePagePortofolioSection";
import GetInTouch from "./HomePageGetInTouch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./HomePagePortofolio.css";
import "./HomePageMain.css";

function HomePageMain(props) {
  const initialValues = {
    from_name: "",
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

  const handleSubmit = () => {
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
        mt={8}
        ml={0}
        className={isDarkMode ? "homePageMainWhite" : "homePageMainBlack"}
        ref={homeRef}
      >
        <Grid item xs={12} sm={12} md={8} style={{paddingTop: "0", paddingLeft: "0"}}>
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
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1BUvpC60zVSzkZhacdQLODNPNhueWXhzg/view?usp=sharing"
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
        <Grid item xs={0} sm={0} md={4} className="homePageMain-mainLogo" style={{paddingTop: "0", paddingLeft: "0"}}>
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
