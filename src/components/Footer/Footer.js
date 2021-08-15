import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div>
        <a href="https://www.linkedin.com/in/justinpattersondev/">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="pad">About Me</span>
        </a>
        <span style={{padding: '10px'}}>|</span>
        <a href="https://github.com/jpat94/gtaWebApp">
          <FontAwesomeIcon icon={faGithub} />
          <span className="pad">Github Repository</span>
        </a>
        <span style={{padding: '10px'}}>|</span>
        <a href="https://www.youtube.com/channel/UCcZ3sRk9z6jjgfYQbMGTpig">
          <FontAwesomeIcon icon={faYoutube} />
          <span className="pad">Broughy1322</span>
        </a>
      </div>
      <div className="pad">
        <span className="pad">Created by Justin Patterson</span>
      </div>
    </div>
  );
}

export default Footer;
