// src/pages/Favorites.jsx
import React, { useContext } from 'react';
import RecipeContext from '../RecipeContext';

const Favorites = () => {
  const { recipes, favorites } = useContext(RecipeContext);
  const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id));

  return (
    <div>
      <h2>Favorites Page</h2>
      {favoriteRecipes.length > 0 ? (
        <ul>
          {favoriteRecipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes yet. Start favoriting recipes on the Recipe Detail page!</p>
      )}
    </div>
  );
};

export default Favorites;
