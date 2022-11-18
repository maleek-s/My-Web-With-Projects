import React, { useState, useEffect } from "react";
import seedColors from "./seedColors.js";
import Palette from "./Palette.js";
import PaletteList from "./PaletteList.js";
import NewPaletteForm from "./NewPaletteForm.js";
import SingleColorPalette from "./SingleColorPalette.js";
import { generatePalette } from "./colorHelpers.js";
import { Route, Routes, useParams } from "react-router-dom";

function PaletteApp(props) {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [allPalettes, setAllPalettes] = useState(
    savedPalettes.length === 0 ? seedColors : savedPalettes
  );

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
      <Routes>
        <Route
          path="/palette"
          element={
            <PaletteList palettes={allPalettes} deletePalette={deletePalette} />
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
            <NewPaletteForm savePalette={savePalette} palettes={allPalettes} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default PaletteApp;
