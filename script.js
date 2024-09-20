const numberDraw = document.getElementById("number-draw");
const numberDrawResults = document.getElementById("number-draw-results");

const drawButton = numberDraw.querySelector("button");
const drawButtonAgain = numberDrawResults.querySelector("button");
const drawNumbersContainer = document.getElementById("draw-numbers-container");

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function buildRandomNumber(min, max, isNotRepeatNumber, uniqueNumbers) {
  const numberContainer = document.createElement("div");
  numberContainer.classList.add("number-container");
  const span = document.createElement("span");

  let randomNumber;
  if (isNotRepeatNumber) {
    let isNotNewNumber;
    do {
      randomNumber = getRandomIntInclusive(min, max);
      isNotNewNumber = uniqueNumbers.includes(randomNumber);
    } while (isNotNewNumber);

    uniqueNumbers.push(randomNumber);
  } else {
    randomNumber = getRandomIntInclusive(min, max);
  }

  span.innerText = String(randomNumber);
  numberContainer.appendChild(span);
  drawNumbersContainer.appendChild(numberContainer);
}

function changeQuantityOfDraws() {
  const resultNumber = document.getElementById("result-number");
  resultNumber.innerText = Number(resultNumber.innerText) + 1;
}

function drawNumbers() {
  changeQuantityOfDraws();

  let numbersQuantity = document.getElementById("numbers-quantity").value;
  const minNumber = Number(document.getElementById("min-number").value);
  const maxNumber = Number(document.getElementById("max-number").value);

  const uniqueNumbers = [];
  const isNotRepeatNumber = document.getElementById("switch").checked;

  if (isNotRepeatNumber && numbersQuantity > maxNumber) {
    numbersQuantity = maxNumber;
  }

  buildRandomNumber(minNumber, maxNumber, isNotRepeatNumber, uniqueNumbers);

  const delayInMilliseconds = 2500; // 2.5 seconds

  for (let index = 2; index <= numbersQuantity; index++) {
    setTimeout(
      () =>
        buildRandomNumber(
          minNumber,
          maxNumber,
          isNotRepeatNumber,
          uniqueNumbers
        ),
      delayInMilliseconds * (index - 1)
    );
  }

  setTimeout(
    () => (drawButtonAgain.style.display = "flex"),
    numbersQuantity * delayInMilliseconds
  );
}

drawButton.onclick = (event) => {
  event.preventDefault();

  numberDraw.style.display = "none";
  numberDrawResults.style.display = "flex";

  drawNumbers();
};

drawButtonAgain.onclick = (event) => {
  event.preventDefault();

  drawButtonAgain.style.display = "none";
  drawButtonAgain.style.opacity = 0;
  drawNumbersContainer.innerHTML = "";
  drawNumbers();
};
