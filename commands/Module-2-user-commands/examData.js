import { practiceQuestions } from "../practiceQuestions.js"

const container = document.getElementById("root");

const renderQuestion = (question) => {
  return `
 
 <img src="${question.url}"  /> 

`;
};
const question = practiceQuestions[0];
container.innerHTML = renderQuestion(question);
