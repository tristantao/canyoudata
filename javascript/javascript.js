
var TOTAL_Q_NUM = 4; //Question num starts at 1.


function getAnswer(q_num, q_ans) {
	/*
	Give a question number and the answer chosen by the user, shows the answer and renders next question.
	*/
	currentSolution(q_num, q_ans);
	nextQuestion(q_num);
}

$("#q1_box").show();

function currentSolution(current_q_num, q_ans) {

}

function nextQuestion(current_q_num) {
	/*Given the current question nubmer, shows the next question.
	*Does nothing if given the last question */
	next_q = parseInt(current_q_num) + 1;
	if (next_q <= TOTAL_Q_NUM) {
		next_question_box = "#q" + next_q + "_box";
		$(next_question_box).fadeIn("slow");
	} else {
		alert ("last question!");
	}

}
