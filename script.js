const quizzes = {
  religion: [
    // سهلة
    {
      question: "كم عدد أركان الإسلام؟",
      answers: ["4", "5", "6"],
      correct: "5"
    },
    {
      question: "ما اسم أول نبي؟",
      answers: ["آدم", "نوح", "إبراهيم"],
      correct: "آدم"
    },

    // متوسطة
    {
      question: "كم عدد الصلوات المفروضة؟",
      answers: ["3", "5", "6"],
      correct: "5"
    },
    {
      question: "في أي شهر يصوم المسلمون؟",
      answers: ["شعبان", "رمضان", "محرم"],
      correct: "رمضان"
    },

    // صعبة
    {
      question: "كم عدد سور القرآن الكريم؟",
      answers: ["112", "113", "114"],
      correct: "114"
    },
    {
      question: "ما هي أطول سورة في القرآن؟",
      answers: ["آل عمران", "البقرة", "النساء"],
      correct: "البقرة"
    }
  ],

  history: [
    // سهلة
    {
      question: "من هو أول خليفة في الإسلام؟",
      answers: ["أبو بكر", "عمر", "علي"],
      correct: "أبو بكر"
    },
    {
      question: "أين كانت الهجرة النبوية؟",
      answers: ["مكة", "الطائف", "المدينة"],
      correct: "المدينة"
    },

    // متوسطة
    {
      question: "في أي عام فتح المسلمون مكة؟",
      answers: ["8 هـ", "6 هـ", "10 هـ"],
      correct: "8 هـ"
    },
    {
      question: "من هو قائد معركة اليرموك؟",
      answers: ["خالد بن الوليد", "عمر بن الخطاب", "أبو عبيدة"],
      correct: "خالد بن الوليد"
    },

    // صعبة
    {
      question: "من هو مؤسس الدولة الأموية؟",
      answers: ["معاوية بن أبي سفيان", "عبد الملك بن مروان", "يزيد بن معاوية"],
      correct: "معاوية بن أبي سفيان"
    },
    {
      question: "في أي سنة سقطت الأندلس؟",
      answers: ["1492م", "1453م", "1500م"],
      correct: "1492م"
    }
  ]
};

let currentQuiz = [];
let index = 0;
let time = 10;
let timerInterval;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const messageEl = document.getElementById("message");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

const soundCorrect = document.getElementById("sound-correct");
const soundWrong = document.getElementById("sound-wrong");

function startQuiz(type) {
  currentQuiz = quizzes[type];
  index = 0;
  score = 0;
  scoreEl.textContent = "⭐ 0";

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
    btn.onclick = () => checkAnswer(answer, btn);
    answersEl.appendChild(btn);
  });

  timerInterval = setInterval(() => {
    time--;
    timerEl.textContent = "⏱️ " + time;
    if (time === 0) {
      soundWrong.play();
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(answer, btn) {
  if (answer === currentQuiz[index].correct) {
    clearInterval(timerInterval);
    soundCorrect.play();
    score += 10;
    scoreEl.textContent = "⭐ " + score;
    messageEl.textContent = "أحسنت يا بطل 💪🔥";
    setTimeout(nextQuestion, 1500);
  } else {
    soundWrong.play();
    btn.style.background = "#e74c3c";
    btn.style.color = "white";
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
    messageEl.textContent = "نتيجتك: ⭐ " + score;
    timerEl.textContent = "";
  }
}
