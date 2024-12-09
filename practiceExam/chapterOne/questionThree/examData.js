import { sculptureList } from "../practiceQuestions.js";

// Select the container
const container = document.getElementById("root");

// Render the sculpture data dynamically
const sculpture = sculptureList[0];
container.innerHTML = `
 
  <p>${sculpture.answer3}</p>

  <img src="${sculpture.url3}" alt="${sculpture.alt}" /> 
`;
