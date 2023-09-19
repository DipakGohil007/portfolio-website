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
import "./ExpertiseSection.scss";

const ExpertiseSection = () => {
  const techData = [
    <Html5 />,
    <Bootstrap />,
    <Css3 />,
    <Figma />,
    <Git />,
    <Github />,
    <JavaScript />,
    <Npm />,
    <ReactIcon />,
    <Sass />,
    <VsCode />,
  ];
  return (
    <div className="expertise-section container">
      <h2 className="expertise-title">
        Explore My Diverse Range of &nbsp;
        <span className="highlight">Professional Skills</span> and
        <span className="highlight"> Expertise</span>
      </h2>

      <div className="expertise-wrapper">
        {techData.map((techData, index) => (
          <div className="tech" key={index}>
            {techData}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
