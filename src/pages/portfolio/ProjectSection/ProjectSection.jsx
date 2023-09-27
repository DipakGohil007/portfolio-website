import React from "react";
import "./ProjectSection.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import { images } from "../../../assets/images/images";

const ProjectSection = () => {
  const projectData = [
    {
      ProjectTitle: "Two Good Co",
      SubTitle: "Featured Project",
      Description:
        "Two Good Co is a web project I've been working on, using HTML, SCSS, JavaScript, and some fantastic libraries like GSAP and Locomotive. While the entire project was a fantastic learning experience.",
      ProjectLink: "https://two-good-co.netlify.app/",
      ProjectImg: images.TwoGoodCo,
    },
    {
      ProjectTitle: "exStore",
      SubTitle: "Featured Project",
      Description:
        "Developed exStore, a dynamic Xbox game website using React, showcasing a wide range of Xbox games. Leveraged the power of Ant Design (antd) components for a polished user interface and utilized SCSS for efficient styling.",
      ProjectLink: "https://ex-store.onrender.com",
      ProjectImg: images.ExStore,
    },
    {
      ProjectTitle: "Codext",
      SubTitle: "Featured Project",
      Description:
        "Crafted an engaging React and SCSS-powered landing page 'Codext', seamlessly blending modern web technologies for an immersive user experience. A testament to strong front-end development skills.",
      ProjectLink: "https://codext.onrender.com",
      ProjectImg: images.Codext,
    },
    {
      ProjectTitle: "HomeStack",
      SubTitle: "Featured Project",
      Description:
        "Developed a captivating landing page using React and SCSS, Leveraged modern web technologies to create an immersive web experience, demonstrating strong front-end development skills.",
      ProjectLink: "https://home-stack.onrender.com/",
      ProjectImg: images.HomeStack,
    },
  ];

  return (
    <div className="project-section container">
      <h2 className="section-title" data-aos="fade-up">
        My <span className="highlight">Projects</span>
      </h2>
      {projectData.map((projectData, index) => (
        <ProjectCard
          key={index}
          ProjectTitle={projectData.ProjectTitle}
          SubTitle={projectData.SubTitle}
          Description={projectData.Description}
          ProjectLink={projectData.ProjectLink}
          ProjectImg={projectData.ProjectImg}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
