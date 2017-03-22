//Author: Cory Wall
window.onload = main;


function main()
{
  console.log("Hello World!");
}

function setSessionStorage() {
  console.log("in setSessionStorage()");
  if (typeof(Storage) !== "undefined") {
    sessionStorage.skipCount = 0;
    sessionStorage.hintCount = 0;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
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
    document.getElementById('hintButton1').disabled = true;
  }
}

// Show hint for Q1
function Q1Hint() {
  console.log('in Q1Hint();');
  if (sessionStorage.hintCount) {
    sessionStorage.hintCount = Number(sessionStorage.hintCount) + 1;
  } else {
    sessionStorage.hintCount = 1;
  }

  document.getElementById('hint1').innerHTML="A=1 Z=26";
  document.getElementById('hintButton1').disabled = true;
}


// Skip to next question for Q1
function Q1Skip() {
  if (sessionStorage.skipCount) {
    sessionStorage.skipCount = Number(sessionStorage.skipCount) + 1;
  } else {
    sessionStorage.skipCount = 1;
  }
  window.location.href='test_page_2.html';
}

// Shows the examples for Q2
function showQ2() {
  console.log('in showQ2()');
  document.getElementById('examplesQ2').innerHTML="2, 1 -> 231212<br>8, 4  -> 21243248<br>9, 3 -> 31262739<br>14, 2 -> 7161228214<br>20, 5 -> 42515100520<br>15, 3 -> ?<br>";
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
    document.getElementById('hintButton2').disabled = true;
  }
}

// Shows hint for Q2
function Q2Hint() {
  console.log('in Q2Hint()');
  if (sessionStorage.hintCount) {
    sessionStorage.hintCount = Number(sessionStorage.hintCount) + 1;
  } else {
    sessionStorage.hintCount = 1;
  }
  document.getElementById('hintButton2').disabled = true;
  document.getElementById('Q2Hint').innerHTML="Take a look at the examples again, your hint is the altered example";
  document.getElementById('examplesQ2').innerHTML="2, 1 -> 231212<br>8, 4  -> 2_12_4_32_4_8<br>9, 3 -> 31262739<br>14, 2 -> 7161228214<br>20, 5 -> 42515100520<br>15, 3 -> ?<br>";
}

// Skip to next question for Q2
function Q2Skip() {
  if (sessionStorage.skipCount) {
    sessionStorage.skipCount = Number(sessionStorage.skipCount) + 1;
  } else {
    sessionStorage.skipCount = 1;
  }
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
    document.getElementById('hintButton3').disabled = true;
  }
}

// Hint for Q3
function Q3Hint() {
  if (sessionStorage.hintCount) {
    sessionStorage.hintCount = Number(sessionStorage.hintCount) + 1;
  } else {
    sessionStorage.hintCount = 1;
  }
  document.getElementById('hintButton3').disabled = true;
  document.getElementById('Q3Hint').innerHTML="15 = 6, 26 = 8"
}

// Skip to next question for Q3
function Q3Skip() {
  if (sessionStorage.skipCount) {
    sessionStorage.skipCount = Number(sessionStorage.skipCount) + 1;
  } else {
    sessionStorage.skipCount = 1;
  }
  window.location.href='summary.html';
}

function hideTryAgain() {
  document.getElementById("tryAgain").style.visibility = "hidden";
}

function summary() {
  var skipsUsed = Number(sessionStorage.skipCount);
  var hintsUsed = Number(sessionStorage.hintCount);
  var num_correct, total, unused_hints = 3 - hintsUsed;
  if (skipsUsed == 3) {
    num_correct = 0;
  } else if (skipsUsed == 2) {
    num_correct =1;
  } else if (skipsUsed == 1) {
    num_correct = 2;
  } else {
    num_correct = 3;
  }

  total = num_correct + unused_hints;

  if (total > 4) {
    document.getElementById("results").classList.add("correct");
  } else if (total == 3 || total == 4) {
    document.getElementById("results").classList.add("didOkay");
  } else {
    document.getElementById("results").classList.add("incorrect");
  }

  document.getElementById('results').innerHTML="You got " + num_correct + " out of 3 correct and used " + hintsUsed + " hints<br>";
  document.getElementById('results').innerHTML+="<b>Overall your score is " + total + " out of 6.</b>"

  document.getElementById("tryAgain").style.visibility = "visible";
}

function tryAgain() {
  if (typeof(Storage) !== "undefined") {
    sessionStorage.skipCount = 0;
    sessionStorage.hintCount = 0;
  } else {
    console.log("Sorry, your browser does not support web storage...");
  }
  window.location.href='test_page_1.html';
}
