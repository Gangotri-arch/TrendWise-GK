let questions = [];
let currentQuestion = 0;

// 👉 PASTE YOUR GOOGLE SHEET CSV LINK HERE
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR80Y9ZxGLwetBJDafaht_UeXH3OaxkjL6CAkLfFqgcZSBIOf8vGv7SjF19CPTmdmP4XRCMsR9PWVAe/pub?output=csv";

// Load questions from Google Sheet
fetch(SHEET_URL)
  .then(res => res.text())
  .then(data => {
    let rows = data.trim().split("\n").slice(1);

    questions = rows.map(row => {
      let cols = row.split(",");

      return {
        question: cols[0],
        options: [
          cols[1],
          cols[2],
          cols[3],
          cols[4]
        ],
        correct: Number(cols[5]) - 1   // convert 1-4 → 0-3
      };
    });

    loadQuestion(); // start quiz after loading data
  })
  .catch(err => {
    console.log("Error loading sheet:", err);
  });

// Show question
function loadQuestion() {
  if (!questions.length) return;

  document.getElementById("question").innerText =
    questions[currentQuestion].question;

  document.getElementById("option0").innerText =
    questions[currentQuestion].options[0];

  document.getElementById("option1").innerText =
    questions[currentQuestion].options[1];

  document.getElementById("option2").innerText =
    questions[currentQuestion].options[2];

  document.getElementById("option3").innerText =
    questions[currentQuestion].options[3];
}

// Check answer
function checkAnswer(option) {
  if (!questions.length) return;

  if (option === questions[currentQuestion].correct) {
    alert("Correct Answer 👍");
  } else {
    alert("Wrong Answer ❌");
  }
}

// Next question
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

// Previous question
function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}
