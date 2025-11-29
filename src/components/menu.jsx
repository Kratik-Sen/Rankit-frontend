import React, { useState } from 'react';
import './menu.css';
import { useNavigate } from 'react-router-dom';


export default function SimpleMenu() {
  const [open, setOpen] = useState(false);
const navigate = useNavigate()


  return (
    <div className="menu-wrapper">
      <button onClick={() => setOpen(!open)}>Menu</button>
      {open && (
        <div className="dropdown">
          <div onClick={() => navigate('/')}>Home</div>
          <div onClick={() => navigate('/leaderboard')}>Leaderboard</div>
          <div onClick={() => navigate('/form')}>Add image</div>
        </div>
      )}
    </div>
  );
}
