import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Nav>
          <Link to="/" style={{ textDecoration: "none" }}>
            Back to Home Page
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
