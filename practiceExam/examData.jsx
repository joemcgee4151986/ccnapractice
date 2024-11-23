import { sculptureList } from './practiceQuestions.js';



// Example of rendering the first sculpture's name and artist
const container = document.getElementById('root');
container.innerHTML = `
  <h1>${sculptureList[0].name}</h1>
  <h2> ${sculptureList[0].question}</h2>
  <p>${sculptureList[0].answer}</p>
  <img src="${sculptureList[0].url}" alt="${sculptureList[0].alt}" />
`;
