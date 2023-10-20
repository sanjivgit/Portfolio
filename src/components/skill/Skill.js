import React from 'react'
import "./skill.css"

function Skill() {
    return (
        <div className='skill'>
            <h1 className='pList-title'>Why Choose me</h1>
            <p className="pList-desc w-75 mx-auto my-5">My proficiency in both frontend (React.js) and backend (Node.js, Express.js) technologies allows me to contribute effectively to the entire development cycle. This ensures seamless communication between different parts of your application. my expertise in React.js, MongoDB, Node.js, and Express.js makes me a valuable asset for your projects. I can contribute to efficient development, robust database management, optimal performance, and end-to-end solutions. Choosing me would mean benefiting from a versatile and knowledgeable developer who can tackle various aspects of your technology needs.</p>
            <div
                className='row w-100 justify-content-center gap-4'
            >
                <div className='col col-lg-5 col-md-5 col-sm-10' >
                    <span className='d-flex text-align-start' >Web Development</span>
                    <span className='progress'></span>
                </div>
                <div className='col col-lg-5 col-md-5 col-sm-10' >
                    <span className='d-flex text-align-start' >Android Development</span>
                    <span className='progress' ></span>
                </div>
                <div className='col col-lg-5 col-md-5 col-sm-10' >
                    <span className='d-flex text-align-start' >Full-Stack Development</span>
                    <span className='progress' ></span>
                </div>
            </div>
        </div>
    )
}

export default Skill