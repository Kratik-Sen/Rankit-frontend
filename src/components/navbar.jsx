import React, { useEffect, useState } from 'react';
import SimpleMenu from './menu.jsx';
import './navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="top">
      <div className="menu">
        <SimpleMenu />
      </div>

      <div className="head">
        <div className="heading">Rankit</div>
      </div>

      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
