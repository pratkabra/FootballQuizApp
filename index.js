const readLineSync=require('readline-sync');

const quizQuestions = [
  {
    question: "Which team has Cristiano Ronaldo NOT played for?",
    options: ["Manchester United", "Real Madrid", "Manchester City", "Juventus"],
    answer: 3
  },

  {
    question: "Which team won the Premier League in the 2020-21 season?",
    options: ["Manchester United", "Arsenal", "Manchester City", "Liverpool"],
    answer: 3
  },

  {
    question: "Who has the most hat-tricks in Premier League Era?",
    options: ["Sergio Kun Aguero", "Alan Shearer", "Thiery Henry", "Wayne Rooney"],
    answer: 1
  },

  {
    question: "Which team has won the most Champions League Titles?",
    options: ["Liverpool", "Real Madrid", "Barcelona", "Juventus"],
    answer: 2
  },

  {
    question: "Which Premier League has gone a whole season unbeaten?",
    options: ["Manchester United", "Arsenal", "Manchester City", "Chelsea"],
    answer: 2
  }
];

const checkAnswer = (userAnswer, correctAnswer) => {
  if(userAnswer == correctAnswer){
    console.log("Correct Answer !! \n")
    return true;
  }else{
    console.log(`Wrong Answer :(( The correct answer is: ${correctAnswer}\n`)

    return false;
  }
};

const quesOptions=(options)=>{
  options.forEach((option, index)=>{
    // let index = 0;
    //index = option.indexOf() + 1;
    console.log(`${index+1}. ${option}`)
    // index++;
  })
}


const startQuiz = (questions) => {
  let quizScore = 0;
  console.log("Welcome to Football 101 Quiz !!\n")
  questions.forEach(questionArr => {
    console.log(questionArr.question)
    const userAnswer=readLineSync.question(quesOptions(questionArr.options))
    if(checkAnswer(userAnswer, questionArr.answer)){
      quizScore++;
    }
  });

  console.log(`Your Score is: ${quizScore}/${questions.length}`)
};

startQuiz(quizQuestions);