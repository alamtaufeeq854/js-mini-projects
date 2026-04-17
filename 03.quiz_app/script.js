document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "Which is the largest ocean on Earth ?",
      answers: [
        { text: "Atlantic Ocean", correct: false },
        { text: "Indian Ocean", correct: false },
        { text: "Pacific Ocean", correct: true },
        { text: "Arctic Ocean", correct: false },
      ],
    },
    {
      question: "Which device is used to take photos ?",
      answers: [
        { text: "Keyboard", correct: false },
        { text: "Camera", correct: true },
        { text: "Mouse", correct: false },
        { text: "Speaker", correct: false },
      ],
    },
    {
      question: "How many hours are there in a day ?",
      answers: [
        { text: "12", correct: false },
        { text: "24", correct: true },
        { text: "48", correct: false },
        { text: "36", correct: false },
      ],
    },
    {
      question: "Which gas do humans need to breathe ?",
      answers: [
        { text: "Carbon Dioxide", correct: false },
        { text: "Oxygen", correct: true },
        { text: "Nitrogen", correct: false },
        { text: "Hydrogen", correct: false },
      ],
    },
    {
      question: "Which season comes after summer ?",
      answers: [
        { text: "Winter", correct: false },
        { text: "Spring", correct: false },
        { text: "Autumn", correct: true },
        { text: "Monsoon", correct: false },
      ],
    },
  ];

  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const titleHeading = document.getElementById("title");

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    titleHeading.textContent = "Simple Quiz";

    currentQuestionIndex = 0;
    score = 0;

    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function start() {
    questionElement.innerHTML = "Click Start to begin the Quiz";
    answerButton.innerHTML = "";
    nextButton.innerHTML = "Start";
    nextButton.style.display = "block";
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);

      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }

      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    nextButton.style.display = "none";

    answerButton.innerHTML = "";
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
      selectedBtn.classList.add("Correct");
      score++;
    } else {
      selectedBtn.classList.add("Incorrect");
    }

    Array.from(answerButton.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("Correct");
      }

      button.disabled = true;
    });

    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();

    let grade;

    titleHeading.textContent = "Result";

    if (score >= questions.length) grade = "Outstanding";
    else if (score == 4) grade = "Excellent";
    else if (score == 3) grade = "Good";
    else if (score == 2) grade = "Poor";
    else grade = "Very Poor";

    questionElement.innerHTML = `Your Score is ${score} out of ${questions.length}
  <br> <br>
  <p>Grade: ${grade}</p>`;
    nextButton.innerHTML = "Restart";

    nextButton.style.display = "block";
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML == "Start") {
      startQuiz();
    } else if (nextButton.innerHTML == "Next") {
      handleNextButton();
    } else {
      startQuiz();
    }
  });

  start();
});
