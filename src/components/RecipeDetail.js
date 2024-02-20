import React from "react";

const RecipeDetail = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h2>Recipe Detail</h2>
        <p>
          Detailed instructions, ingredients, preparation time, and user ratings for each recipe.
        </p>
      </div>
      <div className="recipe-detail">
        <h3>Recipe Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
          dolor.
        </p>
        <ul>
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          <li>Ingredient 3</li>
        </ul>
        <p>Preparation time: 30 minutes</p>
        <p>User rating: 4.5/5</p>
      </div>
    </div>
  );
};

export default RecipeDetail;