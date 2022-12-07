import React from "react";
import { Button, Grid } from "@mui/material";
import mainBgPhoto from "./assets/Maleek-Logo2.svg";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainEllipses from "./assets/MainEllipses.svg";
import mainHTML from "./assets/HTML.svg";
import "./HomePageMain.css";

function HomePageMain() {
  return (
    <div>
      <Grid container spacing={2} className="homePageMain">
        <Grid item xs={8}>
          <div className="homePageMain-h2">
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
          height="1px"
        >
          <h4 id="h4">Skills</h4>
          <Grid item xs={9}>
            <div className="homePageMain-s3-line"></div>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="homePageMain-s3-text">
          <Grid item xs={8}>
            <div className="homePageMain-s3">
              <p>Over the last year and a</p>
              <p>half I have been</p>
              <p>
                <span>dedicated</span> on becoming
              </p>
              <p>a full stack developer</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="homePageMain-s3-text-right">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                consequatur soluta, reiciendis tempora eum animi optio odit. Rem
                eaque, voluptatibus aliquid error, veniam eos omnis, itaque
                recusandae in ipsa eligendi. Ducimus dolorem magnam natus quae
                recusandae tenetur soluta unde facere odit quisquam cupiditate a
                error, sapiente facilis incidunt ex deserunt culpa id
                consequuntur temporibus impedit commodi dignissimos, laudantium
                enim.
              </p>
            </div>
            <div>
              <img src={mainHTML} alt="HTML Logo" />
              <img src={mainHTML} alt="HTML Logo" />
              <img src={mainHTML} alt="HTML Logo" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePageMain;
