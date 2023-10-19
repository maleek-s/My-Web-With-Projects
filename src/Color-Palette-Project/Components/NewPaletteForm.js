import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewPalatteColorBox from "./NewPaletteColorBox";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ChromePicker } from "react-color";
import Button from "@mui/material/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import newSeedColors from "../Assets/newSeedColors";
import { motion } from "framer-motion";
import "../styles/NewPaletteForm.css";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: "row",
  justifyContent: "space-between",
  height: "8vh",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function NewPaletteForm({ maxColors = 20, ...props }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentColor, setCurrentColor] = useState("teal");
  const [colorsArr, setColorsArr] = useState(newSeedColors[0].colors);
  const [newName, setNewName] = useState("");
  const [newPaletteName, setNewPaletteName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colorsArr.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colorsArr.every(({ color }) => color !== currentColor);
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeComplete = (color, event) => {
    setCurrentColor(color.hex);
  };

  const createColor = () => {
    const newColor = { color: currentColor, name: newName };
    setColorsArr([...colorsArr, newColor]);
    setNewName("");
  };

  const handleChange = (evt) => {
    setNewName(evt.target.value);
  };

  const clearColors = () => {
    setColorsArr([]);
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();
    let rand = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[rand];
    setColorsArr([...colorsArr, randomColor]);
  };

  const handlePaletteNameChange = (evt) => {
    setNewPaletteName(evt.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    let newName = newPaletteName;
    const newPalette = {
      paletteName: newName,
      colors: [...colorsArr],
      id: newName.toLowerCase().replace(/ /g, "-"),
      emoji: "🎨",
    };
    props.savePalette(newPalette);
    navigate("/palette");
  };

  const removeColor = (colorName) => {
    setColorsArr(colorsArr.filter((color) => color.name !== colorName));
  };

  const paletteIsFull = colorsArr.length >= maxColors;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color="default">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Create a Palette
            </Typography>
          </Toolbar>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Link to="/palette" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  display: "flex",
                  marginBottom: "15px",
                  marginRight: "3em",
                  marginTop: "10px",
                }}
                color="secondary"
                size="small"
              >
                Go Back
              </Button>
            </Link>
          </div>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <div className="container">
            <Typography variant="h4" color="black">
              Design Your Palette
            </Typography>
            <div className="container-btns">
              <Button
                variant="contained"
                color="secondary"
                onClick={clearColors}
                id="container-btn"
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={addRandomColor}
                disabled={paletteIsFull}
              >
                Random Color
              </Button>
            </div>
            <div className="picker">
              <ChromePicker
                color={currentColor}
                onChangeComplete={handleChangeComplete}
              ></ChromePicker>
              <ValidatorForm onSubmit={createColor} instantValidate={false}>
                <div id="container-color-validator">
                  <TextValidator
                    size="small"
                    label="Add Color Name"
                    onChange={handleChange}
                    value={newName}
                    validators={[
                      "required",
                      "isColorNameUnique",
                      "isColorUnique",
                    ]}
                    errorMessages={[
                      "Enter a color name",
                      "Color name must be unique",
                      "Color already used",
                    ]}
                  />
                </div>
                <div id="container-btn-add">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: paletteIsFull ? "grey" : currentColor,
                    }}
                    type="submit"
                    disabled={paletteIsFull}
                  >
                    {paletteIsFull ? "Palette Full" : "Add color"}
                  </Button>
                </div>
              </ValidatorForm>
            </div>
            <div id="container-savePalette">
              <ValidatorForm
                onSubmit={handleSubmit}
                style={{ padding: "10px" }}
              >
                <TextValidator
                  style={{ marginBottom: "1em" }}
                  size="small"
                  onChange={handlePaletteNameChange}
                  label="Add Palette Name"
                  value={newPaletteName}
                  validators={["required", "isPaletteNameUnique"]}
                  errorMessages={[
                    "Enter Palette Name",
                    "Palette Name already used",
                  ]}
                ></TextValidator>
                <Button
                  size="medium"
                  variant="outlined"
                  color="secondary"
                  type="submit"
                  style={{
                    margin: "0 10px 0 40px",
                  }}
                >
                  Save Palette
                </Button>
              </ValidatorForm>
            </div>
          </div>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />

          {colorsArr.map((color) => {
            return (
              <NewPalatteColorBox
                key={color.name}
                color={color.color}
                name={color.name}
                handleClick={() => removeColor(color.name)}
              ></NewPalatteColorBox>
            );
          })}
        </Main>
      </Box>
    </motion.div>
  );
}

export default NewPaletteForm;
