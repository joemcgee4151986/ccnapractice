let formElement = document.forms['quizForm'];

formElement.onsubmit = function submitAnswers(){
	let total = 10;
	let score = 0;
	
	// Get User Input
	let q1 = document.forms["quizForm"]["q1"].value,
	    q2 = document.forms["quizForm"]["q2"].value,
	    q3 = document.forms["quizForm"]["q3"].value,
	    q4 = document.forms["quizForm"]["q4"].value,
	    q5 = document.forms["quizForm"]["q5"].value;
	    q6 = document.forms["quizForm"]["q6"].value;
 	    q7 = document.forms["quizForm"]["q7"].value;
	    q8 = document.forms["quizForm"]["q8"].value;
	    q9 = document.forms["quizForm"]["q9"].value;
		q10 = document.forms["quizForm"]["q10"].value;
		/*
		q11 = document.forms["quizForm"]["q11"].value;
		q12 = document.forms["quizForm"]["q12"].value;
		q13 = document.forms["quizForm"]["q13"].value;
		q14 = document.forms["quizForm"]["q14"].value;
		q15 = document.forms["quizForm"]["q15"].value;
		q16 = document.forms["quizForm"]["q16"].value;
		q17 = document.forms["quizForm"]["q17"].value;
		*/
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === null || eval('q'+i) === ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	let answers = ["c","d","a","g","b","b","a","d","b","a"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	let results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	
	return false;
}
