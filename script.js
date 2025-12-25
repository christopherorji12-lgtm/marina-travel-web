const quiz = [
  {
    question: "Largest mammal in the ocean?",
    answers: ["Shark", "Blue Whale", "Dolphin", "Octopus"],
    correct: 1
  },
  {
    question: "Oceans cover how much of Earth?",
    answers: ["50%", "60%", "70%", "80%"],
    correct: 2
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  document.getElementById("progress").innerText =
    `Question ${current + 1} of ${quiz.length}`;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.className = "btn";
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  if (index === quiz[current].correct) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML = `
      <h3>🎉 Quiz Completed!</h3>
      <p>Your Score: ${score} / ${quiz.length}</p>
      <p>Great job exploring the sea!</p>
    `;
  }
}

function restartQuiz() {
  current = 0;
  score = 0;
  loadQuestion();
}

window.onload = loadQuestion;
