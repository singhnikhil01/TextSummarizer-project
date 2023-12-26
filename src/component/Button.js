// Button.js

import React from 'react';

const Button = ({ type, disabled, loading, children }) => {
  const buttonStyle = loading ? { background: "#8cc98e" } : {};

  return (
    <button type={type} disabled={disabled} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
