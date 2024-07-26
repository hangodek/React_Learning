import { useState } from 'react';
import './App.css'

export default function App() {
  const [isShowed, setShowed] = useState(0)

  return (
    <>
      <MyBox title={"Cinderela"} content={"Cinderela is a child movie"} showedIs={isShowed === 0} handleChange={() => setShowed(0)} />
      <MyBox title={"Pinocio"} content={"Pinocio is an adult movie"} showedIs={isShowed === 1} handleChange={() => setShowed(1)}/>
    </>
  )

  function MyBox({title, content, showedIs, handleChange}) {

    return (
      <div className="myDiv">
        <h1>{title}</h1>
        {showedIs ? <p>{content}</p> : <button onClick={handleChange}>Show</button>}
      </div>
    )
  }
}
