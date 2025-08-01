// store/useRecipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish",
      ingredients: ["pasta", "eggs", "bacon", "cheese"],
      instructions: "Cook pasta, mix with eggs and bacon, top with cheese",
    },
  ],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...newRecipe, id: Date.now() }],
    })),

  // Delete a recipe by ID
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
}));

export default useRecipeStore;
