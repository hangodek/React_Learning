import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1>Hello, {name}</h1>
      <input type="text" value={name} onChange={handleName}/>
    </>
  )
}