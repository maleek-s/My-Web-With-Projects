import React from "react";
import { makeStyles } from "tss-react/mui";

function DraggableColorBox(props) {
  const useStyles = makeStyles()((theme) => {
    return {
      root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
      },
    };
  });

  const { classes } = useStyles();

  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}

export default DraggableColorBox;
