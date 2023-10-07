import React from "react";
import "./IntroSection.scss";
import { images } from "../../../assets/images/images";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-section-container container">
        <div className="me" data-aos="fade-up" data-aos-delay="600">
          <img src={images.Me} alt="Me" className="me-avtar" />
          <img src={images.Gradient} alt="gradient" className="gradient" />
          <div className="greeting-wrapper">
            <p className="greeting">
              Hello! I Am <span className="name">Dipak Gohil</span>
            </p>
          </div>
        </div>

        <div className="intro">
          <h3
            className="intro-top"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-offset="0"
          >
            A Developer who
          </h3>
          <h1
            className="intro-center"
            data-aos="fade-up"
            data-aos-delay="750"
            data-aos-offset="0"
          >
            Judges a book by its <span className="cover"> cover</span>...
          </h1>
          <p
            className="intro-bottom"
            data-aos="fade-up"
            data-aos-delay="750"
            data-aos-offset="0"
          >
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
