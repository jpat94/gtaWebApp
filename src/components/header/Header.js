import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav 
      className="navbar fixed-top navbar-dark"
      style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">GTA Online Vehicle Database</a>
      </div>
    </nav>
  );
}

export default Header;
