let questions = [];
let answers = ['культурні', "політичні", "економічні", "Права людини", 'Демагогія', 'Парадокс', 'Громадянське суспільство', 'перше', 'друге', 'третє', 'Батьківщина', 'народ', 'населення', 'самостійності', 'свободи', 'Конституції', 'Безпеки', 'вільний', 'людина', 'свобода', 'народу', 'життя', 'політична партія', 'одній', "життя", 'незалежних', 'цінності', 'відповідальності', "обов'язку", 'цінність', 'суспільство', 'спілкування', 'громадянське суспільство', 'громадянського', 'соціальна роль', 'суспільстві', 'онлайн', 'преси'];

fetch("lvl2test.txt")
  .then((response) => response.text())
  .then((data) => {
    const lines = data.split("\n");

    for (let i = 0; i < lines.length -1; i += 1) {
      const question = lines[i].trim();
      questions.push(question);
    }

    renderQuiz();
  });

let currentIndex = 0; // Keep track of the current question
let correctCount = 0; // Keep track of correct answers

function renderQuiz() {
  const questionsContainer = document.getElementById("questions-container");
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.textContent = questions[currentIndex];

  const answerInput = document.createElement("input");
  answerInput.classList.add("answer-input");
  answerInput.setAttribute("type", "text");

  questionsContainer.appendChild(questionElement);
  questionsContainer.appendChild(answerInput);

  document.getElementById("submit-btn").addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = answers[currentIndex].toLowerCase(); // Ignore case for comparison

    if (userAnswer.toLowerCase() === correctAnswer) {
      correctCount += 1;
      console.log(correctCount)
    }

    currentIndex += 1; // Move to the next question

    // Check if there are more questions
    if (currentIndex < questions.length) {
      // Clear current question and input
      questionElement.textContent = questions[currentIndex];
      answerInput.value = "";
    } else {
      // No more questions, quiz is complete
      questionElement.style.display = "none";
      answerInput.style.display = "none";
      document.getElementById("submit-btn").style.display = "none";

      // Display result
      const resultContainer = document.getElementById("result");
      resultContainer.textContent = `You answered ${correctCount} out of ${questions.length} questions correctly.`;
      resultContainer.style.display = "block";
    }
  });
}
