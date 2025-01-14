import { practiceQuestions } from "../practiceQuestions.js";

const container = document.getElementById("root");

const renderQuestion = (question) => {
  return `
<p>${question.answer3}</p>

  <img src="${question.url3}"/> 
`;
};

const question = practiceQuestions[0];
container.innerHTML = renderQuestion(question);
