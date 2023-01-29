import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MaleekLogo from "./assets/Maleek-Logo.svg";
import MaleekLogoDark from "./assets/Maleek-Logo-Dark.svg";
import SimonSays from "./assets/SimonSays.svg";
import DarkLightMini from "./assets/DarkLightMini.svg";
import DarkLightMini2 from "./assets/DarkLightMini2.svg";
import MyLogoMini from "./assets/MyLogoMini.svg";
import SimonSaysWhite from "./assets/SimonSaysWhiteMode.png";
import { motion } from "framer-motion";
import "./HomePageNavbar.css";

const navItems = ["Skills", "Portofolio", "Contact"];

function Navbar(props) {
  const { handleDarkMode, isDarkMode, window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e) => {
    props.handleScroll(e.target.value || e.target.alt.toLowerCase());
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={MyLogoMini}
          alt="Home"
          style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}
          onClick={handleClick}
        />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ mr: 3, mt: 2, display: { sm: "none" } }}
        >
          <CloseIcon sx={{ color: isDarkMode ? "white" : "black" }} />
        </IconButton>
      </Box>
      <Divider />
      <List style={{ display: "grid", marginTop: "5em" }}>
        {navItems.map((item) => (
          <Button
            key={item}
            value={item.toLowerCase()}
            sx={isDarkMode ? { color: "white" } : { color: "#202020" }}
            onClick={handleClick}
            style={{
              height: "3em",
              fontSize: "2em",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: "bold",
            }}
          >
            {item}
          </Button>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex" }}
      id={isDarkMode ? "AppBarStyleBlack" : "AppBarStyleWhite"}
    >
      <AppBar
        component="nav"
        position="fixed"
        id={isDarkMode ? "AppBarStyleBlack" : "AppBarStyleWhite"}
      >
        <Toolbar>
          <Box component="div" sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <Button>
              <motion.img
                onClick={handleClick}
                src={isDarkMode ? MaleekLogoDark : MaleekLogo}
                whileHover={{ scale: 1.01 }}
                alt="Home"
              />
            </Button>
            <Button
              onClick={handleClick}
              sx={{
                flexGrow: 1,
                display: { xs: "flex", sm: "none" },
                justifyContent: "flex-end",
                paddingRight: "1.4em",
              }}
            >
              <img
                src={isDarkMode ? DarkLightMini : DarkLightMini2}
                onClick={handleDarkMode}
                alt="Dark or Light Mode Button"
                title="home"
              />
            </Button>
          </Box>

          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={handleDarkMode}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                src={isDarkMode ? SimonSaysWhite : SimonSays}
                alt="Dark Mode Button"
              />
            </button>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                value={item.toLowerCase()}
                sx={isDarkMode ? { color: "white" } : { color: "#202020" }}
                onClick={handleClick}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color={isDarkMode ? "inherit" : "default"}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              maxWidth: 400,
              mx: "auto",
              backgroundColor: isDarkMode ? "#202020" : "#efefef",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
