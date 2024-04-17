import React, { createContext, useState } from 'react';

const ContributionContext = createContext();

export const ContributionProvider = ({ children }) => {
  const [userContribution, setUserContribution] = useState(null);

  const contextValue = {
    userContribution,
    setUserContribution
  };

  return React.createElement(
    ContributionContext.Provider,
    { value: contextValue },
    children
  );
};

export default ContributionContext;
