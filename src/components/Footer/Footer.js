import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      Created by Justin Patterson
      <a href="https://gitlab.com/_JPat_/gta-web-app"><FontAwesomeIcon icon={faGitlab} /></a>
    </footer>
  );
}

export default Footer;
