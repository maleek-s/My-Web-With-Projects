import React from "react";
import MiniPalette from "./MiniPalette";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";

function PaletteList(props) {
  const { palettes } = props;

  const useStyles = makeStyles()((theme) => {
    return {
      root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      },
      container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
      },
      nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white",
      },
      palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
      },
    };
  });

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>Color Palettes</h1>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <Link
              to={`/palette/${palette.id}`}
              style={{ textDecoration: "none" }}
              key={palette.id}
            >
              <MiniPalette {...palette} key={palette.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaletteList;
