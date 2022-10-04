import React from 'react';
import './Header.css';
import resume from './Assets/Images/Haley-Zito-Resume.pdf';
import brand from './Assets/Images/HHZ-brand.png'

const Header = ({ currentPage, handlePageChange }) => {
  return (
      
    <div className='header-container'>

        <nav className="navbar  navbar-expand-lg text-uppercase fixed-top" id="mainNav">
        <a className="navbar-brand" href="#"> <img src={brand} width="50" height="50" alt=""/></a>
        <ul className="nav">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        > About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        > Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        > Say Howdy
        </a>
      </li>
      <li className="nav-item">
        <a href={resume} target="_blank" rel="noreferrer"
        className={ 'nav-link active' }
        > Resume
        </a>
      </li>
    </ul>
    </nav>
     </div>

    
    
  );
};


export default Header;
