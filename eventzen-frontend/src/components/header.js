import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>EventZen</h1>
      <nav>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/event-details" className={({ isActive }) => isActive ? "active" : ""}>Event Details</NavLink></li>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
          <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
          <li><NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>Signup</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;






