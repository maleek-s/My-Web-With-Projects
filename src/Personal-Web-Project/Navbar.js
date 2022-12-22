import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MaleekLogo from "./assets/Maleek-Logo.svg";
import MaleekLogoDark from "./assets/Maleek-Logo-Dark.svg";
import SimonSays from "./assets/SimonSays.svg";
import SimonSaysWhite from "./assets/SimonSaysWhiteMode.png";
import { motion } from "framer-motion";
import "./Navbar.css";

const drawerWidth = 240;
const navItems = ["Skills", "Portofolio", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e) => {
    console.log(e);
    props.handleScroll(e.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { handleDarkMode, isDarkMode } = props;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} color="secondary" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        id={isDarkMode ? "AppBarStyleBlack" : "AppBarStyleWhite"}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Button onClick={handleClick}>
              <motion.img
                src={isDarkMode ? MaleekLogoDark : MaleekLogo}
                whileHover={{ scale: 1.01 }}
                alt="My Personal Logo With Name"
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

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
