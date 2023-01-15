import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#141A1F",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h2 style={{ marginRight: "0.2em" }}>Whoops...</h2>
          <h2>Nothing to see here.</h2>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2em",
          }}
        >
          <Link to="/">
            <Button variant="danger">Back to the Home Page</Button>
          </Link>
        </Col>
      </Col>
    </div>
  );
}

export default Page404;
