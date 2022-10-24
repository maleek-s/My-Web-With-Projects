import React, { Component } from "react";
import HomeBackground from "./HomeBackground";
import Navbar from "./Navbar";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <HomeBackground></HomeBackground>
      </div>
    );
  }
}

export default HomePage;
