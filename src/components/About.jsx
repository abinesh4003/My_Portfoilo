import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Profile Section */}
        <div className="about-image">
          <img src="/abinesh.jpg" alt="Abinesh" />
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h2 className="about-title">👋 Hello, I'm <span>Abinesh</span></h2>
          <h3 className="about-subtitle">Creative Web Developer & Problem Solver</h3>
          <p className="about-text">
            I'm a passionate developer who loves crafting modern, high-performance, and 
            visually appealing websites. With expertise in <strong>React.js, Java, Spring Boot, and UI/UX</strong>,  
            I build seamless digital experiences that make an impact.
          </p>

          {/* Personal Info */}
          <div className="personal-info">
            <p><i className="fas fa-user"></i> <strong>Name:</strong> Abinesh</p>
            <p><i className="fas fa-envelope"></i> <strong>Email:</strong> abineshsmart322@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> Chennai, India</p>
            <p><i className="fas fa-phone"></i> <strong>Phone:</strong> +91 6379706755</p>
            <p><i className="fas fa-calendar"></i> <strong>Birthdate:</strong> September 12, 2002</p>
            <p><i className="fas fa-graduation-cap"></i> <strong>Education:</strong> B.E Computer Science (7.8 CGPA)</p>
            <p><i className="fas fa-language"></i> <strong>Languages:</strong> English, Tamil</p>
            <p><i className="fas fa-briefcase"></i> <strong>Experience:</strong> Fresher, Actively Seeking Opportunities</p>
            <p><i className="fas fa-heart"></i> <strong>Hobbies:</strong> Coding, Blogging, Traveling</p>
          </div>

          {/* Skills */}
          <h3 className="skills-title">🚀 My Skills</h3>
          <ul className="skills">
            <li>HTML & CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js </li>
            <li>Node.js & Express</li>
            <li>Spring Boot & MySQL</li>
            <li>Java (OOPs, Data Structures)</li>
            <li>Git & Github</li>
            <li>Problem Solving (DSA & Algorithms)</li>
          </ul>

          {/* Certifications & Courses */}
          <h3 className="courses-title">🎓 Certifications & Courses</h3>
          <ul className="courses">
            <li>React.js Frontend Development - iTech Software Academy</li>
            <li>Java, Spring Boot, MySQL - Besant Technologies</li>
          </ul>

          {/* Call to Action sdjfhsfsi*/}
          <a href="/contact" className="cta-btn">Let's Work Together</a>
        </div>
      </div>
    </section>
  );
};

export default About;
