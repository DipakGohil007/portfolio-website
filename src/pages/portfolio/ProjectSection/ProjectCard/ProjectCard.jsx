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
    <div
      className="project-card"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-offset="0"
    >
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
