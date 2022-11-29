import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";
import { motion } from "framer-motion";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, paletteId, id, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <motion.div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied ? "show" : undefined}`}
          ></div>
          <div className={`copy-msg ${copied ? "show" : undefined}`}>
            <h1>Copied!</h1>
            <p className={isLightColor ? "dark-text" : undefined}>
              {this.props.background}
            </p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? "light-text" : undefined}>
                {name}
              </span>
            </div>
            <button
              className={`copy-button ${
                isLightColor ? "dark-text" : undefined
              }`}
            >
              Copy
            </button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className={`see-more ${isLightColor ? "dark-text" : undefined}`}
              >
                MORE
              </span>
            </Link>
          )}
        </motion.div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
