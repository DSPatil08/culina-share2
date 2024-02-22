// src/pages/RecipeDetail.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import RecipeContext from '../RecipeContext';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { recipes, setFavorites } = useContext(RecipeContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Replace YOUR_APP_ID and YOUR_APP_KEY with your Edamam app ID and key
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=263c6717&app_key=4b4fa176947d935f6072108dceb115c0`
        );
        
        // Extract relevant data from the response (update accordingly)
        const recipesFromEdamam = response.data.hits.map(hit => ({
          id: hit.recipe.uri,
          title: hit.recipe.label,
          image: hit.recipe.image,
          dishTypes: hit.recipe.dishType,
          cuisines: hit.recipe.cuisineType,
          instructions: hit.recipe.ingredientLines.join('\n'),
        }));

        setFilteredRecipes(recipesFromEdamam);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    // Filter recipes based on search term
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, recipes]);

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    // Show success message (you can use state or another mechanism for this)
    alert('Recipe added to Favorites!');
  };

  return (
    <div className="recipe-container">
      <h2>Recipe Detail Page</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="recipe-cards">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-details">
              <p>Category: {recipe.dishTypes.join(', ')}</p>
              <p>Area: {recipe.cuisines.join(', ')}</p>
              <p>Ingredients: {recipe.instructions}</p>
            </div>
            <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetail;