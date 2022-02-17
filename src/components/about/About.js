import React, { useContext } from "react";
import "./about.css";
import AboutImg from "../../img/about-img.jpg";
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          quisquam quia earum quasi.
        </p>
        <p className="about-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quibusdam
          eius dolorem qui iste perferendis animi vel iure suscipit, aspernatur
          et accusamus repellat minima commodi delectus officiis optio nobis
          quidem.
        </p>
      </div>
    </div>
  );
}

export default About;
