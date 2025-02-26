import React from "react";
import MyLogoMini from "./assets/MyLogoMini.svg";
import mainLinkedInDark from "./assets/LinkedInDark.svg";
import mainGitHubDark from "./assets/GitHubDark.svg";
import { Link } from "react-router-dom";
import "./HomePageMain.css";

function HomePageFooter() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div
      style={{
        backgroundColor: "#1E1E1E",
        height: "8em",
        display: "block",
        width: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link className="footer-imgs" to="/kokaipo">
          <img src={MyLogoMini} alt="My Logo" />
        </Link>
        <Link
          className="footer-imgs"
          onClick={() =>
            openInNewTab(
              "https://ba.linkedin.com/in/malik-spahi%C4%87-175675201"
            )
          }
        >
          <img src={mainLinkedInDark} alt="My LinkedIn Profile Link" />
        </Link>
        <Link
          className="footer-imgs"
          onClick={() => openInNewTab("https://github.com/maleek-s")}
        >
          <img src={mainGitHubDark} alt="My GitHub Profile Link" />
        </Link>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", color: "white" }}
      >
        <p>Have you found the Easter Egg yet?</p>
      </div>
    </div>
  );
}

export default HomePageFooter;
