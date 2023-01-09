import React from "react";
import "./Synonym-Home.css";
import NavBar from "./GameNavBar";
import Play from "./Play";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

function SynonymHome() {
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
      <NavBar />
      <Play />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Welcome to my Synonym Guessing Game Project
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ mt: 2 }}
            >
              It's a simple one player game where you try to guess the synonym
              of a word to get a point. The clock is ticking.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </motion.div>
  );
}

export default SynonymHome;
