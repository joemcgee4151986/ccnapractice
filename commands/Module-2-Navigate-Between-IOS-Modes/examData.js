import { practiceQuestions } from "../practiceQuestions.js";

const container = document.getElementById("root");

const renderQuestion = (question) => {
  return `
 
  <p>${question.answeriosModes}</p>

`;
};
const question = practiceQuestions[0];
container.innerHTML = renderQuestion(question);
