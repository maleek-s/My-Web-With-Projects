import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function GetInTouch({ isDarkMode, contactRef, formValues, handleInputChange, handleSubmit }) {
  const [open, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    handleSubmit();
    emailjs.sendForm("service_ml9nzcg", "template_w562ah3", form.current, "yJpdlI4u6GEg7rrLN")
      .then(() => setOpen(true))
      .catch((error) => console.log(error.text));
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-0" ref={contactRef}>
      <h4 style={{ color: isDarkMode ? "white" : "#1a202c" }} className="text-3xl font-bold">
        Get in Touch
      </h4>
      <div
        className={`w-full max-w-lg mt-8 p-10 rounded-xl shadow-xl transition-all ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      >
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
          <h2 style={{ color: isDarkMode ? "#a0aec0" : "#4a5568" }} className="text-xl font-semibold text-center">
            don't be a stranger
          </h2>

          <div className="relative">
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              style={{ color: isDarkMode ? "white" : "black" }}
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              value={formValues.from_name}
              onChange={handleInputChange}
            />
          </div>

          <div className="relative">
            <input
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
              style={{ color: isDarkMode ? "white" : "black" }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formValues.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="relative">
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent resize-none h-32"
              style={{ color: isDarkMode ? "white" : "black" }}
              name="message"
              placeholder="Your Message"
              required
              value={formValues.message}
              onChange={handleInputChange}
            />
          </div>

          <button className="w-full p-4 text-white text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-90 transition-all">
            Send Message
          </button>
        </form>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className={`p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
            <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
            <h2 style={{ color: isDarkMode ? "white" : "#1a202c" }} className="text-lg font-semibold">
              Thanks for reaching out.
            </h2>
            <p style={{ color: isDarkMode ? "#a0aec0" : "#4a5568" }} className="mt-2">
              I'll get back to you as soon as possible. Cheers!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
