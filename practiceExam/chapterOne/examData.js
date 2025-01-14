import { practiceQuestions } from "./practiceQuestions.js";

const container = document.getElementById("root");

const question = practiceQuestions[0];
container.innerHTML = `
 
  <p>${question.answer}</p>

  <img src="${question.url}"  /> 
`;
