import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import IntroSection from "./IntroSection/IntroSection";
import AboutSection from "./AboutSection/AboutSection";
import ExpertiseSection from "./ExpertiseSection/ExpertiseSection";
import ProjectSection from "./ProjectSection/ProjectSection";
import ContactSection from "./ContactSection/ContactSection";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default Portfolio;
