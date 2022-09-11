const quizForm = document.querySelector("#quiz");
const submit = document.querySelector("#submit-quiz");
const output = document.querySelector("#output-quiz");
const answers = [
  "90°",
  "right angled",
  "equilateral",
  "midsegment",
  "orthocenter",
  "centroid",
  "altitude",
];

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
  output.innerText = "Your score is " + score;
  window.scrollTo(0, document.body.scrollHeight);
});
