import React, { useContext, useState } from 'react';
import ContributionContext from '../ContributionContext';
import './Contribute.css';

const Contribute = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    photo: null,
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const { setUserContribution } = useContext(ContributionContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      photo: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.title || !recipe.ingredients || !recipe.instructions || !recipe.photo) {
      setSubmitStatus('failure');
      return;
    }

    setUserContribution(recipe);

    setRecipe({ title: '', ingredients: '', instructions: '', photo: null });
    setSubmitStatus('success');
  };

  const handleChoosePhoto = () => {
    document.getElementById('photo').click();
  };

  return (
    <div className="contribute-container">
      <h2>Contribute Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="photo" className="select-photo-label">Select Photo:</label>
        <div className="photo-container">
          {recipe.photo && (
            <img src={URL.createObjectURL(recipe.photo)} alt="Selected" className="preview-image" />
          )}
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoChange}
            className="photo-input"
            style={{ display: 'none' }}
          />
        </div>
        <button type="button" onClick={handleChoosePhoto} className="choose-photo-button">
          Choose Photo
        </button>
        <label htmlFor="title">Recipe Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={recipe.title}
          onChange={handleChange}
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="instructions">Instructions:</label>
        <textarea
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {submitStatus && (
        <div className={`submit-message ${submitStatus}`}>
          {submitStatus === 'success'
            ? 'Recipe submitted successfully!'
            : 'All fields including the photo are required. Please fill in all details.'}
        </div>
      )}
    </div>
  );
};

export default Contribute;
