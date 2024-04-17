import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to CulinaShare</h1>
        <p>Explore a world of delicious recipes and culinary inspiration.</p>
        <Link to="/recipe-detail">
        <button className="cta-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
