import React, { useRef, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import mainLinkedIn from "./assets/LinkedIn.svg";
import mainGitHub from "./assets/GitHub.svg";
import mainLinkedInDark from "./assets/LinkedInDark.svg";
import mainGitHubDark from "./assets/GitHubDark.svg";
import { Link } from "react-router-dom";
import "./Cat.css";

function HomePageMain(props) {
  // Dynamic text logic (unchanged)
  const mainPhrase = "hi there, stranger!";
  const flippingPhrases = [
    "I work at a payment gateway company",
    "5 years of support experience in SaaS",
    "4 years of coding",
    "I have a cat",
  ];

  const [flipIndex, setFlipIndex] = useState(0);
  const [hasStartedFlipping, setHasStartedFlipping] = useState(false);

  useEffect(() => {
    const delayBeforeFlip = 2500;
    const timer = setTimeout(() => {
      setHasStartedFlipping(true);
    }, delayBeforeFlip);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    const section = e.currentTarget.getAttribute("data-section");
    if (section) {
      props.handleScroll(section);
    }
  };

  useEffect(() => {
    if (hasStartedFlipping) {
      const interval = setInterval(() => {
        setFlipIndex((prevIndex) => (prevIndex + 1) % flippingPhrases.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [hasStartedFlipping]);

  useEffect(() => {
    if (hasStartedFlipping) {
      setText(flippingPhrases[flipIndex]);
    }
  }, [flipIndex, hasStartedFlipping]);

  const [text, setText] = useState(mainPhrase);

  const { isDarkMode, id, visibleSection, contactRef } = props;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <>
      <div className="wrapper">
        <div className="cat">
          <span className="eyes left"></span>
          <span className="eyes right"></span>
          <span className="mouth"></span>
        </div>

        <div className="moon">
          <div className="sphere"></div>
        </div>

        <div clasNames="cloud-container">
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      </div>

      {/* Dynamic Text */}
      <div
        style={{
          height: "4em", // Locks in container height so buttons don’t move
          textAlign: "center",
          marginBottom: "clamp(1rem, 4vw, 1em)", // Keeps spacing below
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "90vw", // Prevents text overflow
          overflow: "hidden", // Ensures smooth transitions
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            style={{
              position: "absolute", // Prevents affecting layout
              fontSize: "clamp(1.8rem, 6vw, 3.2rem)",
              fontWeight: "bold",
              color: isDarkMode ? "#fff" : "#000",
              textAlign: "center",
              width: "100%", // Ensures proper centering
            }}
          >
            {text}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Social Icons & Buttons */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // Allows better stacking on mobile
          gap: "clamp(0.5rem, 2vw, 1rem)", // Adjust gap dynamically
          marginBottom: "clamp(6rem, 3vw, 7rem)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button
          variant="outlined"
          size="small"
          style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }} // Dynamic button text size
          onClick={() => contactRef.current?.scrollIntoView()}
        >
          Get in Touch
        </Button>
        <div className="flex">
          <Link
            onClick={() =>
              openInNewTab(
                "https://ba.linkedin.com/in/malik-spahi%C4%87-175675201"
              )
            }
            className="mr-2"
          >
            <motion.img
              src={isDarkMode ? mainLinkedInDark : mainLinkedIn}
              whileHover={{ scale: 1.1 }}
              alt="LinkedIn"
              style={{
                width: "clamp(16px, 4vw, 20px)", // Dynamic icon sizing
                height: "clamp(16px, 4vw, 20px)",
              }}
            />
          </Link>
          <Link onClick={() => openInNewTab("https://github.com/maleek-s")}>
            <motion.img
              src={isDarkMode ? mainGitHubDark : mainGitHub}
              whileHover={{ scale: 1.1 }}
              alt="GitHub"
              style={{
                width: "clamp(16px, 4vw, 20px)",
                height: "clamp(16px, 4vw, 20px)",
              }}
            />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {visibleSection === "home" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: "clamp(3px, 4vw, 20px)", // Dynamically adjusts based on screen size
              transform: "translateX(-50%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: "clamp(22px, 5vw, 20px)",
                height: "clamp(35px, 6vw, 35px)",
                border: `2px solid ${isDarkMode ? "#fff" : "#333"}`,
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "5px",
              }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: isDarkMode ? "#fff" : "#333",
                  borderRadius: "50%",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HomePageMain;
