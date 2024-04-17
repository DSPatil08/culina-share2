import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from '../RecipeContext';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { recipes, setFavorites } = useContext(RecipeContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=263c6717&app_key=4b4fa176947d935f6072108dceb115c0`
        );

        const recipesFromEdamam = response.data.hits.map(hit => ({
          id: hit.recipe.uri,
          title: hit.recipe.label,
          image: hit.recipe.image,
          dishTypes: hit.recipe.dishType,
          cuisines: hit.recipe.cuisineType,
          instructions: hit.recipe.ingredientLines,
        }));

        setFilteredRecipes(recipesFromEdamam);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, recipes]);

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    alert('Recipe added to Favorites!');
  };

  const toggleIngredients = (index) => {
    const newRecipes = [...filteredRecipes];
    newRecipes[index].showFullIngredients = !newRecipes[index].showFullIngredients;
    setFilteredRecipes(newRecipes);
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
        {filteredRecipes.map((recipe, index) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-details">
              <div className="recipe-title">
                <h3>{recipe.title}</h3>
                <span role="img" aria-label="Favorite" onClick={() => addToFavorites(recipe)}>❤️</span>
              </div>
              <img src={recipe.image} alt={recipe.title} />
              <p>Category: {recipe.dishTypes.join(', ')}</p>
              <p>Area: {recipe.cuisines.join(', ')}</p>
              <p>Ingredients:</p>
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

export default RecipeDetail;
