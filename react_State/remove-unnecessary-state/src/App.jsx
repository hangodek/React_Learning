import { useState } from "react";
import "./App.css";

export default function App() {
  let name;

  function handleClick() {
    name = prompt('What is your name?');
    alert(`Hello, ${name}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}