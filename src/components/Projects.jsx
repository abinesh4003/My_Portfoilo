import React from "react";
import "../Styles/Projects.css";

const projects = [
  {
    title: "Blood Donation System",
    description:
      "A web application to manage blood donations, built with React, Node.js, and MySQL.",
    technologies: ["React", "Node.js", "MySQL"],
    link: "#",
  },
  {
    title: "Uber Ride System",
    description:
      "A console-based Java application for booking and managing Uber rides.",
    technologies: ["Java", "OOP", "Console Application"],
    link: "#",
  },
  {
    title: "Student Management System",
    description:
      "A React and Spring Boot-based system for managing student data efficiently.",
    technologies: ["React", "Spring Boot", "MySQL"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <a href={project.link} className="view-project">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;