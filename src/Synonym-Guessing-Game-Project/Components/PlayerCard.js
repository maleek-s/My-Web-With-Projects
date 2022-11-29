import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { ValidatorForm } from "react-material-ui-form-validator";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./PlayerCard.css";

function PlayerCard(props) {
  const [key, setKey] = useState(0);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    return (
      <div className="timer">
        <Grid xs={12}>
          <div className="randWord">
            <p>{props.randWord}</p>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="guessForm">
            <ValidatorForm onSubmit={props.newArr}>
              <TextField
                fullWidth
                color="secondary"
                onChange={(e) => props.guessInput(e.target.value)}
                label="Guess Input"
                value={props.value}
                variant="standard"
                id="standard-password-input fullWidth"
                disabled={false}
              ></TextField>
              <Grid>
                <Button disabled={false} variant="secondary" type="submit">
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
      </div>
    );
  };

  return (
    <div className="PlayerCard">
      <Grid container spacing={1}>
        <Grid xs={12}>
          <div className="Counter">
            <div className="timer-wrapper">
              <CountdownCircleTimer
                key={key}
                isPlaying
                duration={600}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => [true, 1000]}
                size={500}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="button-wrapper">
        <Button onClick={() => setKey((prevKey) => prevKey + 1)}>
          Restart Timer
        </Button>
      </div>
    </div>
  );
}

export default PlayerCard;

// const getData = () => {
//     Axios.get("http://localhost:3001/getSynonym").then((response) => {
//         setListOfWords(response.data)
//         let resultRandom = response.data[`${randNum}`];
//         setListOfEveneventWords(resultRandom)
//     });
// };
