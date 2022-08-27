const quizForm = document.querySelector("#quiz");
const submit = document.querySelector("#submit");
const output = document.querySelector("#output");
const answers = ["90°", "right angled"];

submit.addEventListener("click", () => {
  const quizFormData = new FormData(quizForm);
  var score = 0;
  var index = 0;
  for (let value of quizFormData.values()) {
    if (value == answers[index]) {
      score += 1;
    }
    index += 1;
  }
  output.innerText = "Your score is" + score;
});
