import React from "react";
import { useParams } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
import Palette from "./Palette";
import seedColors from "./seedColors";

function ColorsApp(props) {
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
    <div></div>
    // <Routes>
    //   <Route
    //     path="/palette"
    //     element={<PaletteList palettes={seedColors} />}
    //   ></Route>
    //   <Route path="/palette/:id" element={<PaletteWrapper />}></Route>
    // </Routes>
  );
}

export default ColorsApp;
