import React, { Component } from "react";
import { generatePalette } from "./Color-Palette-Project/colorHelpers";
import Palette from "./Color-Palette-Project/Palette";
import seedColors from "./Color-Palette-Project/seedColors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;
