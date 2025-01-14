import { practiceQuestions } from "../practiceQuestions.js";


const container = document.getElementById("root");


const question = practiceQuestions[0];
container.innerHTML = `
 
  <p>${question.answer3}</p>

  <img src="${question.url3}" alt="${question.alt}" /> 
`;
