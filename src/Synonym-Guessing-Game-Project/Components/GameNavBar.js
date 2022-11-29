import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div className="NavBar">
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Row>
            <Col>
              <Nav>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Back to Home Page
                </Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
