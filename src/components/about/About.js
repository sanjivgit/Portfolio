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
          I'm an independent creative developer from Jharkhand, India. I build
          websites with a focus on responsive design and accessibility.
        </p>
        <p className="about-desc">
          I am a dedicated software developer based in Jharkhand, India, with a
          Master of Computer Application degree from Vinoba Bhave University.
          With over a year of experience, I specialize in full-stack
          development, with a focus on creating responsive and accessible web
          and mobile applications. My expertise includes a strong command of
          React.js, Next.js, and React Native for frontend development and
          Node.js, Express.js, and PostgreSQL for backend systems.
        </p>
        <p style={{ marginTop: "8px" }} className="about-desc">
          Throughout my career, I've contributed to a variety of projects, from
          engineering the frontend of an in-chat e-commerce app to developing
          APIs that streamline assessment and evaluation systems. At SHOECAB
          PVT. LTD, I optimized product catalog modules, which reduced product
          management time by 40%. At Aadrika Enterprises, I developed
          interactive dashboards to visualize financial data and budget reports
        </p>
        <p style={{ marginTop: "8px" }} className="about-desc">
          I am deeply committed to staying up-to-date with the latest
          advancements in software development. I actively engage with online
          communities, attend webinars, and explore new tools and technologies
          to enhance my skill set. My dedication to continuous learning reflects
          my eagerness to evolve alongside the rapidly changing tech landscape.
        </p>
      </div>
    </div>
  );
}

export default About;
