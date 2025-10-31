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
          Full-Stack Developer with 3+ years of experience in building scalable
          web and mobile applications. Skilled in React.js, Next.js, React
          Native, Node.js, Express.js, PostgreSQL, MongoDB, and tools like
          Docker, Redis, RabbitMQ, and Prisma ORM.
        </p>
        <p className="about-desc">
          I have contributed to projects such as an in-chat e-commerce platform,
          a receipt & budget management system, and an AI-powered food
          classifier API using FastAPI & Hugging Face.
        </p>
        <p className="about-desc">
          Passionate about clean architecture, problem-solving, and AI
          integration, with a strong learning mindset and ability to adapt
          quickly to new technologies.
        </p>
        <p className="about-desc">
          My core stack includes: React.js, React Native, Redux, Next.js,
          JavaScript (ES6+), TypeScript, HTML/CSS, Tailwind CSS, Material UI,
          RESTful APIs, GraphQL, NodeJs, Express.Js, Postgresql, MongoDB, gRPC,
          RabbitMQ, Redis, JWT Auth, Git/GitHub.
        </p>
        <p className="about-desc">
          I'm currently looking for a new Full-Stack Developer role where I can
          bring my skills in React/Next js, Nodejs/Expressjs and performance
          optimization to an innovative team and continue to learn and grow.
          <br />
          Feel free to reach out – I'd love to chat! <br /> 📧
          sanjiv2101@gmail.com <br /> 🔗 Portfolio:
          https://sanjiv-s-portfolio-d7e12.web.app/ <br />
          🐙 GitHub: https://github.com/sanjivgit
        </p>
        <p className="about-sub">
          #ReactJS #Frontend #JavaScript #TypeScript #NextJS #WebDeveloper
          #Performance #UIUX #TechJobs #OpenToWork
        </p>
      </div>
    </div>
  );
}

export default About;
