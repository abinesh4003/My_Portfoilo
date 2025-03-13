import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "../Styles/Education.css";

const educationData = [
  {
    year: "SSLC (74%)",
    institution: "St Joseph's Hr Sec School",
    details: "Completed SSLC with 74% in core subjects.",
  },
  {
    year: "HSC (85%)",
    institution: "St Joseph's Hr Sec School",
    details: "Higher Secondary with 85% in Maths & Biology.",
  },
  {
    year: "BE CSE (7.8 CGPA)",
    institution: "University College Of Engineering",
    details: "Bachelor of Engineering in CSE with 7.8 CGPA.",
  },
  {
    year: "React.js Frontend Development",
    institution: "iTech Software Academy",
    details: "Certified in React.js frontend development.",
  },
  {
    year: "Java, Spring Boot, MySQL",
    institution: "Besant Technologies",
    details: "Completed backend training in Java, Spring Boot & MySQL.",
  },
];

const Education = () => {
  return (
    <section className="education-section">
      <h2 className="section-title">Educations</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>{edu.year}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
