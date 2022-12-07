import React, { Component } from "react";
import HomeBackground from "./HomeBackground";
import Navbar from "./Navbar";
import HomePageMain from "./HomePageMain";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

export class HomePage extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        style={{ display: "grid" }}
      >
        <Grid spacing={0} container>
          <Grid item xs={12}>
            <Navbar></Navbar>
          </Grid>
          <Grid item xs={12} mt={12}>
            <HomePageMain></HomePageMain>
          </Grid>
        </Grid>
        <HomeBackground></HomeBackground>
      </motion.div>
    );
  }
}

export default HomePage;
