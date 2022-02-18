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
          "I'm an independent creative developer from Jharkhand, India. I build
          websites with a focus on responsive design and accessibility."
        </p>

        <p className="about-desc">
          A postgraduate pursuing MCA from Vinoba Bhave University Hazaribagh. I
          am a passionate learner and like exploring new stuffs. I always wish
          to indulge myself in optimal work to achieve my goal and i am
          currently looking for a full stack developer job. I am fresher but I
          do some projects using MERN. If anyone knows for full stack developer
          where I would be a good fit, I appreciate it if you could send them my
          way.
        </p>
      </div>
    </div>
  );
}

export default About;
