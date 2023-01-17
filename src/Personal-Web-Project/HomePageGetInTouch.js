import React, { useRef } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import emailjs from "@emailjs/browser";
import "./HomePageMain.css";

function GetInTouch(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    isDarkMode,
    contactRef,
    formValues,
    handleInputChange,
    handleSubmit,
  } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#efefef",
    border: "2px solid #880808",
    boxShadow: 24,
    p: 4,
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    handleSubmit();

    emailjs
      .sendForm(
        "service_ml9nzcg",
        "template_w562ah3",
        form.current,
        "yJpdlI4u6GEg7rrLN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleOpen();
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="flex-end"
        mr={1}
        ref={contactRef}
        style={{
          height: "5vh",
          backgroundColor: isDarkMode ? "#141A1F" : "#efefef",
          marginRight: "0",
        }}
      >
        <h4 id={isDarkMode ? "h4White" : "h4Black"}>Get in touch</h4>
        <Grid item xs={7} sm={10} pl={10}>
          <div className="homePageMain-s3-line"></div>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        style={{
          backgroundColor: isDarkMode ? "#141A1F" : "#efefef",
        }}
        className="contactMobile"
      >
        <Grid item xs={10} sm={5} className="contactFormBoxBlack">
          <Grid item xs={10} sm={12} display="flex" justifyContent="center">
            <div className="homePageMain-s5White">
              <h4>Don't be a stranger.</h4>
              <h4> Get in touch.</h4>
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
            id="inputsMobile"
          >
            <form
              onSubmit={sendEmail}
              ref={form}
              style={{
                width: "100%",
              }}
            >
              <Grid item xs={10} style={{ marginLeft: "auto" }}>
                <TextField
                  name="from_name"
                  id="from_name"
                  label="Full Name"
                  required
                  color="secondary"
                  type="text"
                  value={formValues.from_name}
                  onChange={handleInputChange}
                  style={{
                    width: "80%",
                  }}
                />
              </Grid>

              <Grid item xs={10} mt={4} style={{ marginLeft: "auto" }}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  required
                  color="secondary"
                  type="email"
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
                  id="message"
                  name="message"
                  label="Your Message"
                  required
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
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Thanks for reaching out.
                      </Typography>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ mt: 2 }}
                      >
                        I'll make sure to get back to you as soon as possible.
                        Cheers!
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default GetInTouch;
