import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import FavoritesPage from './pages/FavoritesPage.jsx';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:url" element={<ArticlePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;