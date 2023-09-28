import React from "react";
import { ReactComponent as Html5 } from "../../../assets/svg/html5.svg";
import { ReactComponent as Bootstrap } from "../../../assets/svg/bootstrap.svg";
import { ReactComponent as Css3 } from "../../../assets/svg/css3.svg";
import { ReactComponent as Figma } from "../../../assets/svg/figma.svg";
import { ReactComponent as Git } from "../../../assets/svg/git.svg";
import { ReactComponent as Github } from "../../../assets/svg/github.svg";
import { ReactComponent as JavaScript } from "../../../assets/svg/JavaScript.svg";
import { ReactComponent as Npm } from "../../../assets/svg/npm.svg";
import { ReactComponent as ReactIcon } from "../../../assets/svg/react.svg";
import { ReactComponent as Sass } from "../../../assets/svg/sass.svg";
import { ReactComponent as VsCode } from "../../../assets/svg/vsCode.svg";
import { ReactComponent as Netlify } from "../../../assets/svg/netlify.svg";
import "./ExpertiseSection.scss";

const ExpertiseSection = () => {
  const techData = [
    {
      tech: <Html5 />,
      techName: "Html5",
    },
    {
      tech: <Css3 />,
      techName: "Css3",
    },
    {
      tech: <JavaScript />,
      techName: "JavaScript",
    },
    {
      tech: <ReactIcon />,
      techName: "ReactJs",
    },
    {
      tech: <Sass />,
      techName: "Sass",
    },
    {
      tech: <Git />,
      techName: "Git",
    },
    {
      tech: <Github />,
      techName: "Github",
    },
    {
      tech: <Bootstrap />,
      techName: "Bootstrap",
    },
    {
      tech: <Figma />,
      techName: "Figma",
    },
    {
      tech: <Npm />,
      techName: "Npm",
    },
    {
      tech: <VsCode />,
      techName: "VsCode",
    },
    {
      tech: <Netlify />,
      techName: "Netlify",
    },
  ];
  return (
    <div className="expertise-section container">
      <h2 className="expertise-title" data-aos="fade-up">
        Explore My Diverse Range of &nbsp;
        <span className="highlight">Technical Skills</span> and
        <span className="highlight"> Expertise</span>
      </h2>

      <div
        className="expertise-wrapper"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        {techData.map((techData, index) => (
          <div className="tech" key={index} data-aos="flip-up">
            {techData.tech}
            <p className="tech-name">{techData.techName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
