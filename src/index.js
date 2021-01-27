// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const numbers = Array.from(document.querySelectorAll(".js-number"));
const operations = Array.from(document.querySelectorAll(".js-operation"));

let firstValue = "",
  firstDone,
  secondValue = "",
  secondDone,
  currentOperation;

function doOperation() {
  const intValueA = parseInt(firstValue, 10);
  const intValueB = parseInt(secondValue, 10);
  switch (currentOperation) {
    case "+":
      return intValueA + intValueB;
    case "-":
      return intValueA - intValueB;
    case "/":
      return intValueA / intValueB;
    case "*":
      return intValueA * intValueB;
    default:
      return;
  }
}

function handleNumberClick(e) {
  const clickedNum = e.target.innerText;
  if (!firstDone) {
    firstValue = firstValue + clickedNum;
    result.innerHTML = firstValue;
  } else {
    secondValue = secondValue + clickedNum;
    result.innerHTML = secondValue;
    secondDone = true;
  }
}

function calculate() {
  const operation = doOperation();
  result.innerHTML = operation;
  firstValue = operation;
  secondDone = false;
  secondValue = "";
}

function handleOperationClick(e) {
  const clickedOperation = e.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();
  }
  currentOperation = clickedOperation;
}

function handleReset() {
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = null;
  result.innerHTML = "0";
}

function handleEqualsClick() {
  if (firstDone && secondDone) {
    calculate();
  }
}

numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberClick);
});
operations.forEach(function (operation) {
  operation.addEventListener("click", handleOperationClick);
});
reset.addEventListener("click", handleReset);
equals.addEventListener("click", handleEqualsClick);

// const calculator = document.querySelector(".calContainer"),
//   buttonsNum = calculator.querySelectorAll(".buttonsNum"), //버튼
//   result = calculator.querySelector(".result"); //결과창
// //   reset = calculator.querySelector(".buttonsReset"); //c
// //   operator = calculator.querySelectorAll(".buttonsOper") //연산자

// let tempNum = 0;
// let inputNum = 0;

// function handelNumClick(abc) {
//   console.log(abc);
//   inputNum = this.value;
//   result.innerText = inputNum;
//   //   console.log(inputNum);
// }

// function init() {
//   buttonsNum.forEach(function (element) {
//     element.addEventListener("click", handelNumClick);
//   });
// }
// init();
// buttonsNum.forEach(function (element) {
//   element.addEventListener("click", (e) => {
//     if (e.target.matches("button")) {
//       const key = e.target;
//       const action = key.dataset.action;

//       if (
//         action === "add" ||
//         action === "substract" ||
//         action === "multiply" ||
//         action === "divide"
//       ) {
//         console.log("operator key");
//         let opValue = key;
//         console.log(opValue);
//       } else if (action === "clear") {
//         console.log("clear key");
//       } else if (action === "equals") {
//         console.log("equal key");
//       } else {
//         console.log("number key");
//         let numValue = key;
//         console.log(numValue);
//       }
//     }
//   });
// });
