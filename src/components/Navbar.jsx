import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/recipes">Recipes</a>
        </li>
        <li>
          <a href="/contribute">Contribute</a>
        </li>
        <li>
          <a href="/favorites">Favorites</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;