import React, { useContext } from 'react';
import ContributionContext from '../ContributionContext';
import './MyContributions.css';

const MyContributions = () => {
  const { userContribution } = useContext(ContributionContext);

  return (
    <div className="my-contributions-container">
      <h2>My Contributions</h2>
      {userContribution ? (
        <div className="contribution-card">
          <div className="contribution-image-container">
            <img
              src={URL.createObjectURL(userContribution.photo)}
              alt="Contributed Recipe"
              className="contribution-image"
            />
          </div>
          <div className="contribution-details">
            <h3>{userContribution.title}</h3>
            <p>
              <strong>Ingredients:</strong>
              <br />
              {userContribution.ingredients}
            </p>
            <p>
              <strong>Instructions:</strong>
              <br />
              {userContribution.instructions}
            </p>
          </div>
        </div>
      ) : (
        <p>You haven't contributed any recipes yet.</p>
      )}
    </div>
  );
};

export default MyContributions;
