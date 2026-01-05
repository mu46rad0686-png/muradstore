const quizzes = {
  religion: [
    {
      question: "كم عدد أركان الإسلام؟",
      answers: ["4", "5", "6"],
      correct: "5"
    },
    {
      question: "ما اسم أول نبي؟",
      answers: ["نوح", "آدم", "إبراهيم"],
      correct: "آدم"
    }
  ],

  history: [
    {
      question: "من هو أول خليفة في الإسلام؟",
      answers: ["عمر بن الخطاب", "علي بن أبي طالب", "أبو بكر الصديق"],
      correct: "أبو بكر الصديق"
    },
    {
      question: "في أي عام فتح المسلمون مكة؟",
      answers: ["8 هـ", "10 هـ", "5 هـ"],
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
        alert("إجابة صحيحة ✅");
      } else {
        alert("إجابة خاطئة ❌");
      }
    };
    answersEl.appendChild(btn);
  });
}

function nextQuestion() {
  loadQuestion();
}
