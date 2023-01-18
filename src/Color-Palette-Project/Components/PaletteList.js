import React from "react";
import MiniPalette from "./MiniPalette";
import useStyles from "../styles/paletteListStyles";
import HomePageFooter from "../../Personal-Web-Project/HomePageFooter";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PaletteList(props) {
  const { palettes } = props;
  const { classes } = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#efefef",
    border: "2px solid #880808",
    boxShadow: 24,
    p: 4,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>Color Palettes</h1>
            <div className={classes.topLinks}>
              <Link to="/palette/new">Create Palette</Link>
              <Link to="/">Go back</Link>
            </div>
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
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Welcome to my Color Palette Project
                </Typography>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ mt: 2 }}
                >
                  Here you can copy any color HEX, RGB or RGBA code to use in
                  your own project. You can choose colors from my palettes, or
                  you can create a palette of your own.
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
      <HomePageFooter></HomePageFooter>
    </motion.div>
  );
}

export default PaletteList;
