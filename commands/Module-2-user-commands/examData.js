import { practiceQuestions } from "../practiceQuestions.js";

const container = document.getElementById("root");

const renderQuestion = (question) => {
  return `
 
  <p>${question.answer}</p>

`;
};
const question = practiceQuestions[0];
container.innerHTML = renderQuestion(question);
