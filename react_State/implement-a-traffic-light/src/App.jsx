import { useState } from "react";
import "./App.css";

export default function App() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    if (walk) {
      alert("Stop is next");
    } else {
      alert("Walk is next");
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}