import React from "react";

const Home = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>Discover Recipes</h2>
        <p>
          Explore a wide variety of recipes, from vegetarian to quick meals and desserts.
        </p>
      </div>
      <div className="recipe-list">
        {/* Render recipe cards here */}
      </div>
    </div>
  );
};

export default Home;