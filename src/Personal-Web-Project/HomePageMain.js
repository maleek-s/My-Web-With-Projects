import React from "react";
import { Button, Grid } from "@mui/material";
import mainBgPhoto from "./assets/Maleek-Logo2.svg";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainEllipses from "./assets/MainEllipses.svg";
import mainHTML from "./assets/HTML.svg";
import "./HomePageMain.css";

function HomePageMain(props) {
  const { isDarkMode } = props;

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
            <h2>and I do it well</h2>
            <div className="homePageMain-btns">
              <Button variant="contained" size="large">
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
        <Grid item xs={4}>
          <img src={mainBgPhoto} alt="My Personal Logo" />
        </Grid>
        <Grid
          container
          spacing={2}
          display="flex"
          justifyContent="flex-end"
          mr={6}
          pt={8}
          height="1px"
        >
          <h4 id="h4">Skills</h4>
          <Grid item xs={9}>
            <div className="homePageMain-s3-line"></div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="homePageMain-s3-text">
          <Grid item xs={9} mt={6}>
            <div className="homePageMain-s3">
              <p>Over the last year and a</p>
              <p>half I have been</p>
              <p>
                <span>dedicated</span> on becoming
              </p>
              <p>a full stack developer</p>
            </div>
          </Grid>
          <Grid item xs={3} pr={5} mt={6}>
            <div className="homePageMain-s3-text-right">
              <p>
                On my web development journey, I've gained experience working
                with the following technologies:
              </p>
            </div>
            <div>
              <div>
                <img src={mainHTML} alt="HTML Logo" />
                HTML 5
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
                <img
                  src={mainHTML}
                  alt="HTML Logo"
                  className="homePageMain-s3-icons-right"
                />
                Express
              </div>
              <div>
                <img src={mainHTML} alt="HTML Logo" />
                MySQL
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
                <img
                  src={mainHTML}
                  alt="HTML Logo"
                  className="homePageMain-s3-icons-right"
                />
                Bootstrap
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePageMain;
