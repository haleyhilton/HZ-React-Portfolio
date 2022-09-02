import React from 'react';
import './style.css'
import resume from '../../images/Haley Hilton Zito (2).pdf';

export default function Contact() {
    return (
        <div>
        <section className="contact-container">
            <div className="title">Contact Me</div>
            <a id="contact-me" />
            <ul>
            <li>858-945-4569</li>
            <li>haleymariehilton@gmail.com</li>
            <li><a href="https://github.com/haleyhilton">Github</a></li>
            <li><a href="https://www.linkedin.com/in/haleyhilton/">LinkedIn</a></li>
            <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
        </section>
       
        </div>
    );
}

// export default Contact;