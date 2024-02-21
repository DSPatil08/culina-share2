import React, { useState } from 'react';
import './Contribute.css';

const Contribute = ({ setRecipes }) => {
  const [name, setName] = useState('');
  const [recipe, setRecipe] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit the recipe to the server
    // display success message after successful submission
    setMessage('Your recipe has been submitted successfully!');
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { name, recipe },
    ]);
  };

  return (
    <div className="contribute-container">
      <h1 className="contribute-title">Contribute a Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="contribute-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contribute-input"
        />
        <label htmlFor="recipe" className="contribute-label">Recipe:</label>
        <textarea
          id="recipe"
          name="recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          className="contribute-textarea"
        />
        <button type="submit" className="contribute-button">Submit</button>
      </form>
      {message && <p className="contribute-message">{message}</p>}
    </div>
  );
};

export default Contribute;