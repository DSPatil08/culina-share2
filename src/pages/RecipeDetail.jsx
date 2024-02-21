// src/pages/RecipeDetail.jsx
import React, { useContext } from 'react';
import RecipeContext from '../RecipeContext';

const RecipeDetail = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <h2>Recipe Detail Page</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.title}</h3>
              <p>Ingredients: {recipe.ingredients}</p>
              <p>Instructions: {recipe.instructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes available. Contribute and add your first recipe!</p>
      )}
    </div>
  );
};

export default RecipeDetail;
