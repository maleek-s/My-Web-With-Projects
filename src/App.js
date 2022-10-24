import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { generatePalette } from "./Color-Palette-Project/colorHelpers";
import Palette from "./Color-Palette-Project/Palette";
import seedColors from "./Color-Palette-Project/seedColors";
import PaletteList from "./Color-Palette-Project/PaletteList";

function App(props) {
  const PaletteWrapper = () => {
    const { id } = useParams();
    return <Palette id={id} palette={generatePalette(findPalette(id))} />;
  };

  function findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />}></Route>
      <Route path="/palette/:id" element={<PaletteWrapper />}></Route>
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
