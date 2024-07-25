import { useState } from 'react';
import './App.css'

export default function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label={"Box 1"} value={text} handler={handleChange} />
      <Input label={"Box 2"} value={text} handler={handleChange} />
    </>
  )
}

function Input({label, value, handler}) {
  return (
    <label>
      {label}
      {"  "}
      <input
      value={value}
      onChange={handler}>
      </input>
      {"  "}
    </label>
  )
} 