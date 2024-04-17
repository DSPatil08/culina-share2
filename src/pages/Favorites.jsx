import React, { useContext } from 'react';
import RecipeContext from '../RecipeContext';
import './Favorites.css';

const Favorites = () => {
  const { favorites } = useContext(RecipeContext);

  return (
    <div className="favorites-container">
      <h2>Favorites Page</h2>
      <div className="favorite-cards">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="favorite-card">
            <h3 className="recipe-title">{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-details">
              <p className="category">Category: {recipe.dishTypes.join(', ')}</p>
              <p className="area">Area: {recipe.cuisines.join(', ')}</p>
              <p className="ingredients">Ingredients:</p>
              <div className={`ingredients-container ${recipe.showFullIngredients ? 'expanded' : ''}`}>
                {recipe.instructions.map((ingredient, idx) => (
                  <p key={idx}>{ingredient}</p>
                ))}
              </div>
              <button className="read-more-button" onClick={() => toggleIngredients(index)}>
                {recipe.showFullIngredients ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
