import React, { useState } from "react";
import seedColors from "./seedColors.js";
import Palette from "./Palette.js";
import PaletteList from "./PaletteList.js";
import NewPaletteForm from "./NewPaletteForm.js";
import SingleColorPalette from "./SingleColorPalette.js";
import { generatePalette } from "./colorHelpers.js";
import { Route, Routes, useParams } from "react-router-dom";

function PaletteApp(props) {
  const [allPalettes, setAllPalettes] = useState(seedColors);

  function findPalette(id) {
    return allPalettes.find((palette) => {
      return palette.id === id;
    });
  }

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
          element={<PaletteList palettes={allPalettes} />}
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
