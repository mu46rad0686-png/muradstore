const questions = [
  {
    question: "كم عدد قارات العالم؟",
    answers: ["5", "6", "7"],
    correct: "7"
  },
  {
    question: "ما أسرع حيوان بري؟",
    answers: ["الحصان", "الفهد", "الأسد"],
    correct: "الفهد"
  },
  {
    question: "ما عاصمة اليابان؟",
    answers: ["بكين", "سيول", "طوكيو"],
    correct: "طوكيو"
  }
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");

function loadQuestion() {
  answersEl.innerHTML = "";
  const q = questions[Math.floor(Math.random() * questions.length)];
  questionEl.textContent = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => {
      if (answer === q.correct) {
        alert("إجابة صحيحة ✅");
      } else {
        alert("إجابة خاطئة ❌");
      }
    };
    answersEl.appendChild(btn);
  });
}

nextBtn.onclick = loadQuestion;
loadQuestion();
