import React from 'react'
import "./work.css";
import Card from '../card/Card';

function Work() {
    return (
        <div className='work'>
            <h1 className='pList-title'>What I Do</h1>
            <p className="pList-desc w-75 mx-auto my-5">I am currently undergoing an internship where I am actively involved in various aspects of the development process. On the backend, I work with Node.js and Express.js to build robust and scalable server-side applications. This involves designing APIs, handling requests and responses, and implementing intricate business logic to ensure the smooth functioning of applications. And on the frontend, I work with React js & Redux to build responsive and scalable client-side application.</p>
            <div
                className='row w-100 justify-content-center gap-4'
            >
                <Card header="Web Developer" classname="bi bi-laptop" />
                <Card header="Android Developer" classname="bi bi-tablet" />
            </div>
        </div>
    )
}

export default Work