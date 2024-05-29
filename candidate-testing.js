const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let candidateAnswers = [];

//TODO: Variables for Part 2
let questions =
  ["Who was the first American woman in space? ",
    "True or false: 5 kilometer == 5000 meters? ",
    "(5 + 3)/2 * 10 = ? ",
    "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What's your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for (i = 0; i < questions.length; i++) {
    console.log(questions[i]);
    candidateAnswer = input.question("Answer: ");
    candidateAnswers.push(candidateAnswer);
  } 

  return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  for (iAnswer = 0; iAnswer < candidateAnswers.length; iAnswer++) {
    console.log(`Your answer: ${candidateAnswers[iAnswer]}
    Correct answer: ${correctAnswers[iAnswer]}`);
  }


  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  let score = 0;
  for (let igrade = 0; igrade < correctAnswers.length; igrade++){
    if (correctAnswers[igrade].toLowerCase() === candidateAnswers[igrade].toLowerCase()) {
      score++;
    }
  } 
  grade = (score / 5 * 100);
  if (grade >= 80) {
    console.log(`Congrats, you passed the quiz with ${grade}%!`);
  } else {
    console.log(`Sorry, your score was ${grade}, you failed the quiz.`)
  }
  
return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hi there, " + candidateName + "! " + "Let's get started!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


// ----------- Don't write any code or change any code below this line ---------- //
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
