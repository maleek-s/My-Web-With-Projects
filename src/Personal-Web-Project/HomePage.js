import React, { Component } from "react";
import HomeBackground from "./HomeBackground";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export class HomePage extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <Navbar></Navbar>
        <HomeBackground></HomeBackground>
      </motion.div>
    );
  }
}

export default HomePage;
