import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCount] = useState(0);

  function Button({color = "red", onClick}) {
    return (
      <>
        <button style={{backgroundColor: color}} className="myBtn" onClick={onClick}>{color}</button>
      </>
    )
  }

  function handleColor(e) {
    const docBody = document.body;

    if (docBody.style.backgroundColor != e.target.textContent) {
      setCount(counter + 1);
    }

    docBody.style.backgroundColor = e.target.textContent;
  }

  return (
    <>

      <h1>Color change count : {counter} </h1>
      <Button color="green" onClick={handleColor}/>
      <Button onClick={handleColor}/>
      <Button color="blue" onClick={handleColor}/>
      <Button color="magenta" onClick={handleColor}/>
      <Button color="pink" onClick={handleColor}/>
    </>
  ) 
}