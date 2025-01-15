import { practiceQuestions } from "../practiceQuestions.js";

const container = document.getElementById("root");

const renderQuestion = (question) => {
  return `
 
  <p>${question.answer2}</p>

  <img src="${question.url2}"/> 
`;
};
const question = practiceQuestions[0];
container.innerHTML = renderQuestion(question);
