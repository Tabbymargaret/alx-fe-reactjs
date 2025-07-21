import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count + 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <>
      <div>
        <button
          onClick={Increment}
          style={{ color: "aqua", marginRight: "5px" }}
        >
          Increment
        </button>
        <button
          onClick={Decrement}
          style={{ color: "aqua", marginRight: "5px" }}
        >
          Decrement
        </button>
        <button onClick={Reset} style={{ color: "aqua", marginRight: "5px" }}>
          Reset
        </button>
        <p>Count: {count}</p>
      </div>
    </>
  );
}
