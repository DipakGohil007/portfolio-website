import React from "react";
import "./AboutSection.scss";

const AboutSection = () => {
  return (
    <div className="about-section container">
      <h2 className="title" data-aos="fade-up">
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
