// I'll continue to work on it.// 

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //


let questions = ["Who was the first American woman in space? ", "True or False: 5 kilometers == 5000 meters? ", "(5 + 3)/ 2 * 10 = ", "Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];

let candidateAnswers = [];
let correctCandidateAnswers = [];

//Original code: let question = ("Who was the first woman in Space? ");
// let correctAnswer = ("Sally Ride");
// let candidateAnswer = ("");


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const inputName = require('readline-sync'); 
candidateName = String(inputName.question("Please enter your full name: "));
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

 //Original code:
//  const input2 = require('readline-sync');
// candidateAnswer = String((input2.question(questions[0])));
// console.log(candidateAnswer)

const inputAnswer = require('readline-sync');
// ask a different question each time 
  for (let i = 0; i < questions.length; i++) {
  // save the answer of that question to a variable
  
  let catchAnswer = String((inputAnswer.question(questions[i])));
  //console.log(catchAnswer);
  // push the value of the catchAnswer variable to the corresponding index of the candidateAnswers array.  Account for case.
  candidateAnswers.push(catchAnswer);

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
    console.log(`Correct answer!\n`);
    //then populate a correctCandidateAnswers array and then figure out the length of the array to do the math for grading? 
    correctCandidateAnswers.push(catchAnswer);
   
    } else {
    console.log(`Incorrect answer!\n`); 
    }
    
   }
}


function gradeQuiz(candidateAnswers) {

let grade = Number((correctCandidateAnswers.length / questions.length) * 100);

console.log("You answered " + (correctCandidateAnswers.length) + " out of " +(questions.length) + " questions correctly." );


  if (grade >= 80) {
    console.log(`You passed the test with a score of ${grade} percent.`);
    
  } else {
    console.log("You did not pass the test.");
  }


// INSTRUCTIONS:
// Compare the candidate answers with the correct answers,
// Calculate the candidate's score as a percentage,
// Convey to the candidate if they have passed the quiz with an 80% or if they have failed.


// Some tips:
// Checking for the correct answer should be case insensitive (e.g. "Orbit" is the same as "orbit").
// Somewhere below TODO 1.2c you should see a variable declaration for grade. Use this to calculate the candidate's score.
// To calculate the candidate's percentage, use the equation:

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Welcome, " + candidateName + `!  Good Luck!\n`);

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  // question: question,
  // correctAnswer: correctAnswer,
  // candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};