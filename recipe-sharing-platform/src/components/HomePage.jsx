import React from "react";
import Data from "../Data.json"; // Adjust path as needed

function HomePage() {
  const homepageRecipes = Data.recipes; // Access the recipes array

  return (
    <div>
      <h1 className="text-2xl font-bold">Home page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {homepageRecipes.map((recipe) => (
          <div
            key={recipe.id}
            className="w-fit shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-2xs h-2xs rounded-b-sm hover:scale-105 transition-transform duration-200"
            />
            <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
            <p className="text-gray-600 mt-1">{recipe.description}</p>
            <p className="text-shadow-amber-100 text-0.5xl">{ recipe.summary }</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
