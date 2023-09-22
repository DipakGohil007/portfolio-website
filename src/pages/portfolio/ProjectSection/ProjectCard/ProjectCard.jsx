import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = ({
  ProjectTitle,
  SubTitle,
  Description,
  ProjectLink,
  ProjectImg,
}) => {
  return (
    <div className="project-card">
      <p className="sub-title">{SubTitle}</p>
      <h3 className="project-title">{ProjectTitle}</h3>
      <div className="project-desc">
        <p className="description">{Description}</p>
        <Link to={ProjectLink} className="visit-link" target="_blank">
          Visit Site
        </Link>
      </div>
      <div className="project-img">
        {<img src={ProjectImg} alt="ExStore" />}
      </div>
    </div>
  );
};

export default ProjectCard;
