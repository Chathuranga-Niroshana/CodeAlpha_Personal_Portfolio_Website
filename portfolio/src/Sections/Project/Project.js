import React from "react";
import STM from "../../Assests/Project1/Screenshot (82).png";
import LBMS from "../../Assests/Project1/Screenshot (83).png";
import ECOM from "../../Assests/Project1/Screenshot (84).png";
import TDL from "../../Assests/Project1/Screenshot (85).png";

const Project = () => {
  const projects = [
    {
      title: "Student & Teacher Management System",
      description:
        "Student and Teacher Management Web System for educational institutes using MERN Stack. Allows entering, updating, and deleting data. Code uploaded to GitHub.",
      image: STM,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/Student-And-Teacher-Management-System",
    },
    {
      title: "Library Book Management System",
      description:
        "Project using MERN Stack for managing books in the library. Code uploaded to GitHub.",
      image: LBMS,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/Book-Management-System",
    },
    {
      title: "E-Commerce Store",
      description:
        "Project using MERN Stack for online shopping. Code uploaded to GitHub.",
      image: ECOM,
      githubLink:
        "https://github.com/Chathuranga-Niroshana/Ecommerce-Store-Web-App-",
    },
    {
      title: "To-Do List",
      description: "Simple React JS Project. Code uploaded to GitHub.",
      image: TDL,
      githubLink: "https://github.com/Chathuranga-Niroshana/To-do-List",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectcontainer">
        {projects.map((project, index) => (
          <div className="project1" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt="" />
            <br />
            <br />
            <a href={project.githubLink}>
              <button style={{ fontSize: "24px" }}>
                Go To Code <i className="fa fa-github"></i>
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
