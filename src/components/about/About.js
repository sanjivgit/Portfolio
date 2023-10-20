import React, { useContext } from "react";
import "./about.css";
import AboutImg from "../../img/sanjiv.jpg";
import { ThemeContext } from "../../context";

function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about">
      <div className="about-left">
        <div
          className="about-card about-bg"
          style={{ backgroundColor: darkMode && "#c0bebe" }}
        ></div>
        <div className="about-card">
          <img className="about-img" src={AboutImg} alt="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          I'm an independent creative developer from Jharkhand, India. I build
          websites with a focus on responsive design and accessibility.
        </p>
        <p className="about-desc">
          Hello! My name is Sanjiv, and I am a dedicated and passionate software developer with a Master of Computer Application degree. With a solid academic foundation and a year of hands-on experience as an intern, I have honed my skills in a range of technologies, including React.js, Node.js, Express.js, and MongoDB.
        </p>
        <p style={{ marginTop: "8px" }} className="about-desc">
          During my year-long internship as a software developer, I had the privilege to work on projects that spanned the software development. I actively contributed to the development of web applications, gaining valuable insight into best practices and collaboration techniques. My responsibilities included developing responsive user interfaces using React.js, creating server-side logic with Node.js and Express.js, and designing and managing databases using MongoDB. These experiences have equipped me with a deep understanding of how to create efficient, scalable, and user-friendly applications.
        </p>
        <p style={{ marginTop: "8px" }} className="about-desc">
          I am deeply committed to staying up-to-date with the latest advancements in software development. I actively engage with online communities, attend webinars, and explore new tools and technologies to enhance my skill set. My dedication to continuous learning reflects my eagerness to evolve alongside the rapidly changing tech landscape.
        </p>
      </div>
    </div>
  );
}

export default About;
