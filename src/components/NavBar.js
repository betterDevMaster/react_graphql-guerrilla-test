// components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="/images/logo1.png" alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
