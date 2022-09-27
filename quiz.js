const quizForm = document.querySelector("#quiz");
const submit = document.querySelector("#submit-quiz");
const output = document.querySelector("#output-quiz");
const answers = {
  q1: "90°",
  q2: "right angled",
  q3: "equilateral",
  q4: "midsegment",
  q5: "orthocenter",
  q6: "centroid",
  q7: "altitude",
};

submit.addEventListener("click", () => {
  const quizFormData = new FormData(quizForm);

  var score = 0;
  var index = 0;
  for (let [key, value] of quizFormData) {
    if (value == answers[key]) {
      score += 1;
    }
  }

  output.innerText = "Your score is " + score;
  window.scrollTo(0, document.body.scrollHeight);
});
