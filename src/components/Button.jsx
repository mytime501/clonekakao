import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button className="auth-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
