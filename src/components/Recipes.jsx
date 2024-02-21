import React from 'react';
import './Recipes.css';

const Recipes = ({ recipes }) => {
  return (
    <div className="recipes">
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.recipe}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;