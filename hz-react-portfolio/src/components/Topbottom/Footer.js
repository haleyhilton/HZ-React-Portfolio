import React from 'react';
import './Footer.css';


function Footer () {
    return (
      <div>
       <footer className="footer text-center socialLinks">

        <h2>Get In Touch</h2><br /><br />
        <a className='footer-email' href=" mailto: haleymariehilton@gmail.com">haleymariehilton@gmail.com</a>
                <div className="links">
                    <a className="btn btn-outline-light btn-social" href="https://linkedin.com/in/haleyhilton"><i
                            className="fab fa-fw fa-linkedin-in"></i></a><br /><br />
                    <a className="btn btn-outline-light btn-social" href="https://github.com/haleyhilton"><i
                            className="fa-brands fa-github"></i></a>        
                    <a className="btn btn-outline-light btn-social" href=" mailto: haleymariehilton@gmail.com"><i
                            className="fa-solid fa-envelope"></i></a>
                   

          </div>

      </footer>
    </div>
    )
}





export default Footer;