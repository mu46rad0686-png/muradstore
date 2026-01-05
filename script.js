const quizzes = {
  religion: [
    {
      question: "كم عدد أركان الإسلام؟",
      answers: ["4", "5", "6"],
      correct: "5"
    },
    {
      question: "من هو أول نبي؟",
      answers: ["نوح", "آدم", "إبراهيم"],
      correct: "آدم"
    }
  ],
  history: [
    {
      question: "من هو أول خليفة في الإسلام؟",
      answers: ["عمر بن الخطاب", "أبو بكر الصديق", "علي بن أبي طالب"],
      correct: "أبو بكر الصديق"
    },
    {
      question: "في أي عام فتح المسلمون مكة؟",
      answers: ["8 هـ", "5 هـ", "10 هـ"],
      correct: "8 هـ"
    }
  ]
};

let currentQuiz = [];
let currentQuestion;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizBox = document.getElementById("quiz");

function startQuiz(type) {
  currentQuiz = quizzes[type];
  document.getElementById("categories").style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  answersEl.innerHTML = "";
  currentQuestion = currentQuiz[Math.floor(Math.random() * currentQuiz.length)];
  questionEl.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.className = "answer-btn";

    btn.onclick = () => {
      if (answer === currentQuestion.correct) {
        questionEl.textContent = "أحسنت يا بطل 💪🔥";
        setTimeout(loadQuestion, 1200);
      } else {
        btn.style.background = "#e74c3c";
        btn.style.color = "white";
      }
    };

    answersEl.appendChild(btn);
  });
}
