// src/pages/Favorites.jsx
import React, { useContext } from 'react';
import RecipeContext from '../RecipeContext';
import './Favorites.css'; // Import your Favorites styles

const Favorites = () => {
  const { favorites } = useContext(RecipeContext);

  return (
    <div className="favorites-container">
      <h2>Favorites Page</h2>
      <div className="favorite-cards">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-details">
              <p>Category: {recipe.dishTypes.join(', ')}</p>
              <p>Area: {recipe.cuisines.join(', ')}</p>
              <p>Instructions: {recipe.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
