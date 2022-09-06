import React from 'react';
import './style.css'
import resume from '../../images/Haley Hilton Zito (2).pdf';
import Image from "../../images/oaxaca.jpg"

export default function Contact() {
    return (
        <div class='container'>
            {/* <img src={Image} alt="Image of Contact" /> */}
        

        <div class="contact-container">
        <img src={Image} alt="Image of Contact" />
        <a class="btn btn-outline-light btn-social mx-1 btn-one" href="#!"><i
                            class="fa-regular fa-envelope"></i></a>
        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i
                            class="fa-regular fa-phone btn-two"></i></a>
        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i
                            class="fab fa-fw fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="#!"><i
                            class="fab fa-fw fa-linkedin-in"></i></a>
        {/* <FontAwesomeIcon icon="fa-regular fa-envelope btn-one" />
        <FontAwesomeIcon icon="fa-regular fa-phone btn-two" />            
        <FontAwesomeIcon icon="fa-brands fa-github" href="https://github.com/haleyhilton"/> 
        <FontAwesomeIcon icon="fa-brands fa-linkedin" href="https://www.linkedin.com/in/haleyhilton/" />
        <FontAwesomeIcon icon="fa-light fa-file"  href={resume} target="_blank" rel="noreferrer" /> */}

        
        </div>
</div>
        

       
        
    );
}

// export default Contact;