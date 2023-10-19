import React, { useRef } from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import "./HomePageSkills.css";
import "./HomePageMain.css";
import "./HomePagePortofolio.css";

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
        justifyContent="center"
        alignContent="center"
        ref={contactRef}
        style={{ height: "11vh", marginTop: "3em", marginLeft: "0" }}
        className={
          isDarkMode
            ? "portBlack portofolioMobile"
            : "portWhite portofolioMobile"
        }
      >
        <h4 id={isDarkMode ? "s4-h4Black" : "s4-h4White"}>Get in Touch</h4>
      </Grid>
      <Grid
        container
        display="flex"
        justifyContent="center"
        style={{
          backgroundColor: isDarkMode ? "#141A1F" : "#efefef",
          marginTop: "0",
          paddingTop: "3em",
          paddingBottom: "3em",
        }}
        className="contactMobile"
      >
        <form class="form" onSubmit={sendEmail} ref={form}>
          <h2>don't be a stranger</h2>

          <p type="Name:">
            <input
              value={formValues.from_name}
              onChange={handleInputChange}
              type="text"
              name="from_name"
              id="from_name"
              label="Full Name"
              required
              placeholder="Your Name"
            ></input>
          </p>
          <p type="Email:">
            <input
              placeholder="Your Email"
              id="email"
              name="email"
              label="Email"
              required
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            ></input>
          </p>

          <p type="Message:">
            <input
              id="message"
              name="message"
              label="Your Message"
              required
              type="text"
              value={formValues.message}
              onChange={handleInputChange}
              placeholder="Your Message"
            ></input>
          </p>
          <button>Send Message</button>
        </form>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <Box sx={style}>
              <CloseIcon
                onClick={handleClose}
                style={{ display: "flex", marginLeft: "auto" }}
              />
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
                I'll make sure to get back to you as soon as possible. Cheers!
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </Grid>
    </>
  );
}

export default GetInTouch;
