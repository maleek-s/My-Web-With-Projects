import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import "./HomePageMain.css";

function GetInTouch(props) {
  const {
    isDarkMode,
    contactRef,
    formValues,
    handleInputChange,
    handleSubmit,
  } = props;
  return (
    <>
      {" "}
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="flex-end"
        mr={1}
        ref={contactRef}
      >
        <h4 id={isDarkMode ? "h4White" : "h4Black"}>Get in touch</h4>
        <Grid item xs={8} sm={10} pl={10}>
          <div className="homePageMain-s3-line"></div>
        </Grid>
      </Grid>
      <Grid container spacing={2} display="flex" justifyContent="center">
        <Grid item xs={10} sm={5}>
          <Grid item xs={10} sm={12} display="flex" justifyContent="center">
            <div
              className={
                isDarkMode ? "homePageMain-s5White" : "homePageMain-s5Black"
              }
            >
              <h4>Don't be a stranger. Get in touch.</h4>
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            sm={12}
            pr={1}
            pt={3}
            display="flex"
            justifyContent="center"
          >
            <form
              onSubmit={handleSubmit}
              style={{
                width: "100%",
              }}
            >
              <Grid item xs={10} style={{ marginLeft: "auto" }}>
                <TextField
                  id={isDarkMode ? "fullName" : "fullNameW"}
                  name="fullName"
                  label="Full Name"
                  focused
                  required
                  color="secondary"
                  type="text"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  style={{
                    width: "80%",
                  }}
                />
              </Grid>

              <Grid item xs={10} mt={4} style={{ marginLeft: "auto" }}>
                <TextField
                  id={isDarkMode ? "email" : "emailW"}
                  name="email"
                  label="Email"
                  focused
                  required
                  color="secondary"
                  type="text"
                  value={formValues.email}
                  onChange={handleInputChange}
                  style={{ width: "80%" }}
                />
              </Grid>

              <Grid
                item
                xs={10}
                mt={3}
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <TextField
                  id={isDarkMode ? "message" : "messageW"}
                  name="message"
                  label="Your Message"
                  required
                  focused
                  color="secondary"
                  type="text"
                  multiline
                  rows={6}
                  value={formValues.message}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center" mt={3}>
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  style={{
                    margin: "5px",
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default GetInTouch;
