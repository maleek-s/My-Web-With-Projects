import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import "./Synonym-Home.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// const nouns = [
//   "time",
//   "person",
//   "year",
//   "way",
//   "day",
//   "thing",
//   "man",
//   "world",
//   "life",
//   "hand",
//   "part",
//   "child",
//   "eye",
//   "woman",
//   "place",
//   "work",
//   "week",
//   "case",
//   "point",
//   "government",
//   "company",
//   "number",
//   "group",
//   "problem",
//   "fact",
//   "able",
//   "bad",
//   "best",
//   "better",
//   "big",
//   "black",
//   "certain",
//   "clear",
//   "different",
//   "early",
//   "easy",
//   "economic",
//   "federal",
//   "free",
//   "full",
//   "good",
//   "great",
//   "hard",
//   "high",
//   "human",
//   "important",
//   "international",
//   "large",
//   "late",
//   "little",
//   "local",
//   "long",
//   "low",
//   "major",
//   "military",
//   "national",
//   "new",
//   "old",
//   "only",
//   "other",
//   "political",
//   "possible",
//   "public",
//   "real",
//   "recent",
//   "right",
//   "small",
//   "social",
//   "special",
//   "strong",
//   "sure",
//   "true",
//   "white",
//   "whole",
//   "young",
// ];

const Play = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [nouns2, setNouns2] = useState([
    {
      word: "test",
      synonym1: { synonymWord: "test1", similarity: "90%" },
      synonym2: { synonym: "test2", similarity: "70%" },
    },
    {
      word: "day",
      synonym1: { synonymWord: "day1", similarity: "100%" },
      synonym2: { synonym: "day2", similarity: "80%" },
    },
    {
      word: "night",
      synonym1: { synonymWord: "night1", similarity: "100%" },
      synonym2: { synonym: "night2", similarity: "80%" },
    },
    {
      word: "mama",
      synonym1: { synonymWord: "mama1", similarity: "100%" },
      synonym2: { synonym: "mama2", similarity: "80%" },
    },
  ]);

  const [randWord, setRandWord] = useState("");
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(10);
  const [disButton, setDisButton] = useState(false);
  const [started, setStarted] = useState(false);

  const randNum = Math.floor(Math.random() * nouns2.length);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    counter === 0 ? setDisButton(false) : setDisButton(true);
  }, [counter]);

  const startGame = () => {
    const startRandWord = nouns2[randNum].word;
    setRandWord(startRandWord);
    setCounter(10);
    setDisButton(true);
    setStarted(true);
  };

  const updateNouns2 = () => {
    const result = nouns2.filter((word) => word.word !== randWord);
    console.log(result);
    if (result.length > 0) {
      return setNouns2([...result]);
    } else {
      return setNouns2([
        {
          word: "test",
          synonym1: { synonymWord: "test1", similarity: "90%" },
          synonym2: { synonym: "test2", similarity: "70%" },
        },
        {
          word: "day",
          synonym1: { synonymWord: "day1", similarity: "100%" },
          synonym2: { synonym: "day2", similarity: "80%" },
        },
        {
          word: "night",
          synonym1: { synonymWord: "night1", similarity: "100%" },
          synonym2: { synonym: "night2", similarity: "80%" },
        },
        {
          word: "mama",
          synonym1: { synonymWord: "mama1", similarity: "100%" },
          synonym2: { synonym: "mama2", similarity: "80%" },
        },
      ]);
    }
  };

  const guessInput = (value) => {
    const newValue = value;
    setInputValue(newValue);
    updateNouns2();
  };

  const updateScore = () => {
    if (inputValue === randWord) {
      return setScore((prev) => prev + 1);
    }
    return score;
  };

  const updateRandWord = () => {
    const newRandWord = nouns2[randNum].word;
    setRandWord(newRandWord);
  };

  const newArr = (e) => {
    e.preventDefault();
    updateRandWord();
    updateScore();
    setInputValue("");
  };

  return (
    <div className="App">
      {started === false ? (
        <div>
          <h3>synonym</h3>
          <h4>noun</h4>
          <p> synonym si-nə-ˌnim</p>
          <p>
            {" "}
            : one of two or more words or expressions of the same language that
            have the same or nearly the same meaning in some or all senses
          </p>
          <Button onClick={startGame} disabled={disButton}>
            Fetch me a Word
          </Button>
        </div>
      ) : (
        <PlayerCard
          nouns={nouns2}
          randWord={randWord}
          newArr={newArr}
          guessInput={guessInput}
          score={score}
          value={inputValue}
          startGame={startGame}
          counter={counter}
          disButton={disButton}
        ></PlayerCard>
      )}
    </div>
  );

  // this is going to be stateful parent component
  // API da povuče bazu i da je stora  u array
  // riječ koja se pogađa
  // riječ koju upisuje player
  // score

  // in the child Component, I need:
  // input
  // props
};

export default Play;
