import React from "react";
import "../Styles/Home.css";  // Ensure this file path is correct

const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="content">
        <h1>Hi, I'm <span className="highlight">ABINESH</span></h1>
        <h2>A Passionate <span className="role">Web Developer</span></h2>
        <p>
          I build modern, user-friendly, and high-performance websites 
          with the latest web technologies. Let's create something amazing together!
        </p>
        <a href="/projects" className="cta-btn">View My Work</a>
      </div>
    </div>
  );
};

export default Home;
