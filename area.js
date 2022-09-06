const inputBase = document.querySelector("#base");
const inputHeight = document.querySelector("#height");
const calculateArea = document.querySelector("#calculate");
const output = document.querySelector("#output");
calculateArea.addEventListener("click", () => {
  const base = Number(inputBase.value);
  const height = Number(inputHeight.value);
  if (inputBase.value === "" || inputHeight.value === "") {
    output.innerText = "Please enter data into all the fieds";
  } else if (base <= 0 || height <= 0) {
    output.innerText = "Base and height should be greater than 0";
  } else {
    const area = 0.5 * base * height;
    output.innerText = "Area of the triangle is " + area;
  }
});
