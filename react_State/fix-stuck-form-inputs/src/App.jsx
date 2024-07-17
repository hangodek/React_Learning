import { useState } from "react";
import "./App.css";

export default function App() {
  // let firstName = '';
  // let lastName = '';

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    const myInput = document.querySelectorAll(".myInput")

    myInput.forEach((x) => {
      x.value = "";
    })

    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input className="myInput"
        placeholder="First name"
        // value={firstName}
        onChange={handleFirstNameChange}
      />
      <input className="myInput"
        placeholder="Last name"
        // value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}