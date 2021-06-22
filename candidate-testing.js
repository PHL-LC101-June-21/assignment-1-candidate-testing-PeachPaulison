//I'm stuck... I'm bleary eyed and the only thing I can think to make this run is too cludgey, defeats the purpose of the array and can't be correct.   I will just commit what I have to GitHub and submit it even though I know it no longer runs after I started Part 2. I'll continue to work on it.// 

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = ["Who was the first American woman in space? ", "True or False: 5 kilometers == 5000 meters? ", "(5 + 3)/ 2 * 10 = ", "Given the array [8, 'Orbit', 'Trajectory', 45] what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
// console.log(questions)

let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
// let question = questions[0];
// let question = questions[1];
// let question = questions[2];
// let question = questions[3];
// let question = questions[4];
// let question = ("Who was the first woman in Space? ");
let correctAnswer = correctAnswers[0];
// let correctAnswer = ("Sally Ride");
// let candidateAnswer = ("");

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input1 = require('readline-sync');
candidateName = String(input1.question("Please enter your full name: "));
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

 //const input2 = require('readline-sync');
// candidateAnswer = String((input2.question(questions[0])));
// console.log(candidateAnswer)
const input2 = require('readline-sync');
candidateAnswers = String((input2.question(questions[0])));
console.log(candidateAnswers)
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
if (correctAnswer === candidateAnswer) {
console.log("Correct!");
} else if (correctAnswer !== candidateAnswer) {
  console.log("Incorrect");} 


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome, " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};