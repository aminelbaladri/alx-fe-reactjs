import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetails from "./components/RecipeDetail";
import AddRecipeForms from "./components/AddRecipeForm";
import "./index.css";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/addrecipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  )
}
export default App;