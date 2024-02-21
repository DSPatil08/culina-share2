// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipeDetail from './pages/RecipeDetail';
import Contribute from './pages/Contribute';
import AboutUs from './pages/AboutUs';
import RecipeContext from './RecipeContext';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <Router>
      <RecipeContext.Provider value={{ recipes, setRecipes }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-detail" element={<RecipeDetail />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </RecipeContext.Provider>
    </Router>
  );
};

export default App;
