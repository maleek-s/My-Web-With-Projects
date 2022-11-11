import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PlayerCard(props) {
  // const getData = () => {
  //     Axios.get("http://localhost:3001/getSynonym").then((response) => {
  //         setListOfWords(response.data)
  //         let resultRandom = response.data[`${randNum}`];
  //         setListOfEveneventWords(resultRandom)
  //     });
  // };

  return (
    <div>
      <p>{props.nouns}</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            as="textarea"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => props.guessInput(e.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted></Form.Text>
          <Button>JAJA</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PlayerCard;
