import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" className="image" />
      <div className="f-content">
        <span>krishnadevbit@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/CoderKrishDev" target="_blank">
            <Github color="white" size="3rem" />
          </a>
          <a href="https://www.linkedin.com/in/krishdevsingh/" target="_blank">
            <LinkedIn color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
