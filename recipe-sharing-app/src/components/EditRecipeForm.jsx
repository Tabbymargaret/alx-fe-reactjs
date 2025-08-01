// components/EditRecipeForm.jsx
import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const EditRecipeForm = ({ recipe, onCancel }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients.join("\n"),
    instructions: recipe.instructions,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      id: recipe.id,
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients.split("\n"),
      instructions: formData.instructions,
    });
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Ingredients (one per line):</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>

      <div className="form-group">
        <label>Instructions:</label>
        <textarea
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
          rows={8}
        />
      </div>

      <div className="form-actions">
        <button type="submit">Save Changes</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EditRecipeForm;
