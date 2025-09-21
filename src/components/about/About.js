import React, { useContext } from "react";
import "./about.css";
import AboutImg from "../../img/sanjiv.png";
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
          I'm a dedicated full-stack developer based in Jharkhand, India, with a
          Master's in Computer Application. I specialize in building robust and
          scalable web applications using React.js, Next.js, and Node.js.
        </p>
        <p className="about-desc">
          With strong command of both front-end and back-end technologies, I
          focus on creating intuitive user interfaces and efficient server-side
          logic. My goal is to build comprehensive, high-performance solutions
          that solve real-world problems.
        </p>
      </div>
    </div>
  );
}

export default About;
