import { useState } from 'react'
import RecipeList from "./components/RecipeList.jsx"
import AddRecipeForm from "./components/AddRecipeForm.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Welcome to zustand</h1>
        <AddRecipeForm/>
        <RecipeList/>
      </div>
    </>
  );
}

export default App
