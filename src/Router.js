import React, { useState, useEffect } from "react";
import { Route, Routes, useParams, useLocation } from "react-router-dom";
import HomePage from "./Personal-Web-Project/HomePage";
import Add from "./Synonym-Guessing-Game-Project/Components/GameAddSyn";
import Play from "./Synonym-Guessing-Game-Project/Components/Play";
import SynonymHome from "./Synonym-Guessing-Game-Project/Components/GameHome";
import seedColors from "./Color-Palette-Project/Assets/seedColors.js";
import Palette from "./Color-Palette-Project/Components/Palette.js";
import PaletteList from "./Color-Palette-Project/Components/PaletteList.js";
import NewPaletteForm from "./Color-Palette-Project/Components/NewPaletteForm.js";
import SingleColorPalette from "./Color-Palette-Project/Components/SingleColorPalette.js";
import { generatePalette } from "./Color-Palette-Project/Assets/colorHelpers.js";
import { AnimatePresence } from "framer-motion";

function AppRouter(props) {
  const location = useLocation();

  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [allPalettes, setAllPalettes] = useState(savedPalettes || seedColors);

  function findPalette(id) {
    return allPalettes.find((palette) => {
      return palette.id === id;
    });
  }

  function deletePalette(id) {
    setAllPalettes(allPalettes.filter((palette) => palette.id !== id));
  }

  useEffect(() => {
    const syncLocalStorage = () => {
      window.localStorage.setItem("palettes", JSON.stringify(allPalettes));
    };
    syncLocalStorage();
  }, [allPalettes]);

  const savePalette = (newPalette) => {
    setAllPalettes([...allPalettes, newPalette]);
  };

  const PaletteWrapper = () => {
    const { id } = useParams();
    return <Palette id={id} palette={generatePalette(findPalette(id))} />;
  };

  const SingleColorWrapper = () => {
    const { paletteId, colorId } = useParams();
    return (
      <SingleColorPalette
        paletteId={paletteId}
        colorId={colorId}
        palette={generatePalette(findPalette(paletteId))}
      />
    );
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<h1>404 Page</h1>}></Route>

          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/palette"
            element={
              <PaletteList
                palettes={allPalettes}
                deletePalette={deletePalette}
              />
            }
          ></Route>

          <Route path="/palette/:id" element={<PaletteWrapper />}></Route>

          <Route
            path="/palette/:paletteId/:colorId"
            element={<SingleColorWrapper />}
          ></Route>

          <Route
            path="/palette/new"
            element={
              <NewPaletteForm
                savePalette={savePalette}
                palettes={allPalettes}
              />
            }
          ></Route>
          <Route path="/synonym-game" element={<SynonymHome />}></Route>
          <Route path="/synonym-game/add" element={<Add />}></Route>
          <Route path="/synonym-game/play" element={<Play />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AppRouter;
