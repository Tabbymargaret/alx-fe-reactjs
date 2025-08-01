// components/DeleteRecipeButton.jsx
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../store/useRecipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId);
      navigate("/"); // Redirect to home after deletion
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
