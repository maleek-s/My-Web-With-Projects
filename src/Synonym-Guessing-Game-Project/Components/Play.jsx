import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import Button from "react-bootstrap/Button";
import HomePageFooter from "../../Personal-Web-Project/HomePageFooter";
import { motion } from "framer-motion";
import data from "../Assets/MyFakeDatabase.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Play.css";
import "./Synonym-Home.css";

const Play = () => {
  const [inputValue, setInputValue] = useState("");
  const [nouns, setNouns] = useState(data);

  const [randWord, setRandWord] = useState("");
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(10);
  const [disButton, setDisButton] = useState(false);
  const [started, setStarted] = useState(false);
  const [key, setKey] = useState(0);
  const [allScore, setAllScore] = useState(localStorage.allScore || 0);

  const randNum = Math.floor(Math.random() * nouns.length);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 ? setDisButton(false) : setDisButton(true);
  }, [counter]);

  useEffect(() => {
    const allTimeHigh = () => {
      window.localStorage.setItem("allScore", allScore);
    };
    allTimeHigh();
  }, [allScore]);

  const startGame = () => {
    const startRandWord = nouns[randNum];
    setRandWord(startRandWord);
    setCounter(10);
    setDisButton(true);
    setStarted(true);
  };

  const updateNouns = () => {
    const result = nouns.filter((word) => word.mainWord !== randWord.mainWord);
    if (result.length > 0) {
      return setNouns([...result]);
    } else {
      return setNouns(data);
    }
  };

  const guessInput = (value) => {
    const newValue = value;
    setInputValue(newValue);
  };

  const updateScore = () => {
    updateNouns();
    const synonyms = [
        randWord.synonymWord,
        randWord.synonymWord2,
        randWord.synonymWord3,
        randWord.synonymWord4,
        randWord.synonymWord5,
        randWord.synonymWord6,
        randWord.synonymWord7,
        randWord.synonymWord8,
        randWord.synonymWord9,
        randWord.synonymWord10,
    ];

    if (synonyms.includes(inputValue)) {
        return setScore(prev => prev + 1);
    }

    return score;
};


  const updateRandWord = () => {
    const newRandWord = nouns[randNum];
    setRandWord(newRandWord);
  };

  const newArr = (e) => {
    e.preventDefault();
    updateScore();
    updateRandWord();
    setInputValue("");
  };

  const restarTimer = () => {
    setKey((prevKey) => prevKey + 1);
    if (score > allScore) {
      setAllScore(score);
    }
    setScore(0);
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {started === false ? (
        <div className="Play-container">
          <div className="Play-text">
            <h3>
              synonym, <span>a noun</span>
            </h3>
            <p> synonym si-nə-ˌnim</p>
            <p>
              one of two or more words or expressions of the same language that
              have the same or nearly the same meaning in some or all senses
            </p>
            <div className="Play-btn">
              <Button variant="outline-success text-white" onClick={startGame}>
                Fetch Me a Word
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <PlayerCard
            nouns={nouns}
            randWord={randWord}
            newArr={newArr}
            guessInput={guessInput}
            score={score}
            value={inputValue}
            startGame={startGame}
            counter={counter}
            disButton={disButton}
            keyTimer={key}
            allScore={allScore}
            restarTimer={restarTimer}
          ></PlayerCard>
        </motion.div>
      )}
      <HomePageFooter></HomePageFooter>
    </motion.div>
  );
};

export default Play;
