import { useState } from "react";
import "./App.css";

export default function App() {

  function User({name}) {
    return <h1>Hello {name}</h1>
  }

  return (
    <>
      <User name="Han" />
      <User name="Boys" />
      <User name="Mas" />
      <User name="Laes" />
      <User name="Ayoo" />
    </>
  ) 
}