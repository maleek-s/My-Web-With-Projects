import React from "react";
import { makeStyles } from "tss-react/mui";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

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
        "&:hover svg": {
          color: "white",
          transform: "scale(1.5)",
        },
        "@media (max-width: 991.98px)": {
          width: "25%",
          height: "20%",
        },
        "@media (max-width: 767.98px)": {
          width: "50%",
          height: "10%",
        },
        "@media (max-width: 575.98px)": {
          width: "100%",
          height: "5%",
        },
      },
      boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
      },
      deleteIcon: {
        transition: "all 0.3s ease-in-out",
      },
    };
  });

  const { classes } = useStyles();
  const { handleClick, name, color } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span> {name}</span>
        <span>
          <DeleteRoundedIcon
            className={classes.deleteIcon}
            onClick={handleClick}
          />
        </span>
      </div>
    </div>
  );
}

export default DraggableColorBox;
