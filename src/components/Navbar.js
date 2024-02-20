import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/">CulinaShare</a>
      </div>
      <div className={`links ${isOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/recipes">Recipes</a>
        <a href="/contribute">Contribute</a>
        <a href="/favorites">Favorites</a>
        <a href="/about">About Us</a>
      </div>
      <div className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas fa-bars ${isOpen ? "fa-times" : ""}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;