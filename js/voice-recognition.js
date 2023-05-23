window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const guessNumber = document.getElementById('guess')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);
recognition.addEventListener('end', () => recognition.start());

function onSpeak(e) {
  guess = e.results[0][0].transcript;
  showGuess(guess);
  checkValidValue(guess);
}

function showGuess(guess) {
  guessNumber.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${guess}</span>
  `
}
