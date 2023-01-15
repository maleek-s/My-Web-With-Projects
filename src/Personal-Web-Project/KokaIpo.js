import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ChickenPhoto from "./assets/ChickenPhoto.jpg";
import Confetti from "react-confetti";
import { Button, Col, Form, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function KokaIpo() {
  const [eggTry, setEggTry] = useState();
  const [opacity, setOpacity] = useState(0);
  const [disabledState, setDisabledState] = useState("false");

  const handleAnswerCheck = (e) => {
    e.preventDefault();
    if (eggTry.toLowerCase() === "54") {
      alert("Look at you!");
      setOpacity(1);
      setEggTry("");
      setDisabledState("true");
    } else {
      alert("Wrong!");
      setEggTry("");
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
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        opacity={opacity}
      />
      <Stack gap={2} className="col-md-5 mx-auto">
        <Card className="text-center mt-4" text="dark">
          <Card.Img variant="top" src={ChickenPhoto} />
          <Card.Body>
            <Card.Text className="mb-2">
              <p>Koka i po za dan i po snese jaje i po.</p>
              <p>Koliko jaja snese 9 koka za 9 dana?</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Form onSubmit={handleAnswerCheck} className="mt-4 text-center">
          <Form.Group className="mb-3" controlId="kolikoJaja">
            <Form.Control
              className="text-center"
              placeholder="You have 0 clue"
              onChange={handleTryChange}
              value={eggTry}
              autoComplete="off"
            />
            <Form.Text className="text-muted">
              I shall never share your answer with anyone else.
            </Form.Text>
          </Form.Group>
          <Col className="mb-4">
            {disabledState ? (
              <Button variant="secondary" type="submit">
                Submit and see
              </Button>
            ) : (
              <Button variant="secondary" type="submit" disabled>
                Submit and pee
              </Button>
            )}
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
