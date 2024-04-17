import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContributionContext from './ContributionContext';
import RecipeContext from './RecipeContext';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Contribute from './pages/Contribute';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import MyContributions from './pages/MyContributions';
import RecipeDetail from './pages/RecipeDetail';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [userContribution, setUserContribution] = useState(null);
  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, favorites, setFavorites}}>
      <ContributionContext.Provider value={{ userContribution, setUserContribution }}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<LoginSignup />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/recipe-detail" element={<RecipeDetail />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/my-contributions" element={<MyContributions />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </Router>
      </ContributionContext.Provider>
    </RecipeContext.Provider>
  );
};

export default App;
