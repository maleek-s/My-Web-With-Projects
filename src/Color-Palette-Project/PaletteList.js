import React from "react";
import MiniPalette from "./MiniPalette";
import useStyles from "./styles/paletteListStyles";
import { Link } from "react-router-dom";

function PaletteList(props) {
  const { palettes } = props;
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palettes</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <Link
              to={`/palette/${palette.id}`}
              style={{ textDecoration: "none" }}
              key={palette.id}
            >
              <MiniPalette
                {...palette}
                key={palette.id}
                handleDelete={props.deletePalette}
                id={palette.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteList;
