
var TOTAL_Q_NUM = 4; //Question num starts at 1.
var ANS_KEY = {1:"E", 2:"A", 3:"B", 4:"B"};


function getAnswer(q_num, q_ans) {
	/*
	Give a question number and the answer chosen by the user, shows the answer and renders next question.
	*/
	currentSolution(q_num, q_ans);
	//maybe solution is the one who has a "GOT IT BUTTON"
	nextQuestion(q_num);
}

function currentSolution(current_q_num, q_ans) {
	/* Changes the color of the quiz_box to {correct:"green", "wrong":"red"}
	* Loads the next question as well */
	var correct = ANS_KEY[current_q_num] == q_ans.toUpperCase();
	var questionBoxID = "#q"+current_q_num+"_box";

	if (correct) {
		fadeIDBoxBackground(questionBoxID,'Red');
	} else {
		fadeIDBoxBackground(questionBoxID,'YellowGreen');
	} //end else

	var answer_id = "#a" + current_q_num + "_box";
	$(answer_id).show("slow");

	return false;
}

function fadeIDBoxBackground(boxID, color) {
	/*Given an id for a div box and a background color, fades the color of the box*/
	$(boxID).css({'background-color' : color,
		'-webkit-transition': 'background-color 1000ms linear',
   	'-moz-transition': 'background-color 1000ms linear',
   	'-o-transition': 'background-color 1000ms linear',
   	'-ms-transition': 'background-color 1000ms linear',
    'transition': 'background-color 1000ms linear'
		});
}

function nextQuestion(current_q_num) {
	/*Given the current question nubmer, shows the next question.
	*Does nothing if given the last question */
	next_q = parseInt(current_q_num) + 1;
	if (next_q <= TOTAL_Q_NUM) {
		next_question_box = "#q" + next_q + "_box";
		//alert("next question:" + next_question_box);
		$(next_question_box).show("slow");
		$(next_question_box).scrollIntoView();
	} else {
		alert ("last question!");
	} //end else
	return false;
}
