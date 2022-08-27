import React from 'react';
import '../styles/Resume.css'
import resume from '../images/Haley Hilton Zito (2).pdf';

export default function Resume() {
    return (
        <div>
        <section className="container">
            <a id="resume" />
            <div className="title">Resume</div>
            <div>{resume}</div>
        </section>
       
        </div>
    );
}

