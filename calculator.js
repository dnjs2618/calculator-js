const resultNumber = document.querySelector(".result");
const numberBtn = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const delBtn = document.querySelector(".del-btn");
const equal = document.querySelector(".equal-btn");

let firstNumber = 0;
let secondNumber = 0;
let currentSign;
let result;

function HandleNumber() {
  const clickedNumber = this.outerText;
  if (currentSign === undefined) {
    firstNumber = firstNumber + clickedNumber;
    resultNumber.innerText = parseInt(firstNumber);
  } else {
    secondNumber = secondNumber + clickedNumber;
    resultNumber.innerText = parseInt(secondNumber);
  }
}

function HandleOperation() {
  currentSign = this.outerText;
  if (currentSign === "+") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result + parseInt(secondNumber));
    resultNumber.innerText = result;
  } else if (currentSign === "-") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result - parseInt(secondNumber));
    resultNumber.innerText = result;
  } else if (currentSign === "/") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result / parseInt(secondNumber));
    resultNumber.innerText = result;
  } else if (currentSign === "*") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result * parseInt(secondNumber));
    resultNumber.innerText = result;
  }
  secondNumber = 0;
}

function HandleDelbtn() {
  firstNumber = 0;
  secondNumber = 0;
  result = undefined;
  currentSign = undefined;
  resultNumber.innerText = 0;
}

function HandleEqual() {
  if (currentSign === "+") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result + parseInt(secondNumber));
    resultNumber.innerText = result;
  } else if (currentSign === "-") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result - parseInt(secondNumber));
    resultNumber.innerText = result;
  } else if (currentSign === "/") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result / parseInt(secondNumber));
    resultNumber.innerText = result;
  } else if (currentSign === "*") {
    result === undefined
      ? (result = parseInt(firstNumber))
      : (result = result * parseInt(secondNumber));
    resultNumber.innerText = result;
  }
}

function init() {
  for (let i = 0; i < 10; i++) {
    numberBtn[i].addEventListener("click", HandleNumber);
  }
  for (let i = 0; i < 4; i++) {
    operation[i].addEventListener("click", HandleOperation);
  }
  delBtn.addEventListener("click", HandleDelbtn);

  equal.addEventListener("click", HandleEqual);
}

init();
