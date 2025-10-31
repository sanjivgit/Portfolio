import React from "react";
import "./skill.css";

function Skill() {
  return (
    <>
      <div className="skill">
        <h1 className="pList-title">Why Choose me</h1>
        <p className="pList-desc w-75 mx-auto my-5">
          I am a versatile software developer skilled in building comprehensive,
          full-stack solutions. My frontend expertise includes React.js,
          Next.js, and Typescript. On the backend, I am proficient with Node.js,
          Express.js, and databases such as MongoDB and Postgresql. This
          combination of skills enables me to tackle various aspects of the
          technology stack, ensuring efficient development and optimal
          performance for your projects..
        </p>
        <div className="row w-100 justify-content-center gap-4">
          <div className="col col-lg-5 col-md-5 col-sm-10">
            <span className="d-flex text-align-start">Web Development</span>
            <span className="progress"></span>
          </div>
          <div className="col col-lg-5 col-md-5 col-sm-10">
            <span className="d-flex text-align-start">Android Development</span>
            <span className="progress"></span>
          </div>
          <div className="col col-lg-5 col-md-5 col-sm-10">
            <span className="d-flex text-align-start">
              Full-Stack Development
            </span>
            <span className="progress"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
