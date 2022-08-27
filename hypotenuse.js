const inputAngle1 = document.querySelector("#angle1");
const inputAngle2 = document.querySelector("#angle2");
const calculateHypotenuse = document.querySelector("#calculate");
const output = document.querySelector("#output");
calculateHypotenuse.addEventListener("click", () => {
  const angle1 = Number(inputAngle1.value);
  const angle2 = Number(inputAngle2.value);
  if (angle1 <= 0 || angle2 <= 0) {
    output.innerText = "Length of the sides should be greater than 0";
  } else {
    const hypotenuse = Math.sqrt(angle1 ** 2 + angle2 ** 2);
    output.innerText = "Length of the hypotenuse is " + hypotenuse;
  }
});
