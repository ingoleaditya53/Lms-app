import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
