//Author: Cory Wall
window.onload = main;


function main()
{
  console.log("Hello World!");
}


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

function Q1Skip() {
  window.name = "1";
  window.location.href='test_page_2.html';
}

function checkQ2() {
  console.log("in checkQ2")
  var correct = false;
  var user_input = document.getElementById('test_2_input');
  if (user_input.value == 20) {
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

function Q2Skip() {
  window.name += "1";
  window.location.href='test_page_2.html';
}
