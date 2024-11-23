import { sculptureList } from './practiceQuestions.js';

// Select the container
const container = document.getElementById('root');

// Render the sculpture data dynamically
const sculpture = sculptureList[0];
container.innerHTML = `
  <h1>${sculpture.name}</h1>
  <h2>${sculpture.question}</h2>
  <p>${sculpture.answer}</p>
  <img src="${sculpture.url}" alt="${sculpture.alt}" />
`;
