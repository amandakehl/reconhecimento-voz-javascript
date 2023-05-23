const lowerValue = 1;
const highestValue = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * highestValue + 1)
}

// console.log(secretNumber);

const lowerValueElement = document.getElementById('lower-value');
lowerValueElement.innerHTML = lowerValue;

const highestValueElement = document.getElementById('highest-value');
highestValueElement.innerHTML = highestValue;
