import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Personal-Web-Project/HomePage";
import Add from "./Synonym-Guessing-Game-Project/Components/GameAddSyn";
import Play from "./Synonym-Guessing-Game-Project/Components/Play";
import SynonymHome from "./Synonym-Guessing-Game-Project/Components/GameHome";

function AppRouter(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/synonym-game" element={<SynonymHome />}></Route>
        <Route path="/synonym-game/add" element={<Add />}></Route>
        <Route path="/synonym-game/play" element={<Play />}></Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
