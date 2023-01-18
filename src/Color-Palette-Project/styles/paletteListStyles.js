import { makeStyles } from "tss-react/mui";
import bg from "./background-main.svg";

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      backgroundColor: "#020220",
      height: "110vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      backgroundImage: `url(${bg})`,
      /* background by SVGBackgrounds.com */
      overflow: "auto",
    },
    container: {
      width: "50%",
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
      flexWrap: "wrap",
      "@media (max-width: 1600px)": {
        width: "60%",
      },
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      color: "white",
      alignItems: "center",
      "@media (max-width: 575.98px)": {
        display: "block",
      },
    },
    topLinks: {
      marginRight: "2em",
      "& a": {
        marginRight: "1em",
        color: "white",
        textDecoration: "none",
        transition: "all 5s ease-in-out",
      },
      "&:hover": {
        color: "blue",
      },
      "@media (max-width: 575.98px)": {
        marginBottom: "1em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& a": {
          border: "1px solid white",
          padding: "2px",
        },
      },
    },
    palettes: {
      boxSizing: "border-box",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 30%)",
      gridGap: "1.5rem",
      "@media (max-width: 1100.98px)": {
        gridTemplateColumns: "repeat(2, 50%)",
      },
      "@media (max-width: 575.98px)": {
        gridTemplateColumns: "repeat(1, 100%)",
      },
    },
    heading: {
      fontSize: "2rem",
      marginTop: "1.5rem",
      paddingTop: "1rem",
      "@media (max-width: 575.98px)": {
        display: "flex",
        alignItems: "flex-start",
      },
    },
  };
});

export default useStyles;
