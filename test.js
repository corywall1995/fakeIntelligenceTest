//Author: Cory Wall
window.onload = main;


function main()
{
  console.log("Hello World!");
}

// Check user input for Q1
function checkQ1() {
  console.log("in checkQ1")
  var correct = false;
  var user_input = document.getElementById('test_1_input');
  if (user_input.value == 20) {
    document.getElementById("question_1_feedback").classList.add("correct");
    document.getElementById("question_1_feedback").classList.remove("incorrect");
    document.getElementById("question_1_feedback").innerHTML="Correct!!!";
    correct = true;
  } else if (isNaN(user_input.value)) {
    document.getElementById("question_1_feedback").classList.add("incorrect");
    document.getElementById("question_1_feedback").innerHTML="Answer is a number, try again.";
  } else {
    document.getElementById("question_1_feedback").classList.add("incorrect");
    document.getElementById("question_1_feedback").innerHTML="Incorrect, try again or skip to next question";
  }

  if (correct) {
    document.getElementById("continueButton1").disabled = false;
    document.getElementById("skipButton1").disabled = true;
  }
}

// Skip to next question for Q1
function Q1Skip() {
  window.name = "1";
  window.location.href='test_page_2.html';
}

// Check user input for Q2
function checkQ2() {
  console.log("in checkQ2")
  var correct = false;
  var user_input = document.getElementById('test_2_input');
  if (user_input.value == 5181245315) {
    document.getElementById("question_2_feedback").classList.add("correct");
    document.getElementById("question_2_feedback").classList.remove("incorrect");
    document.getElementById("question_2_feedback").innerHTML="Correct!!!";
    correct = true;
  } else if (isNaN(user_input.value)) {
    document.getElementById("question_2_feedback").classList.add("incorrect");
    document.getElementById("question_2_feedback").innerHTML="Answer is a number, try again.";
  } else {
    document.getElementById("question_2_feedback").classList.add("incorrect");
    document.getElementById("question_2_feedback").innerHTML="Incorrect, try again or skip to next question";
  }

  if (correct) {
    document.getElementById("continueButton2").disabled = false;
    document.getElementById("skipButton2").disabled = true;
  }
}

// Skip to next question for Q2
function Q2Skip() {
  window.name += "2";
  window.location.href='test_page_3.html';
}


// Check user input for Q3
function checkQ3() {
  console.log("in checkQ3")
  var correct = false;
  var user_input = document.getElementById('test_3_input');
  if (user_input.value == 31) {
    document.getElementById("question_3_feedback").classList.add("correct");
    document.getElementById("question_3_feedback").classList.remove("incorrect");
    document.getElementById("question_3_feedback").innerHTML="Correct!!!";
    correct = true;
  } else if (isNaN(user_input.value)) {
    document.getElementById("question_3_feedback").classList.add("incorrect");
    document.getElementById("question_3_feedback").innerHTML="Answer is a number, try again.";
  } else {
    document.getElementById("question_3_feedback").classList.add("incorrect");
    document.getElementById("question_3_feedback").innerHTML="Incorrect, try again or skip to next question";
  }

  if (correct) {
    document.getElementById("continueButton3").disabled = false;
    document.getElementById("skipButton3").disabled = true;
  }
}

// Skip to next question for Q3
function Q3Skip() {
  window.name += "3";
  window.location.href='summary.html';
}

function summary() {
  var skipsUsed = window.name;
  var num_correct;
  if (skipsUsed == "123") {
    document.getElementById("results").classList.add("incorrect");
    num_correct = 0;
  } else if (skipsUsed == "12" || skipsUsed == "13" || skipsUsed == "23") {
    num_correct =1;
    document.getElementById("results").classList.add("incorrect");
  } else if (skipsUsed == "1" || skipsUsed == "2" || skipsUsed == "3") {
    num_correct = 2;
    document.getElementById("results").classList.add("correct");
  } else {
    num_correct =3;
    document.getElementById("results").classList.add("correct");
  }

  document.getElementById('results').innerHTML="You got " + num_correct + " out of 3 correct";

}
