import DeleteRecipeButton from "./DeleteRecipeButton";
import EditRecipeForm from "./EditRecipeForm";
import useRecipeStore from "./recipeStore";
import { useParams, Link } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );
  
    if (!recipe) return <div>Recipe not found</div>;
  
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    );
  };
  
  export default RecipeDetails;