import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div className="NavBar">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/">Question Mark</Link>
            <Nav className="me-auto">
              <Link to="/"> Home</Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
