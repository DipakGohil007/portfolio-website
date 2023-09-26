import React, { useEffect, useState } from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldAddDelay = screenWidth < 576;

  return (
    <div className="about-section container">
      <h2
        className="title"
        data-aos="fade-up"
        data-aos-delay={shouldAddDelay ? "900" : null}
      >
        I'm a <span className="highlight">Frontend Developer</span>.
      </h2>
      {/* <p className="desc" data-aos="fade-up" data-aos-delay="150">Currently, I'm a Frontend Developer at Simform,</p> */}
      <p
        className="sub-desc"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        A dedicated frontend developer specializing in transforming creative
        concepts into interactive web applications. Proficient in HTML, CSS, and
        JavaScript, I possess a deep understanding of user-centric design and
        responsive layouts.
      </p>
    </div>
  );
};

export default AboutSection;
