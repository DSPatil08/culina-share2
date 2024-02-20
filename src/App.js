import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import Contribute from "./components/Contribute";
import Favorites from "./components/Favorites";
import AboutUs from "./components/AboutUs";
import "./App.css";

function App() {
  return (
    <Router>
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </div>
</Router>
  );
}

export default App;