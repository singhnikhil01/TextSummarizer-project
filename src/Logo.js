import React from 'react';
import './Logo.css';
import img1 from "./assests/whiteLogo.png"

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={img1} alt='logo' />
    </div>
  );
};

export default Logo;
