import React from "react";
import PaletteApp from "./Color-Palette-Project/PaletteApp";
import AppRouter from "./Router";

function App(props) {
  return (
    <div>
      <AppRouter />
      <PaletteApp />
    </div>
  );
}

export default App;
