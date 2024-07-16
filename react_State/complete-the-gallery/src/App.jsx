import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick(e) {
    const previousBtn = document.querySelector(".Previous");

    setIndex(index + 1);
    if (index == 10) {
      e.target.setAttribute("disabled", "");
    } else {
      previousBtn.removeAttribute("disabled");
    }
  }

  function handlePreviousClick(e) {
    const nextBtn = document.querySelector(".Next");

    setIndex(index - 1);
    if (index == 1) {
      e.target.setAttribute("disabled", "");
    } else {
      nextBtn.removeAttribute("disabled");
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePreviousClick} className="Previous" disabled={index < 1}>
        Previous
      </button>
      <button onClick={handleNextClick} className="Next">
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
