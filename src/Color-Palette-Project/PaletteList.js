import React from "react";
import MiniPalette from "./MiniPalette";
import useStyles from "./styles/paletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PaletteList(props) {
  const { palettes } = props;
  const { classes } = useStyles();

  return (
    <motion.div
      className={classes.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>Color Palettes</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map((palette) => (
            <CSSTransition
              key={palette.id}
              classNames="fade fade-exit fade-exit-active"
              timeout={500}
            >
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
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </motion.div>
  );
}

export default PaletteList;
