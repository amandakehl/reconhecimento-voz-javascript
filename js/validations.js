function checkValidValue(guess) {
  const number = +guess;

  if (Number.isNaN(number)) {
    guessNumber.innerHTML += '<div>Valor inválido</div>';
    return 
  }

  if (number > highestValue || number < lowerValue) {
    guessNumber.innerHTML = `<div>Valor inválido: O número secreto precisa estar entre ${lowerValue} e ${highestValue}</div>`;
    return 
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${secretNumber}</h3>
      <button id="play-again" class=btn-play>Jogar novamente</button>
    `
  } else if (number > secretNumber) {
    guessNumber.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    guessNumber.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
  `
  }
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
})
