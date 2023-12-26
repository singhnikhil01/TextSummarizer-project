import React from 'react';
import './Navbar.css';
import Logo from '../Logo';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className='navbar-item'>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
