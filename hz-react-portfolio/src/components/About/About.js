import React from 'react';
import './About.css';
import Headshot from "./Assets/Images/about.jpg"


export default function About() {
  return (
    <div className='row about-container'>
      <div className=" column left">
        <h3>Haley Hilton Zito</h3>
      <p>
      My name is Haley and I'm currently a performance coach for twelve retail managers nationally, and an
                aspiring software developer.
                I have extensive experience in project management and staff leadership in B2B technology, e-commerce and
                DTC.
                My innate love of problem-solving and my experience working with brands at the forefront of their
                industries, were the catalyst for my continued learning of software development.
                The ability to enhance experiences and my desire to leave things better than I found them, are what led
                me to pursue a career.
      </p>
      </div>
      <div className="column right">
      <img className='headshot' src={Headshot} alt=""/>     
      </div>

    </div>
  );
}