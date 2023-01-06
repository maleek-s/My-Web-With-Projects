import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ChickenPhoto from "./assets/ChickenPhoto.jpg";
import { Button, Col, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function KokaIpo() {
  const [eggTry, setEggTry] = useState();

  const handleAnswerCheck = (e) => {
    if (eggTry.toLowerCase() === "54") {
      alert("mama");
    } else {
      alert("tata");
    }
  };

  const handleTryChange = (e) => {
    setEggTry(e.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#141A1F",
      }}
    >
      <Stack gap={2} className="col-md-5 mx-auto">
        <Card className="text-center mt-4" text="dark">
          <Card.Img variant="top" src={ChickenPhoto} />
          <Card.Body>
            <Card.Text className="mb-2">
              Koka i po za dan i po snese jaje i po. Koliko jaja snese 9 koka za
              9 dana?
            </Card.Text>
          </Card.Body>
        </Card>
        <Form className="mt-4 text-center">
          <Form.Group className="mb-3" controlId="kolikoJaja">
            <Form.Control
              className="text-center"
              placeholder="You have 0 clue"
              onChange={handleTryChange}
              autoComplete="off"
            />
            <Form.Text className="text-muted">
              I shall never share your answer with anyone else.
            </Form.Text>
          </Form.Group>
          <Col className="mb-4">
            <Button variant="secondary" onClick={handleAnswerCheck}>
              Submit and see
            </Button>
          </Col>
          <Col>
            <Link to="/">
              <Button variant="danger">Back to civilization</Button>
            </Link>
          </Col>
        </Form>
      </Stack>
    </div>
  );
}

export default KokaIpo;
