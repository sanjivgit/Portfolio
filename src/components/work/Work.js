import React from "react";
import "./work.css";
import Card from "../card/Card";

function Work() {
  return (
    <div className="work">
      <h1 className="pList-title">What I Do</h1>
      <p className="pList-desc w-75 mx-auto my-5">
        I am a software developer with experience in both frontend and backend
        development. I have a solid academic foundation with a Master of
        Computer Application degree. In my professional roles, I've built robust
        server-side applications using Node.js and Express.js, where I've
        designed APIs, handled requests, and implemented business logic. On the
        frontend, I've used React.js and Redux to build responsive and scalable
        client-side applications. This dual expertise allows me to create
        comprehensive, end-to-end solutions.
      </p>
      <div className="row w-100 justify-content-center gap-4">
        <Card header="Web Developer" classname="bi bi-laptop" />
        <Card header="Android Developer" classname="bi bi-tablet" />
      </div>
    </div>
  );
}

export default Work;
