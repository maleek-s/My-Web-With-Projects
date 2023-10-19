import React, { useState, useEffect } from "react";
// import HomeBackground from "./HomeBackground";
import Navbar from "./HomePageNavbar";
import HomePageMain from "./HomePageMain";
import HomePageFooter from "./HomePageFooter";
import "./HomePageMain.css";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

function HomePage() {
  const isDarkModeState = JSON.parse(window.localStorage.getItem("isDarkMode"));

  const [isDarkMode, setIsDarkMode] = useState(
    isDarkModeState === null ? "true" : isDarkModeState
  );
  const [id, setId] = useState("");

  const handleScroll = (evt) => {
    setId(evt);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const syncLocalStorageMode = () => {
      window.localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    };
    syncLocalStorageMode();
  }, [isDarkMode]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      style={{ display: "grid" }}
      className={isDarkMode ? "mobileMainWhite" : "mobileMainBlack"}
    >
      <Grid
        spacing={0}
        container
        style={
          isDarkMode
            ? { backgroundColor: "#141A1F" }
            : { backgroundColor: "#efefef" }
        }
      >
        <Navbar
          handleDarkMode={handleDarkMode}
          isDarkMode={isDarkMode}
          handleScroll={handleScroll}
        ></Navbar>
        <HomePageMain id={id} isDarkMode={isDarkMode}></HomePageMain>
        <HomePageFooter></HomePageFooter>
      </Grid>
    </motion.div>
  );
}

export default HomePage;
