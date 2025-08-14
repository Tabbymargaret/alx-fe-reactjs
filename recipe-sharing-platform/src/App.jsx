import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-green-300 font-bold'>
        Welcome to the Recipe Sharing Platform!
      </h1>
      <HomePage />
    </>
  )
}

export default App
