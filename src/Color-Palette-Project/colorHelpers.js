import React from "react";
import chroma from "chroma-js";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import Palette from "./Palette";
import SingleColorPalette from "./SingleColorPalette";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

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

function findPalette(id) {
  return seedColors.find((palette) => {
    return palette.id === id;
  });
}

export { generatePalette, PaletteWrapper, SingleColorWrapper, findPalette };
