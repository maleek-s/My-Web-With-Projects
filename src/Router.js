import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  PaletteWrapper,
  SingleColorWrapper,
} from "./Color-Palette-Project/colorHelpers";
import HomePage from "./Personal-Web-Project/HomePage";
import seedColors from "./Color-Palette-Project/seedColors";
import PaletteList from "./Color-Palette-Project/PaletteList";
import NewPaletteForm from "./Color-Palette-Project/NewPaletteForm";

function AppRouter(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          path="/palette"
          element={<PaletteList palettes={seedColors} />}
        ></Route>

        <Route path="/palette/:id" element={<PaletteWrapper />}></Route>

        <Route
          path="/palette/:paletteId/:colorId"
          element={<SingleColorWrapper />}
        ></Route>

        <Route path="/palette/new" element={<NewPaletteForm />}></Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
