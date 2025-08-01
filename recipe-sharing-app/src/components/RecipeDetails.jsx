// components/RecipeDetails.jsx
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p className="description">{recipe.description}</p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <ol>
        {recipe.instructions.split("\n").map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div className="recipe-actions">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
        <Link to="/" className="back-link">
          ← Back to all recipes
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
