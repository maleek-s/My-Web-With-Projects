import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "tss-react/mui";

function MiniPalette(props) {
  const { paletteName, emoji, colors } = props;

  const useStyles = makeStyles()((theme) => {
    return {
      root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        cursor: "pointer",
        "&:hover svg": {
          opacity: 1,
        },
      },
      colors: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden",
      },
      title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
      },
      emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem",
      },
      miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        mirgin: "0 auto",
        pisition: "relative",
        marginBottom: "-3.5px",
      },
      deleteIcon: {
        color: "white",
        backgroundColor: "#eb3d30",
        width: "25px",
        height: "25px",
        position: "absolute",
        right: "0",
        top: "0",
        zIndex: 10,
        opacity: 0,
      },
    };
  });

  const { classes } = useStyles();

  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  const deletePalette = (e) => {
    e.preventDefault();
    props.handleDelete(props.id);
  };

  return (
    <div className={classes.root}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={deletePalette}
      ></DeleteIcon>

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default MiniPalette;
