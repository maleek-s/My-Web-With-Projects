import React, { useState } from "react";
import PlayerCard from "./PlayerCard";
import "./Synonym-Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

const nouns = [
  "time",
  "person",
  "year",
  "way",
  "day",
  "thing",
  "man",
  "world",
  "life",
  "hand",
  "part",
  "child",
  "eye",
  "woman",
  "place",
  "work",
  "week",
  "case",
  "point",
  "government",
  "company",
  "number",
  "group",
  "problem",
  "fact",
  "able",
  "bad",
  "best",
  "better",
  "big",
  "black",
  "certain",
  "clear",
  "different",
  "early",
  "easy",
  "economic",
  "federal",
  "free",
  "full",
  "good",
  "great",
  "hard",
  "high",
  "human",
  "important",
  "international",
  "large",
  "late",
  "little",
  "local",
  "long",
  "low",
  "major",
  "military",
  "national",
  "new",
  "old",
  "only",
  "other",
  "political",
  "possible",
  "public",
  "real",
  "recent",
  "right",
  "small",
  "social",
  "special",
  "strong",
  "sure",
  "true",
  "white",
  "whole",
  "young",
];

const Play = (props) => {
  const [inputValue, setInputValue] = useState("");

  const guessInput = (value) => {
    setInputValue(value);
    console.log(nouns.includes(value));
  };

  return (
    <div className="App">
      <PlayerCard nouns={nouns} guessInput={guessInput}></PlayerCard>
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
