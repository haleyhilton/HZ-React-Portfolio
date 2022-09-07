import React from 'react';
import './Header.css';
import resume from '../../images/Haley Hilton Zito (2).pdf'

const Header = ({ currentPage, handlePageChange }) => {
  return (
      
    <div >
      <div class="header-container">
        <a class="navbar-brand navbar-custom navbar-text" href="/">Haley Hilton Zito</a> </div>


        <nav className="navbar  navbar-expand-lg text-uppercase fixed-top" id="mainNav">
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        > Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        > Work
        </a>
      </li>
      <li className="nav-item">
        <a href={resume} target="_blank" rel="noreferrer"
        className={ 'nav-link active' }
        > Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        > Contact
        </a>
      </li>
    </ul>
    </nav>
   
   
    <header class="masthead text-center">
    <div class="container d-flex align-items-center flex-column">

        
            
        <h1 class="masthead-heading text-uppercase mb-0"> Future Project Manager </h1> 
        <h3 class="masthead-subheading  mb-0"></h3>

        
        <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
        
        </div>
        
        </div>
</header>
     </div>

    
    
  );
};


export default Header;
