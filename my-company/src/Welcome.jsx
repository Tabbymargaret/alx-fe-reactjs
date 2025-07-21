import React from 'react'
import { useState } from 'react'
function Welcome() {
    const [count, setCount] = useState(0);
    function increase() {
      setCount(count + 1);
    }
  return (
    <div>
      <h2>Welcome to my company</h2>
      <button onClick={increase}>Count:{count}</button>
    </div>
  );
}

export default Welcome
