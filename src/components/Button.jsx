import React from 'react';

const Button = ({ children, onClick, className = '' }) => (
  <button onClick={onClick} className={`px-3 sm:px-4 md:px-6 py-2 rounded ${className}`}>
    {children}
  </button>
);

export default Button;
