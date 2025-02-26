import React, { Component } from "react";
import { Link } from "react-router-dom";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "../styles/Navbar.css";
import NativeSelect from "@mui/material/NativeSelect";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "react-bootstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showingAllColors } = this.props;
    const { format } = this.state;
    return (
      <div>
        <header className="Navbar">
          <div className="logo">
            <Link to="/palette">pickyourcolor</Link>
          </div>
          {showingAllColors && (
            <div className="slider-container">
              <span>Level: {level}</span>
              <div className="slider">
                <Slider
                  defaultValue={level}
                  min={100}
                  max={900}
                  onAfterChange={changeLevel}
                  step={100}
                />
              </div>
            </div>
          )}
          <div className="select-container">
            <NativeSelect
              value={format}
              onChange={this.handleChange}
              size="small"
            >
              <option value="hex"> HEX </option>
              <option value="rgb"> RGB </option>
              <option value="rgba"> RGBA </option>
            </NativeSelect>
            <Link to="/palette" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  display: "inline",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                color="secondary"
                size="small"
              >
                Go Back
              </Button>
            </Link>
          </div>
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            open={this.state.open}
            autoHideDuration={3000}
            message={
              <span id="message-id">
                Format Changed to {format.toUpperCase()}
              </span>
            }
            ContentProps={{
              "aria-describedby": "message-id",
            }}
            onClose={this.closeSnackbar}
            action={[
              <IconButton
                onClick={this.closeSnackbar}
                corlor="inherit"
                key="close"
                aria-label="close"
              >
                <CloseIcon></CloseIcon>
              </IconButton>,
            ]}
          />
        </header>
      </div>
    );
  }
}

export default Navbar;
