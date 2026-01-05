const quizzes = {
  religion: [
    // سهلة
    {
      question: "كم عدد أركان الإسلام؟",
      answers: ["4", "5", "6"],
      correct: "5"
    },
    // أصعب
    {
      question: "ما اسم أول نبي؟",
      answers: ["نوح", "آدم", "إبراهيم"],
      correct: "آدم"
    },
    // أصعب أكثر
    {
      question: "كم عدد سور القرآن الكريم؟",
      answers: ["112", "113", "114"],
      correct: "114"
    }
  ],

  history: [
    // سهلة
    {
      question: "من هو أول خليفة في الإسلام؟",
      answers: ["عمر", "أبو بكر", "علي"],
      correct: "أبو بكر"
    },
    // أصعب
    {
      question: "في أي عام فتح المسلمون مكة؟",
      answers: ["8 هـ", "6 هـ", "10 هـ"],
      correct: "8 هـ"
    },
    // أصعب أكثر
    {
      question: "من هو مؤسس الدولة الأموية؟",
      answers: ["معاوية بن أبي سفيان", "عبد الملك بن مروان", "يزيد بن معاوية"],
      correct: "معاوية بن أبي سفيان"
    }
  ]
};

let currentQuiz = [];
let index = 0;
let time = 10;
let timerInterval;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const messageEl = document.getElementById("message");
const timerEl = document.getElementById("timer");

function startQuiz(type) {
  currentQuiz = quizzes[type];
  index = 0;
  document.getElementById("categories").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timerInterval);
  time = 10;
  timerEl.textContent = "⏱️ 10";
  messageEl.textContent = "";
  answersEl.innerHTML = "";

  const q = currentQuiz[index];
  questionEl.textContent = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.className = "answer-btn";
    btn.onclick = () => checkAnswer(answer);
    answersEl.appendChild(btn);
  });

  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = "⏱️ " + time;
    if (time === 0) {
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(answer) {
  if (answer === currentQuiz[index].correct) {
    clearInterval(timerInterval);
    messageEl.textContent = "أحسنت يا بطل 💪🔥";
    setTimeout(nextQuestion, 1500);
  }
}

function nextQuestion() {
  clearInterval(timerInterval);
  index++;
  if (index < currentQuiz.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "🎉 خلصت الأسئلة!";
    answersEl.innerHTML = "";
    timerEl.textContent = "";
  }
}
