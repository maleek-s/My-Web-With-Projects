import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "react-bootstrap/Button";
import "./PlayerCard.css";

function PlayerCard(props) {
  // const getData = () => {
  //     Axios.get("http://localhost:3001/getSynonym").then((response) => {
  //         setListOfWords(response.data)
  //         let resultRandom = response.data[`${randNum}`];
  //         setListOfEveneventWords(resultRandom)
  //     });
  // };

  useEffect(() => {
    ValidatorForm.addValidationRule("guessInput", (value) => {
      return value.length > 1;
    });
  });

  return (
    <div className="PlayerCard">
      <Grid container spacing={1}>
        <Grid xs={12}>
          <Button onClick={props.startGame} disabled={props.disButton}>
            Fetch me a Word
          </Button>
        </Grid>
        <Grid xs={12}>
          <div className="counter">Time left</div>
          <div className="counter">{props.counter}</div>
        </Grid>
        <Grid xs={12}>
          <div className="randWord">
            <p>{props.randWord}</p>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="guessForm">
            <ValidatorForm onSubmit={props.newArr}>
              <TextValidator
                fullWidth
                color="secondary"
                onChange={(e) => props.guessInput(e.target.value)}
                label="Guess Input"
                value={props.value}
                variant="standard"
                id="standard-password-input fullWidth"
                validators={["required", "guessInput"]}
                errorMessages={["Take a Shot", "Type in something real..."]}
                disabled={!props.disButton}
              ></TextValidator>
              <Grid>
                <Button
                  disabled={!props.disButton}
                  variant="secondary"
                  type="submit"
                >
                  Feeling Lucky Punk?
                </Button>
              </Grid>
            </ValidatorForm>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="result">
            <span>Correct Answers:</span>
            <p>{props.score}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlayerCard;
