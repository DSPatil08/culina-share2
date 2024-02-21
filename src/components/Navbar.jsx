// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/recipe-detail">Recipe Detail</Link>
      <Link to="/contribute">Contribute</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about-us">About Us</Link>
    </nav>
  );
};

export default Navbar;
