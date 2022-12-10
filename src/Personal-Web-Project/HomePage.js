import React, { useState } from "react";
// import HomeBackground from "./HomeBackground";
import Navbar from "./Navbar";
import HomePageMain from "./HomePageMain";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [id, setId] = useState("");

  const handleScroll = (evt) => {
    setId(evt);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      style={{ display: "grid" }}
    >
      <Grid
        spacing={0}
        container
        style={
          isDarkMode
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        <Grid item xs={12}>
          <Navbar
            handleDarkMode={handleDarkMode}
            isDarkMode={isDarkMode}
            handleScroll={handleScroll}
          ></Navbar>
        </Grid>
        <Grid item xs={12} mt={12}>
          <HomePageMain id={id} isDarkMode={isDarkMode}></HomePageMain>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default HomePage;
