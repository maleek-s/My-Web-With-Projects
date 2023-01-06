import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { motion } from "framer-motion";
import "./PlayerCard.css";

function PlayerCard(props) {
  const [key, setKey] = useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);

  const breakpoint = 800;

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }

    return (
      <div className="timer">
        <Grid xs={12}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 1 }}
            className="randWord"
          >
            <p>{props.randWord}</p>
          </motion.div>
        </Grid>
        <Grid xs={12}>
          <div className="guessForm">
            <Box component="form" onSubmit={props.newArr}>
              <TextField
                fullWidth
                focused
                color="primary"
                variant="outlined"
                onChange={(e) => props.guessInput(e.target.value)}
                label="Guess Input"
                value={props.value}
                id="fullWidth"
                disabled={false}
                autoComplete="off"
              ></TextField>
              <Grid>
                <Button disabled={false} variant="danger" type="submit">
                  Feeling Lucky Punk?
                </Button>
              </Grid>
            </Box>
          </div>
        </Grid>
      </div>
    );
  };

  return (
    <div className="PlayerCard">
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          xs={10}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="result">
            <span>Correct Answers: </span>
            <p>{props.score}</p>
          </div>
        </Grid>
        <Grid xs={10} sm={8}>
          <div className="Counter">
            <div className="timer-wrapper">
              <CountdownCircleTimer
                key={key}
                isPlaying
                duration={30}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => [true, 1000]}
                size={width >= breakpoint ? 500 : 350}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
          </div>
        </Grid>
        <Grid
          xs={10}
          sm={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="result">
            <span>All Time High: </span>
            <p>{props.score}</p>
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
