import React from "react";
import "./work.css";
import Card from "../card/Card";

function Work() {
  return (
    <div className="work">
      <h1 className="pList-title">What I Do</h1>
      <p className="pList-desc w-75 mx-auto my-5">
        I build dynamic, end-to-end web solutions, from concept to deployment.
        My expertise includes:
      </p>
      <ul className="list">
        <li>
          <strong>Front-End Development :</strong> Crafting responsive and
          user-friendly interfaces with modern frameworks like React.js and
          Next.js.
        </li>
        <li>
          <strong>Back-End Development :</strong> Developing robust server-side
          applications and APIs using Node.js and Express.js.
        </li>
        <li>
          <strong>Database Management :</strong> Designing and managing
          databases to ensure data integrity and efficient performance.
        </li>
        <li>
          <strong>AI Integration :</strong> Integrating state-of-the-art machine
          learning models by ingesting models from Hugging Face to add
          functionalities like natural language processing (NLP), text
          generation, and more.
        </li>
        <li>
          <strong>Full-Stack Solutions :</strong> Seamlessly integrating all
          layers of an application to deliver a complete, high-quality product.
        </li>
      </ul>
      <div className="row w-100 justify-content-center gap-4">
        <Card header="Web Developer" classname="bi bi-laptop" />
        <Card header="Android Developer" classname="bi bi-tablet" />
      </div>
    </div>
  );
}

export default Work;
