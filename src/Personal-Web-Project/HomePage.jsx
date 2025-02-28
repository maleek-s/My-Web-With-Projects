import React, { useEffect, useState, useRef, useCallback } from "react";
import HomePageNavbar from "./HomePageNavbar";
import HomePageMain from "./HomePageMain";
import SkillsSection from "./HomePageSkillsSection";
import PortfolioSection from "./HomePagePortfolioSection";
import GetInTouch from "./HomePageGetInTouch";
import HomePageFooter from "./HomePageFooter";

function HomePage() {
  const [backgroundColor, setBackgroundColor] = useState("rgb(255, 255, 255)");
  const isDarkModeState = JSON.parse(window.localStorage.getItem("isDarkMode"));
  const [isDarkMode, setIsDarkMode] = useState(
    isDarkModeState === null ? true : isDarkModeState
  );
  const [visibleSection, setVisibleSection] = useState("home"); // Track visible section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Handle background color change and section visibility
  useEffect(() => {
    const sections = [
      { ref: homeRef, colorLight: "#F5F5F5", colorDark: "#141A1F", id: "home" },
      { ref: skillsRef, colorLight: "#EAEAEA", colorDark: "#222831", id: "skills" },
      { ref: portfolioRef, colorLight: "#DFDFDF", colorDark: "#1E1E1E", id: "portfolio" },
      { ref: contactRef, colorLight: "#F2F2F2", colorDark: "#252525", id: "contact" },
   
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setBackgroundColor(
                isDarkMode ? section.colorDark : section.colorLight
              );
              setVisibleSection(section.id);
            }
          }
        });
      },
      { threshold: 0.15 } // Lower threshold for better detection on mobile
    );
    

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, [isDarkMode]);

  // Handle dark mode toggle
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    window.localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const initialValues = {
    from_name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setFormValues(initialValues);
  };

  return (
    <div>
      <HomePageNavbar
        handleDarkMode={handleDarkMode}
        isDarkMode={isDarkMode}
        handleScroll={(section) => {
          const refs = {
            home: homeRef,
            skills: skillsRef,
            portfolio: portfolioRef,
            contact: contactRef,
          };
          refs[section].current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div
        style={{
          backgroundColor: backgroundColor,
          transition: "background-color 1s ease",
        }}
      >
        {/* Home Section */}
        <section
          ref={homeRef}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "clamp(10px, 5vw, 20px)",
            opacity: visibleSection === "home" ? 1 : 0.2,
            transition: "opacity 0.5s ease",
            textAlign: "center",
          }}
        >
          <HomePageMain
            visibleSection={visibleSection}
            isDarkMode={isDarkMode}
            contactRef={contactRef}
          ></HomePageMain>
        </section>

        {/* Skills Section */}
        <section
          ref={skillsRef}
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            opacity: visibleSection === "skills" ? 1 : 0.2, // Hide if not visible
            transition: "opacity 0.5s ease",
          }}
        >
          <SkillsSection isDarkMode={isDarkMode} />
        </section>

        {/* Portfolio Section */}
        <section
          ref={portfolioRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            opacity: visibleSection === "portfolio" ? 1 : 0, // Hide if not visible
            transition: "opacity 0.5s ease",
          }}
        >
          <PortfolioSection isDarkMode={isDarkMode} />
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            opacity: visibleSection === "contact" ? 1 : 0.2, // Hide if not visible
            transition: "opacity 0.5s ease",
          }}
        >
          <GetInTouch
            contactRef={contactRef}
            isDarkMode={isDarkMode}
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          ></GetInTouch>
        </section>
      </div>
      <HomePageFooter></HomePageFooter>
    </div>
  );
}

export default HomePage;
