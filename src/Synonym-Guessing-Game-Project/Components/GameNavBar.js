import React from "react";
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
            <Navbar.Brand href="/">Back</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
