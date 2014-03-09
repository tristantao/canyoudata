
var TOTAL_Q_NUM = 4; //Question num starts at 1.
var ANS_KEY = {1:"E", 2:"A", 3:"B", 4:"B"};

var TOTAL_CORRECT = 0;

function getAnswer(q_num, q_ans) {
	/*
	Give a question number and the answer chosen by the user, shows the answer and renders next question.
	*/
	currentSolution(q_num, q_ans);
	nextQuestion(q_num);
}

function currentSolution(current_q_num, q_ans) {
	/* Changes the color of the quiz_box to {correct:"green", "wrong":"red"}
	* Loads the next question as well */
	var correct = ANS_KEY[current_q_num] == q_ans.toUpperCase();
	var questionBoxID = "#q"+current_q_num+"_box";

	if (correct) {
		TOTAL_CORRECT ++;
		fadeIDBoxBackground(questionBoxID,'Red');
	} else {
		fadeIDBoxBackground(questionBoxID,'YellowGreen');
	} //end else

	var answer_id = "#a" + current_q_num + "_box";
	$(answer_id).slideDown("slow");
	scrollIntoView(answer_id);
	return false;
}

function scrollIntoView(ID) {
	/*Scolls the page to get in the view of ID*/
	var offset = $(ID).offset(); //
	offset.left -= 20;
	offset.top -= 20;
	$('html, body').animate({
	    scrollTop: offset.top,
	    scrollLeft: offset.left
	});

}

function fadeIDBoxBackground(boxID, color) {
	/*Given an id for a div box and a background color, fades the color of the box*/
	$(boxID).css({'background-color' : color,
		'-webkit-transition': 'background-color 500ms linear',
   	'-moz-transition': 'background-color 500ms linear',
   	'-o-transition': 'background-color 500ms linear',
   	'-ms-transition': 'background-color 500ms linear',
    'transition': 'background-color 500ms linear'
	});
}

function nextQuestion(current_q_num) {
	/*Given the current question nubmer, shows the next question.
	*Does nothing if given the last question */
	next_q = parseInt(current_q_num) + 1;
	if (next_q <= TOTAL_Q_NUM) {
		next_question_box = "#q" + next_q + "_box";
		//alert("next question:" + next_question_box);
		$(next_question_box).slideDown("slow");
		scrollIntoView(next_question_box);
	} else {
		rendersFinishView();
	} //end else
	return false;
}

function rendersFinishView() {
		/*What action/view to render when the quiz is finisheds*/
	alert("fin");
	$("#finish_box").show("slow");
	scrollIntoView("#finish_box");
	switch(TOTAL_CORRECT)
		{
		case 0:
			$("#finish_box").append( "<p>Tiesto/2Chainz</p>");
			break;
		case 1:
		  $("#finish_box").append( "<p>Frat Bro</p>");
		  break;
		case 2:
		  $("#finish_box").append( "<p>Frat Bro</p>");
		  break;
		case 3:
		  $("#finish_box").append( "<p>Google Literate</p>");
		  break;
		case 4:
		  $("#finish_box").append( "<p>Obama Bro</p>");
		  break;
	}
}








