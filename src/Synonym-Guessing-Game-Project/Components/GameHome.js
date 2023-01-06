import "./Synonym-Home.css";
import NavBar from "./GameNavBar";
import Play from "./Play";
import { motion } from "framer-motion";

function SynonymHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <NavBar />
      <Play />
    </motion.div>
  );
}

export default SynonymHome;
