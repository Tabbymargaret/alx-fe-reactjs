// components/RecipeList.jsx
import { Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-list">
      <h1>My Recipes</h1>
      <Link to="/add-recipe" className="add-button">
        Add New Recipe
      </Link>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h2>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} className="view-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
