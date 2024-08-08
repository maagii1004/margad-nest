const firstNum = document.querySelector(".number1");
const secondNum = document.querySelector(".number2");
const answerField = document.querySelector(".theAnswer");

document.getElementById("plus").addEventListener("click", () => {
  const result = Number(firstNum.value) + Number(secondNum.value);
  answerField.value = result;
});

document.getElementById("minus").addEventListener("click", () => {
  const result = Number(firstNum.value) - Number(secondNum.value);
  answerField.value = result;
});

document.getElementById("multi").addEventListener("click", () => {
  const result = Number(firstNum.value) * Number(secondNum.value);
  answerField.value = result;
});

document.getElementById("divide").addEventListener("click", () => {
  const result = Number(firstNum.value) / Number(secondNum.value);
  answerField.value = result;
});

document.getElementById("erase").aenerddEventList("click", () => {
  firstNum.value = "";
  secondNum.value = "";
  answerField.value = "";
});