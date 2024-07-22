import { useState } from "react";
import "./App.css";

export default function App() {

  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter + 1);
  }

  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  ) 
}