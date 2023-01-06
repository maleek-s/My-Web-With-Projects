import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import "./Synonym-Home.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Play.css";
import { motion } from "framer-motion";

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
      mainWord: "hot",
      synonymWord: "blazing",
      synonymWord2: "boiling",
      synonymWord3: "heated",
      synonymWord4: "humid",
    },
    {
      mainWord: "cold",
      synonymWord: "bitter",
      synonymWord2: "bleak",
      synonymWord3: "brisk",
      synonymWord4: "chilled",
    },
    {
      mainWord: "man",
      synonymWord: "brother",
      synonymWord2: "chap",
      synonymWord3: "father",
      synonymWord4: "fellow",
    },
    {
      mainWord: "woman",
      synonymWord: "daughter",
      synonymWord2: "girl",
      synonymWord3: "mother",
      synonymWord4: "wife",
    },
    {
      mainWord: "adorable",
      synonymWord: "captivating",
      synonymWord2: "charming",
      synonymWord3: "cute",
      synonymWord4: "delightful",
    },
    {
      mainWord: "adventurous",
      synonymWord: "adventuresome",
      synonymWord2: "audacious",
      synonymWord3: "bold",
      synonymWord4: "courageous",
    },
    {
      mainWord: "brave",
      synonymWord: "adventurous",
      synonymWord2: "audacious",
      synonymWord3: "confident",
      synonymWord4: "courageous",
    },
    {
      mainWord: "confused",
      synonymWord: "baffled",
      synonymWord2: "befuddled",
      synonymWord3: "bewildered",
      synonymWord4: "dazed",
    },
    {
      mainWord: "cooperative",
      synonymWord: "collegial",
      synonymWord2: "concerted",
      synonymWord3: "coordinated",
      synonymWord4: "harmonious",
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
    const startRandWord = nouns2[randNum];
    setRandWord(startRandWord.mainWord);
    setCounter(10);
    setDisButton(true);
    setStarted(true);
  };

  const updateNouns2 = () => {
    const result = nouns2.filter((word) => word.mainWord !== randWord.mainWord);
    if (result.length > 0) {
      return setNouns2([...result]);
    } else {
      return setNouns2([
        {
          word: "test",
          synonym1: { synonymWord: "test1", similarity: "90%" },
          synonym2: { synonym: "test2", similarity: "70%" },
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
    if (inputValue === randWord.synonymWord) {
      return setScore((prev) => prev + 1);
    } else if (inputValue === randWord.synonymWord2) {
      return setScore((prev) => prev + 1);
    } else if (inputValue === randWord.synonymWord3) {
      return setScore((prev) => prev + 1);
    } else if (inputValue === randWord.synonymWord4) {
      return setScore((prev) => prev + 1);
    }
    return score;
  };

  const updateRandWord = () => {
    const newRandWord = nouns2[randNum].mainWord;
    setRandWord(newRandWord);
  };

  const newArr = (e) => {
    e.preventDefault();
    console.log(randWord);
    updateScore();
    updateRandWord();
    setInputValue("");
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
        </motion.div>
      )}
    </motion.div>
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
