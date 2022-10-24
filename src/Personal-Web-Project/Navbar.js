import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Link className="navbar-links" to="/">
        Home Page
      </Link>
      <Link className="navbar-links" to="/palette">
        Color Palettes
      </Link>
    </div>
  );
}

export default Navbar;
