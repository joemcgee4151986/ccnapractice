import { sculptureList } from './practiceQuestions.js';

<button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

// Example of rendering the first sculpture's name and artist
const container = document.getElementById('root');
container.innerHTML = `
  <h1>${sculptureList[0].name}</h1>
  <h2>by ${sculptureList[0].artist}</h2>
  <p>${sculptureList[0].description}</p>
  <img src="${sculptureList[0].url}" alt="${sculptureList[0].alt}" />
`;
