// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Contribute from './pages/Contribute';
import Favorites from './pages/Favorites';
import AboutUs from './pages/AboutUs';
import RecipeContext from './RecipeContext';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, favorites, setFavorites}}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/recipe-detail" element={<RecipeDetail />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </RecipeContext.Provider>
  );
};

export default App;
