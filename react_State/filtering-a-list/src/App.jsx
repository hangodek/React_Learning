import { useState } from 'react';
import { foods, filterItems } from './data';
import './App.css'

export default function App() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar value={query} handler={handleChange} />
      <hr />
      <List items={foods} itemsSearch={query} />
    </>
  );
}

function SearchBar({value, handler}) {
  
  return (
    <label>
      Search:{' '}
      <input
        value={value}
        onChange={handler}
      />
    </label>
  );
}

function List({ items, itemsSearch }) {

  let temp = filterItems(items, itemsSearch)

  return (
    <table>
      <tbody>
        {temp.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 