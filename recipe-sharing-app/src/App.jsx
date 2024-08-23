import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './Components/RecipeDetails'
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
      <>
        <div>
          <AddRecipeForm/>
          <RecipeList/>
          <FavoritesList/>
          <RecommendationsList/>
        </div>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
            </Routes>
          </div>
        </Router>
      </>
    );
};
