const inputAngle1 = document.querySelector("#angle1");
const inputAngle2 = document.querySelector("#angle2");
const inputAngle3 = document.querySelector("#angle3");
const buttonIsTriangle = document.querySelector("#is-triangle");
const output = document.querySelector("#output");

buttonIsTriangle.addEventListener("click", () => {
  const angle1 = Number(inputAngle1.value);
  const angle2 = Number(inputAngle2.value);
  const angle3 = Number(inputAngle3.value);
  if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
    printMessage("Angles should be greater than 0");
  } else {
    sum = angle1 + angle2 + angle3;
    if (sum == 180) {
      printMessage("It's a triangle");
    } else {
      printMessage("It's not a triangle");
    }
  }
});
function printMessage(messageLanguage) {
  output.innerText = messageLanguage;
}
