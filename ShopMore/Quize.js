const timeContainer = document.getElementById('time-container');
const startButton = document.getElementById('start-btn');

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');

const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

const selectTime1 = document.getElementById('selecttime1');
const selectTime2 = document.getElementById('selecttime2');
const selectTime3 = document.getElementById('selecttime3');
const selectTime4 = document.getElementById('selecttime4');

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswersCount = 0;

selectTime1.addEventListener('click', timerSelector);
selectTime2.addEventListener('click', timerSelector);
selectTime3.addEventListener('click', timerSelector);
selectTime4.addEventListener('click', timerSelector);

function timerSelector() {
  console.log('clicked');
  timeContainer.classList.add('hide');
  startButton.classList.remove('hide');
  const buttonId = event.target.id;

  if (buttonId === 'selecttime1') {
    startButton.addEventListener('click', function () {
      startQuiz(3600);
    });
  } else if (buttonId === 'selecttime2') {
    startButton.addEventListener('click', function () {
      startQuiz(5400);
    });
  } else if (buttonId === 'selecttime3') {
    startButton.addEventListener('click', function () {
      startQuiz(7200);
    });
  } else if (buttonId === 'selecttime4') {
    startButton.addEventListener('click', function () {
      startQuiz(9900);
    });
  }
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

startButton.addEventListener('click', startQuiz);

function startQuiz(duration) {
  console.log('started');
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  correctAnswersCount = 0;
  nextButton.classList.remove('hide');
  questionContainer.classList.remove('hide');
  countdown(duration, function () {
    showResult();
  });
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    correctAnswersCount++;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    showResult();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function countdown(seconds, callback) {
  const countdownElement = document.getElementById('time');
  let timeLeft = seconds;

  const interval = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = formatTime(timeLeft);

    if (timeLeft <= 0 || shuffledQuestions.length <= currentQuestionIndex) {
      clearInterval(interval);
      countdownElement.innerText = 'Time is up';
      nextButton.classList.add('hide');
      callback();
    }
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
}

function showResult() {
  questionElement.innerText = `Quiz Finished! You answered ${correctAnswersCount} out of ${questions.length} questions correctly.`;
  answerButtonElement.innerHTML = '';
  nextButton.classList.add('hide');
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '30', correct: false },
      { text: '21', correct: false },
    ],
  },
  {
    question: 'What is 3 + 5?',
    answers: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '10', correct: false },
    ],
  },
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: false },
      { text: 'Rome', correct: false },
    ],
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false },
    ],
  },
];


































/*const timeContainer = document.getElementById('time-container');
const startButton = document.getElementById('start-btn');

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');

const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

const selectTime1 = document.getElementById('selecttime1');
const selectTime2 = document.getElementById('selecttime2');
const selectTime3 = document.getElementById('selecttime3');
const selectTime4 = document.getElementById('selecttime4');

let shuffledQuestion;
let currentQuestionIndex;
let correctAnswers = 0;

selectTime1.addEventListener('click', timerSelector);
selectTime2.addEventListener('click', timerSelector);
selectTime3.addEventListener('click', timerSelector);
selectTime4.addEventListener('click', timerSelector);

function timerSelector() {
  console.log('clicked');
  timeContainer.classList.add('hide');
  startButton.classList.remove('hide');
  const buttonId = event.target.id;

  if (buttonId === 'selecttime1') {
    startButton.addEventListener('click', function () {
      startQuiz(3600);
    });
  } else if (buttonId === 'selecttime2') {
    startButton.addEventListener('click', function () {
      startQuiz(5400);
    });
  } else if (buttonId === 'selecttime3') {
    startButton.addEventListener('click', function () {
      startQuiz(7200);
    });
  } else if (buttonId === 'selecttime4') {
    startButton.addEventListener('click', function () {
      startQuiz(9900);
    });
  }
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

startButton.addEventListener('click', startQuiz);

function startQuiz(duration) {
  console.log('started');
  startButton.classList.add('hide');
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  correctAnswers = 0; // Reset the number of correct answers
  nextButton.classList.remove('hide');
  questionContainer.classList.remove('hide');
  countdown(duration, function () {
    showResult();
    correctAnswers = 0; // Reset the correctAnswers variable for a new quiz
  });
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    correctAnswers++;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function countdown(seconds, callback) {
  var countdownElement = document.getElementById('time');

  var interval = setInterval(function () {
    countdownElement.textContent = seconds + '...sec';
    seconds--;

    if (seconds < 0) {
      clearInterval(interval);
      countdownElement.innerText = 'Time is up';
      nextButton.classList.add('hide');
      showResult();
      callback(); // Execute the callback function
    }
  }, 1000);
}

function showResult() {
  const result = `You answered ${correctAnswers} out of ${questions.length} questions correctly.`;
  questionElement.innerText = result;
  answerButtonElement.innerHTML = ''; // Clear the answer buttons
  nextButton.classList.add('hide');
  startButton.innerText = 'Restart';
  startButton.classList.remove('hide');
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '30', correct: false },
      { text: '21', correct: false },
    ],
  },
  {
    question: 'What is 3 + 5?',
    answers: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '9', correct: false },
      { text: '10', correct: false },
    ],
  },
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: false },
      { text: 'Rome', correct: false },
    ],
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Venus', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false },
    ],
  },
];






*/











/*
const timeContainer = document.getElementById('time-container')
const startButton = document.getElementById('start-btn')

const questionContainer = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

const selectTime1 = document.getElementById("selecttime1")
const selectTime2 = document.getElementById("selecttime2")
const selectTime3 = document.getElementById("selecttime3")
const selectTime4 = document.getElementById("selecttime4")

let shuffledQuestion;
let currentQuestionIndex;

selectTime1.addEventListener('click', timerSelector)
selectTime2.addEventListener('click', timerSelector)
selectTime3.addEventListener('click', timerSelector)
selectTime4.addEventListener('click', timerSelector)

function timerSelector() {
   console.log('clicked')
   timeContainer.classList.add('hide')
   startButton.classList.remove('hide')
   const buttonId = event.target.id;
 
   if (buttonId === 'selecttime1') {
     startButton.addEventListener('click', function() {
       startQuiz(3600);
     });
   } else if (buttonId === 'selecttime2') {
     startButton.addEventListener('click', function() {
       startQuiz(5400);
     });
   } else if (buttonId === 'selecttime3') {
     startButton.addEventListener('click', function() {
       startQuiz(7200);
     });
   } else if (buttonId === 'selecttime4') {
     startButton.addEventListener('click', function() {
       startQuiz(9900);
     });
   }

}

nextButton.addEventListener('click',() => {
   currentQuestionIndex++
   setNextQuestion()
})

startButton.addEventListener('click', startQuiz)

function startQuiz(duration) {
   console.log('started')
   startButton.classList.add('hide')
   shuffledQuestion = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   nextButton.classList.remove('hide')
   questionContainer.classList.remove('hide')
   countdown(duration)
   setNextQuestion()
}

function setNextQuestion(){
   resetState()
   showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion (question){
   questionElement.innerText = question.question
   question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectaAnswer)
      answerButtonElement.appendChild(button)
   });
}

function resetState() {
   clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while (answerButtonElement.firstChild) {
      answerButtonElement.removeChild
      (answerButtonElement.firstChild)
   }
}

function selectaAnswer(e) {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button =>{
      setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestion.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
}
else {
   startButton.innerText = "restart"
   startButton.classList.remove('hide')
}
   }
   

function setStatusClass(element, correct){
   clearStatusClass(element)
   if (correct) {
      element.classList.add('correct')
   }else{
      element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
   element.classList.remove('correct')
   //element.classList.remove('wrong')
}

function countdown(seconds) {
   var countdownElement = document.getElementById('time');

   var interval = setInterval(function() {
       countdownElement.textContent = seconds + '...sec';
       seconds--;

       if (seconds < 0) {
           clearInterval(interval)
           countdownElement.innerText = 'time is up'
           nextButton.classList.add('hide')
           alert('time is up')
       }
     
   }, 1000);
}




const questions = [
   {
      question: 'what is 2 + 2',
      answers: [
         { text: '4', correct: true },
         { text: '22', correct: false },
         { text: '30', correct: false },
         { text: '21', correct: false }
      ]
   },
   {
      question: 'what is 2 + 2',
      answers: [
         { text: '4', correct: true },
         { text: '22', correct: false },
         { text: '30', correct: false },
         { text: '21', correct: false }
      ]
   },
   {
      question: 'what is 2 + 2',
      answers: [
         { text: '4', correct: true },
         { text: '22', correct: false },
         { text: '30', correct: false },
         { text: '21', correct: false }
      ]
   },
   {
      question: 'what is 2 + 2',
      answers: [
         { text: '4', correct: true },
         { text: '22', correct: false },
         { text: '30', correct: false },
         { text: '21', correct: false }
      ]
   }
]
*/